exports.handler = async (event) => {
  try {
    if (!event.body) {
      return { statusCode: 400, body: "No request body" };
    }

    const { Octokit } = await import("@octokit/rest");

    const newTrip = JSON.parse(event.body);

    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN,
    });

    const owner = "kaif13";
    const repo = "Travel-Blog";

    // ⚠ MUST MATCH YOUR WEBSITE IMPORT FILE
    const path = "src/data/trips.js";

    // get file
    const file = await octokit.repos.getContent({
      owner,
      repo,
      path,
    });

    const content = Buffer.from(file.data.content, "base64").toString();

    const match = content.match(/export const MOCK_TRIPS = (\[[\s\S]*?\]);/);

    if (!match) {
      throw new Error("MOCK_TRIPS array not found");
    }

    const trips = JSON.parse(match[1]);

    // check if exists
    const index = trips.findIndex((t) => t.id === newTrip.id);

    if (index === -1) {
      // ADD NEW TRIP
      trips.push(newTrip);
    } else {
      // UPDATE EXISTING
      trips[index] = newTrip;
    }

    const updatedFile = content.replace(
      /export const MOCK_TRIPS = (\[[\s\S]*?\]);/,
      "export const MOCK_TRIPS = " + JSON.stringify(trips, null, 2) + ";",
    );

    await octokit.repos.createOrUpdateFileContents({
      owner,
      repo,
      path,
      message: `Update trip ${newTrip.id}`,
      content: Buffer.from(updatedFile).toString("base64"),
      sha: file.data.sha,
    });

    return {
      statusCode: 200,
      body: "Trip saved successfully",
    };
  } catch (err) {
    console.error(err);

    return {
      statusCode: 500,
      body: err.message,
    };
  }
};

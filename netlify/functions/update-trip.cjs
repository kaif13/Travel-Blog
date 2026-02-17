if (!event.body) {
  return {
    statusCode: 400,
    body: "No data received",
  };
}

const { tripId, details } = JSON.parse(event.body);

exports.handler = async (event) => {
  try {
    const { Octokit } = await import("@octokit/rest");

    const { tripId, details } = JSON.parse(event.body);

    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN,
    });

    const owner = "kaif13";
    const repo = "Travel-Blog";
    const path = "src/data/mockData.js";

    // get file
    const file = await octokit.repos.getContent({
      owner,
      repo,
      path,
    });

    const content = Buffer.from(file.data.content, "base64").toString();

    const match = content.match(/export const MOCK_TRIPS = (\[[\s\S]*?\]);/);

    if (!match) throw new Error("MOCK_TRIPS not found");

    const trips = eval(match[1]);

    const index = trips.findIndex((t) => t.id === tripId);
    if (index === -1) throw new Error("Trip not found");

    trips[index].details = details;

    const updatedFile = content.replace(
      /export const MOCK_TRIPS = (\[[\s\S]*?\]);/,
      "export const MOCK_TRIPS = " + JSON.stringify(trips, null, 2) + ";",
    );

    await octokit.repos.createOrUpdateFileContents({
      owner,
      repo,
      path,
      message: "Update trip",
      content: Buffer.from(updatedFile).toString("base64"),
      sha: file.data.sha,
    });

    return {
      statusCode: 200,
      body: "Trip updated successfully",
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: err.message,
    };
  }
};

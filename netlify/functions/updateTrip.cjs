exports.handler = async (event) => {
  try {
    if (!event.body) {
      return { statusCode: 400, body: "No body" };
    }

    const { Octokit } = await import("@octokit/rest");

    const updatedTrip = JSON.parse(event.body);

    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN,
    });

    const owner = "kaif13";
    const repo = "Travel-Blog";
    const path = "src/data/trips.json";

    /* GET FILE */
    const file = await octokit.repos.getContent({
      owner,
      repo,
      path,
    });

    const content = Buffer.from(file.data.content, "base64").toString();

    const trips = JSON.parse(content);

    /* UPDATE OR ADD */
    const index = trips.findIndex((t) => t.id === updatedTrip.id);

    if (index >= 0) {
      trips[index] = updatedTrip;
    } else {
      trips.push(updatedTrip);
    }

    /* SAVE */
    const updatedFile = JSON.stringify(trips, null, 2);

    await octokit.repos.createOrUpdateFileContents({
      owner,
      repo,
      path,
      message: "Update trip " + updatedTrip.id,
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

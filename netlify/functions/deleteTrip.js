exports.handler = async (event) => {
  try {
    const { Octokit } = await import("@octokit/rest");
    const { tripId } = JSON.parse(event.body);

    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN,
    });

    const owner = "kaif13";
    const repo = "Travel-Blog";
    const path = "src/data/trips.json";

    const file = await octokit.repos.getContent({ owner, repo, path });

    const content = Buffer.from(file.data.content, "base64").toString();
    const trips = JSON.parse(content);

    const updated = trips.filter((t) => t.id !== tripId);

    await octokit.repos.createOrUpdateFileContents({
      owner,
      repo,
      path,
      message: "Delete trip " + tripId,
      content: Buffer.from(JSON.stringify(updated, null, 2)).toString("base64"),
      sha: file.data.sha,
    });

    return { statusCode: 200, body: "Deleted" };
  } catch (err) {
    return { statusCode: 500, body: err.message };
  }
};

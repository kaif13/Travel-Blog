const { Octokit } = require("@octokit/rest");

exports.handler = async (event) => {
  const { tripName, content } = JSON.parse(event.body);

  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });

  const owner = "kaif13";
  const repo = "Travel-Blog";
  const path = "src/data/trips.js";

  const file = await octokit.repos.getContent({ owner, repo, path });

  const text = Buffer.from(file.data.content, "base64").toString();

  const updatedTrips = eval(text.replace("export const trips =", ""));

  updatedTrips[tripName] = content;

  const newFile =
    "export const trips = " + JSON.stringify(updatedTrips, null, 2);

  await octokit.repos.createOrUpdateFileContents({
    owner,
    repo,
    path,
    message: "Update trip",
    content: Buffer.from(newFile).toString("base64"),
    sha: file.data.sha,
  });

  return { statusCode: 200 };
};

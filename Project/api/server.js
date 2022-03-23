const express = require("express"); //Line 1
const app = express(); //Line 2
const cors = require('cors')
const port = process.env.PORT || 3080; //Line 3
const { request } = require("@octokit/request");

app.use(cors());

app.get("/api", (req, res) => {
  request("GET https://api.github.com/repos/CarryMartes/pet-test-app/commits", {
    client_id: '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',
  }).then(response => {
    return res.json(response);
  }).catch(err => {
    return res.json(err);
  });
}); 

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

/**
 * commits
 * repositories
 * users in one repo
 * number of pull requests
 * private and public (repo)
 * authentication
 */
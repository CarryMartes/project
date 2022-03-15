const express = require("express"); //Line 1
const app = express(); //Line 2
const cors = require('cors')
const port = process.env.PORT || 3080; //Line 3

app.use(cors());

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

// create a GET route
app.get("/api", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  //Line 9
  res.json({what: "HI"})
}); //Line 11

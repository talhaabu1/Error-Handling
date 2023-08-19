const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // throw new Error("There was an error");
  res.send(1);
});

// not valid rout and call this function
app.use((req, res, next) => {
  // res.status(404).send(" This route not valid! Check your URL and try again");
  // next("addddddddddddddddddddd");
});
// ____E______N_____D_______?__________

app.use((err, req, res, next) => {
  if (err.message) {
    res.send(err.message);
  } else {
    res.send("there was an error");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

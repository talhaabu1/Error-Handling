const express = require("express");
const app = express();
const port = 3000;

app.get("/about", (req, res, next) => {
  //  asynchronous error handler this system
  setTimeout(function () {
    try {
      console.log(a);
    } catch (e) {
      next(e);
    }
  }, 100);
  // ____E______N_____D_______?__________

  // setTimeout(function () {
  //   console.log(a);
  // }, 100);
});

// defult error handler in express js
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

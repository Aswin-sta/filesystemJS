const fs = require("fs");

fs.mkdir("testfile", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file created succesfully");
  }
});

fs.rmdir("testfile", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file removed succesfully");
  }
});

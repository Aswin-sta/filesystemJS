const fs = require("fs");

const directoryPath = "./";
const directoryName = "sample Directory";
const fileContent = "sample file content2";

fs.readFile(
  directoryPath + "/" + directoryName + "/" + directoryName,
  "utf8",
  (err, res) => {
    if (err) console.log(err);
    else {
      console.log(`file read succesfully:${res}`);
    }
  }
);

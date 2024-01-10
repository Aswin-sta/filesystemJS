const fs = require("fs");

const directoryPath = "./";
const directoryName = "sample Directory";
const fileContent = "sample file content2";

if (!fs.existsSync(directoryName)) {
  fs.mkdir(directoryName, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("file created succesfully");
    }
  });
}

fs.writeFile(
  directoryPath + "/" + directoryName + "/" + directoryName,
  fileContent,
  "utf8",
  (err) => {
    if (err) console.log(err);
    else {
      console.log("File written successfully");
    }
  }
);


function printHelp () {
  console.log('intronode');
  console.log('v1.0.0');
  console.log('This is the help menu');
  console.log("");
  console.log("flags: ")
  console.log("")
  console.log("--help              prints this message out");
  console.log("--name={name}       input name");
  console.log("");
  console.log("");
}


module.exports = function () {
  printHelpMessge();
  process.exit(1);
}

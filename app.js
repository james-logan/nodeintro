#!/usr/bin/env node
var help = require('./app/help')
var hello = require('./app/hello')
var argv = require('yargs')
  // .default('name', 'World')
  .argv

var prompt = require('prompt')

if (argv.help) {
  help();
}


prompt.override = argv;
prompt.message = prompt.delimiter = '';
prompt.start();

prompt.get(['name'], function (err, result) {
  argv.name = result.name;

  hello.printHello(result.name)
});


// process.stdout.write("Hello World Again! \n");

// process.stderr.write('OMG ERRORRRRRR \n');



// console.log(process.argv)

// console.log(argv)




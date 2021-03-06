#!/usr/bin/env node
(function() {
  var command, mode, text;

  command = require('./command');

  mode = process.argv[2];

  text = process.argv[3];

  if (mode === '-h' || mode === '--help') {
    command.help();
  } else if (mode === 'list') {
    command.list(text);
  } else if (mode === 'search') {
    command.search(text);
  } else if (mode === 'download') {
    command.download(text);
  } else if (mode === 'info') {
    command.info(text);
  } else {
    command.help();
  }

}).call(this);

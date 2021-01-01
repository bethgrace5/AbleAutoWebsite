setVersion();

function setVersion() {
  const versionKeyIndex = process.argv.indexOf('-version');
  const version = process.argv[versionKeyIndex + 1];

  const fs = require('fs');
  var indexFile = fs.readFileSync('./src/index.html', 'utf8');
  indexFile = indexFile.replace('[APPVEYOR_BUILD_VERSION]', version);
  fs.writeFileSync('./src/index.html', indexFile, 'utf8');'
}

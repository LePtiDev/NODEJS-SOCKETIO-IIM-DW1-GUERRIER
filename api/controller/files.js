const fs = require('fs')
const path = require('path')

function getFilesByUrl(url){
  var files = fs.readdirSync(url);
  var filesWithExtention = []
  
  files.forEach(file => {
    if(file.substr(0, 1) !== "."){
      if(fs.lstatSync( url + "/" + file).isFile()){
        filesWithExtention.push({
          name: file,
          extention: path.extname(file),
          type: "file",
          path: url + "/" + file
        })
      }
      if(fs.lstatSync( url + "/" + file).isDirectory()){
        filesWithExtention.push({
          name: file,
          extention: null,
          type: "folder",
          path: url + "/" + file
        })
      }
    }
  });

  return filesWithExtention
}

module.exports = {getFilesByUrl} 
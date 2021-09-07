const fs = require('fs');
const glob = require('glob')


  fs.watch('./cvs/', (rename, filename) => {
    if(glob('./cvs/' + '**/*.cvs', {}, (err, files)=>{
        console.log(files)

        fs.writeFile('change.json', rename + ' ' + filename, function (err) {
      if (err) return console.log(err);
        });
      }))
    console.log(rename);
    console.log(filename);

  })
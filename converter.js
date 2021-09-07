const xlsx = require('xlsx');
const fs = require('fs');
 


let content = JSON.parse(fs.readFileSync ('./jsonToXlsx(Lesson 2 task 1).json'), 'utf8');


console.log(content);


const props1 = Object.getOwnPropertyNames(content);
console.log(content[props1[0]].servlet.length);
for (var i = 0; i < content[props1[0]].servlet.length; i++) {
    var counter = content[props1[0]].servlet[i];
    console.log(counter);
}


let newWB = xlsx.utils.book_new()
xlsx.utils.json_to_sheet
let newWS = xlsx.utils.json_to_sheet(content[props1[0]].servlet);
xlsx.utils.book_append_sheet(newWB, newWS, 'new data');
xlsx.writeFileSync(newWB, 'newExcel.xlsx')


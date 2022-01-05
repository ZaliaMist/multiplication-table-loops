document.write('<span class="cell header">&times;</span>');
let i = 0;
while (i <= 10) {
  document.write('<span class="cell header">' + i + "</span>");
  i++;
}

document.write("<br>");

let rowNum = 0 
while (rowNum <= 10) {
  document.write('<div class="cell header">'); 
  document.write(rowNum); 
  let colNum = 0
  document.write("</div>"); 
  while (colNum <= 10) {
    document.write('<span class="cell">'); 
    document.write(colNum * rowNum); 
    document.write("</span>"); 
    colNum = colNum + 1;
  }
  document.write("<br>");
  rowNum++;
}

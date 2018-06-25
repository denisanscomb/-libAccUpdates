function myUpdates() {
  
 
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('C3:C259').activate();
  spreadsheet.setActiveSheet(spreadsheet.getSheetByName('Categories'), true);
  spreadsheet.getRange('K2:K5').activate();
  spreadsheet.getRange('\'Input Sheet\'!C3:C259').setDataValidation(SpreadsheetApp.newDataValidation()
  .setAllowInvalid(false)
  .requireValueInRange(spreadsheet.getRange('Categories!$K$2:$K$5'), true)
  .build());
  
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('d3:d259').activate();
  spreadsheet.setActiveSheet(spreadsheet.getSheetByName('Categories'), true);
  spreadsheet.getRange('p2:p25').activate();
  spreadsheet.getRange('\'Input Sheet\'!d3:d259').setDataValidation(SpreadsheetApp.newDataValidation()
  .setAllowInvalid(false)
  .requireValueInRange(spreadsheet.getRange('Categories!$p$2:$p$25'), true)
  .build());
 
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('e3:e259').activate();
  spreadsheet.setActiveSheet(spreadsheet.getSheetByName('Categories'), true);
  spreadsheet.getRange('q2:q25').activate();
  spreadsheet.getRange('\'Input Sheet\'!e3:e259').setDataValidation(SpreadsheetApp.newDataValidation()
  .setAllowInvalid(false)
  .requireValueInRange(spreadsheet.getRange('Categories!$q$2:$q$25'), true)
  .build());
  
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('f3:f259').activate();
  spreadsheet.setActiveSheet(spreadsheet.getSheetByName('Categories'), true);
  spreadsheet.getRange('s2:s25').activate();
  spreadsheet.getRange('\'Input Sheet\'!f3:f259').setDataValidation(SpreadsheetApp.newDataValidation()
  .setAllowInvalid(false)
  .requireValueInRange(spreadsheet.getRange('Categories!$s$2:$s$25'), true)
  .build());
  
}

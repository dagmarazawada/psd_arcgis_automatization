﻿// example 1
var win, windowResource;
 
windowResource = "dialog {  \
    orientation: 'column', \
    alignChildren: ['fill', 'top'],  \
    preferredSize:[300, 130], \
    text: 'dialog test dagmara',  \
    margins:15, \
    \
    sliderPanel: Panel { \
        orientation: 'row', \
        alignChildren: 'right', \
        margins:15, \
        text: ' PANEL ', \
        st: StaticText { text: 'Wartość:' }, \
        sl: Slider { minvalue: 1, maxvalue: 100, value: 30, size:[220,20] }, \
        te: EditText { text: '30', characters: 5, justify: 'left'} \
        } \
    \
    bottomGroup: Group{ \
        cd: Checkbox { text:'Zaznacz mnie', value: true }, \
        cancelButton: Button { text: 'Anuluj', properties:{name:'cancel'}, size: [120,24], alignment:['right', 'center'] }, \
        applyButton: Button { text: 'Zastosuj', properties:{name:'ok'}, size: [120,24], alignment:['right', 'center'] }, \
    }\
}"
 
win = new Window(windowResource);
 
win.bottomGroup.cancelButton.onClick = function() {
  return win.close();
};
win.bottomGroup.applyButton.onClick = function() {
  return win.close();
};
 
win.show();

// example 2
var dlg=  
"dialog{text:'Script Interface',bounds:[100,100,500,220],"+  
"testFile:EditText{bounds:[10,40,310,60] , text:'' ,properties:{multiline:false,noecho:false,readonly:false}},"+  
"Browse:Button{bounds:[320,40,390,61] , text:'<<' },"+  
"statictext0:StaticText{bounds:[10,10,240,27] , text:'Please select Text File' ,properties:{scrolling:undefined,multiline:undefined}},"+  
"Process:Button{bounds:[10,80,190,101] , text:'Process' },"+  
"button2:Button{bounds:[210,80,390,101] , text:'Cancel' }};"  
var win = new Window(dlg,'test');  
win.center();  
win.testFile.enabled=false;  
win.Browse.onClick = function() {   
 selectedFile = File.openDialog("Please select TEXT file.","TEXT File:*.txt");   
  if(selectedFile != null) win.testFile.text =  decodeURI(selectedFile.fsName);  
}  
win.Process.onClick = function() {   
 if(win.testFile.text == '') {  
  alert("No text file has been selected!");  
  return;  
  }  
 win.close(1);  
 selectedFile.execute();  
}  
win.show(); 
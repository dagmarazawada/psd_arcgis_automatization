var dlg=  
"dialog{text:'Script Interface',bounds:[100,100,500,220],"+  
"testFile:EditText{bounds:[10,40,310,60] , text:'' ,properties:{multiline:false,noecho:false,readonly:false}},"+  
"Browse:Button{bounds:[320,40,390,61] , text:'<<' },"+  
"statictext0:StaticText{bounds:[10,10,240,27] , text:'Please select Text File' ,properties:{scrolling:undefined,multiline:undefined}},"+  
"Process:Button{bounds:[10,80,190,101] , text:'Otwórz' },"+  
"button2:Button{bounds:[210,80,390,101] , text:'Anuluj' }};"  
var win = new Window(dlg,'test');  
win.center();  
win.testFile.enabled=false;  
win.Browse.onClick = function() {
    
  selectedFile = File.openDialog("Wskaż plik TIF.","Plik TIF:*.tif");   
  if(selectedFile != null) win.testFile.text =  decodeURI(selectedFile.fsName);  

}  
win.Process.onClick = function() {   
  if(selectedFile != null) open(selectedFile); 
  win.close(1);  
  //selectedFile.execute();  
}  
win.show(); 
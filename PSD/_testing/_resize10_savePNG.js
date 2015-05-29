// get a reference to the current (active) document and store it in a variable named "doc"
doc = app.activeDocument;  

// change the color mode to RGB.  Important for resizing GIFs with indexed colors, to get better results
//doc.changeMode(ChangeMode.RGB);  

// these are our values for the end result width and height of our image
var fWidth = 10;
var fHeight = 10;

doc.resizeImage(UnitValue(fWidth,"%"),UnitValue(fHeight,"%"),null,ResampleMethod.BICUBIC);

/*
// do the resizing.  if height > width (portrait-mode) resize based on height.  otherwise, resize based on width
if (doc.height > doc.width) {
    doc.resizeImage(null,UnitValue(fHeight,"%"),null,ResampleMethod.BICUBIC);
}
else {
    doc.resizeImage(UnitValue(fWidth,"%"),null,null,ResampleMethod.BICUBIC);
}
// web export
var options = new ExportOptionsSaveForWeb();
//options.quality = 70;
options.format = SaveDocumentType.PNG;
options.optimized = true;

var newName = doc.name+'.png';

doc.exportDocument(File(doc.path+'/'+newName),ExportType.SAVEFORWEB,options);
*/

// save as png
var Name = app.activeDocument.name.replace(/\.[^\.]+$/, ''); 
var Ext = decodeURI(app.activeDocument.name).replace(/^.*\./,''); 
//if(Ext.toLowerCase() != 'psd') return; 
var Path = app.activeDocument.path; 
var saveFile = File(Path + "/" + Name +".png"); 
if(saveFile.exists) saveFile.remove(); 

SavePNG(saveFile); 

function SavePNG(saveFile){ 
    pngSaveOptions = new PNGSaveOptions(6, true); // compression 6, interlaced
	activeDocument.saveAs(saveFile, pngSaveOptions, true, Extension.LOWERCASE); 
} 

while (app.documents.length) {
	app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
}
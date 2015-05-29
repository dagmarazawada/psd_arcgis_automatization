// get a reference to the current (active) document and store it in a variable named "doc"
doc = app.activeDocument;  

// change the color mode to RGB.  Important for resizing GIFs with indexed colors, to get better results
//doc.changeMode(ChangeMode.RGB);  

// these are our values for the end result width and height (in pixels) of our image
var fWidth = 10;
var fHeight = 10;

// do the resizing.  if height > width (portrait-mode) resize based on height.  otherwise, resize based on width
if (doc.height > doc.width) {
    doc.resizeImage(null,UnitValue(fHeight,"%"),null,ResampleMethod.BICUBIC);
}
else {
    doc.resizeImage(UnitValue(fWidth,"%"),null,null,ResampleMethod.BICUBIC);
}

// our web export options
var options = new ExportOptionsSaveForWeb();
options.quality = 70;
options.format = SaveDocumentType.JPEG;
options.optimized = true;

var newName = 'web-'+doc.name+'.jpg';

doc.exportDocument(File(doc.path+'/'+newName),ExportType.SAVEFORWEB,options);
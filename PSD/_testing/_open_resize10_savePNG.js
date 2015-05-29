#target photoshop
#strict on
/*
var foldernames = ["3211685", "3211684", "3211683"];

for (index in foldernames) {
	//var path = "/d/dagmara/automatization/PSD/psd_test/" + foldernames[index];
	runthis();
}
*/
/*
for (var i=0; i < foldernames.length; i++) {
	getPaths();
	runthis();
}

function getPaths() {
	var foldernames = ["3211685", "3211684", "3211683"];
	var path = "/d/dagmara/automatization/PSD/psd_test/" + foldernames[i] + "/";
	return path;
}
*/
function runthis() {


var foldernames = ["3211685", "3211684", "3211683"];
for (index in foldernames) {
	var path = "/d/dagmara/automatization/PSD/psd_test/" + foldernames[index];



var inputFolder = new Folder(path);
var inputFiles = inputFolder.getFiles("*.tif");
	
for(index in inputFiles)
    {
    // open the file
    var fileToOpen = new File(inputFiles[index]);
    open(fileToOpen);

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

	// dispose
    fileToOpen = null;
    psdOptions = null;
    file  = null;
}

inputFolder = null;
inputFiles = null;

}

}

function SavePNG(saveFile){ 
    pngSaveOptions = new PNGSaveOptions(6, true); // compression 6, interlaced
	activeDocument.saveAs(saveFile, pngSaveOptions, true, Extension.LOWERCASE); 
}

function GetFileName(fullPath){
    var m = fullPath.match(/(.*)[\/\\]([^\/\\]+)\.\w+$/);
    return m[2];
}

while (app.documents.length) {
	app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
}
#target photoshop
#strict on

//alert("Script: open, resize 10%, save as png. - dagmara");

var foldernames = ["min"];
for (index in foldernames) {
	var path1 = "/d/dagmara/sopo_aktualizacja/SOPO_Konferencja/foto/" + foldernames[index];
	runthis(path1);
}

function runthis(path) {

var path = path1;

var inputFolder = new Folder(path);
var inputFiles = inputFolder.getFiles("*.jpg");
	
for(index in inputFiles)
    {
    // open the file
    var fileToOpen = new File(inputFiles[index]);
    open(fileToOpen);

	// get a reference to the current (active) document and store it in a variable named "doc"
	doc = app.activeDocument;  

	// these are our values for the end result width and height of our image
	var fWidth = 200;
	var fHeight = 200;

	doc.resizeImage(UnitValue(fWidth,"px"),null,null,ResampleMethod.BICUBIC);

	// save as png
	var Name = app.activeDocument.name.replace(/\.[^\.]+$/, ''); 
	var Ext = decodeURI(app.activeDocument.name).replace(/^.*\./,''); 
	//if(Ext.toLowerCase() != 'psd') return; 
	var Path = app.activeDocument.path; 
	var saveFile = File(Path + "/" + Name +".jpg"); 
	if(saveFile.exists) saveFile.remove(); 

	SaveJPG(saveFile); 
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

	// dispose
    fileToOpen = null;
    psdOptions = null;
    file  = null;
}

inputFolder = null;
inputFiles = null;

}

function SaveJPG(saveFile){ 
    var options = new ExportOptionsSaveForWeb();
    options.format = SaveDocumentType.JPEG;
    options.interlaced = true;
    options.quality = 60;

    var newName = saveFile;

    doc.exportDocument(File(newName),ExportType.SAVEFORWEB,options); 
}

function GetFileName(fullPath){
    var m = fullPath.match(/(.*)[\/\\]([^\/\\]+)\.\w+$/);
    return m[2];
}

while (app.documents.length) {
	app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
}

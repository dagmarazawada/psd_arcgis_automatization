#target photoshop
#strict on

//alert("Script: open, resize 10%, save as png. - dagmara");

var foldernames = ["3211685", "3211684", "3211683"];
for (index in foldernames) {
	var path1 = "/d/dagmara/automatization/PSD/psd_test/" + foldernames[index];
	runthis(path1);
}

function runthis(path) {

var path = path1;

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
    
    // invert colors
    var pixelLoc = [UnitValue("10 pixels") , UnitValue("10 pixels")];
    var colorSamplerRef = doc.colorSamplers.add(pixelLoc);
    //alert(colorSamplerRef.color.rgb.hexValue);

    if ( colorSamplerRef.color.rgb.hexValue == "000000" ) {
		var layerRef = app.activeDocument.artLayers.getByName("Tło");
        layerRef.invert();
	}

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

function SavePNG(saveFile){ 
    pngSaveOptions = new PNGSaveOptions(6, true); // compression 6, interlaced true
	activeDocument.saveAs(saveFile, pngSaveOptions, true, Extension.LOWERCASE); 
}

function GetFileName(fullPath){
    var m = fullPath.match(/(.*)[\/\\]([^\/\\]+)\.\w+$/);
    return m[2];
}

while (app.documents.length) {
	app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
}

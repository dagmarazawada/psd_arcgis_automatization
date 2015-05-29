#target photoshop
#strict on

runthis();
function runthis()
{
    var path = "/d/dagmara/automatization/PSD/psd_test/3211685/";

    var inputFolder = new Folder(path );
    var inputFiles = inputFolder.getFiles("*.png");

    for(index in inputFiles)
    {
        // open the file
        var fileToOpen = new File(inputFiles[index]);
        open(fileToOpen);

        // Change mode to rgb
        activeDocument.changeMode(ChangeMode.RGB);
        // add a new layer
        activeDocument.artLayers.add();

        //save
        var psdOptions = new PhotoshopSaveOptions();
        psdOptions.alphaChannels = true;
        psdOptions.annotations = false;
        psdOptions.embedColorProfile = false;
        psdOptions.layers = true;
        psdOptions.spotColors = false;

        var file = new File(path + GetFileName(String(inputFiles[index])));
        activeDocument.saveAs(file, psdOptions);

        activeDocument.close();

        // dispose
        fileToOpen = null;
        psdOptions = null;
        file  = null;
    }
    // dispose
    inputFolder = null;
    inputFiles = null;

}

function GetFileName(fullPath)
{
    var m = fullPath.match(/(.*)[\/\\]([^\/\\]+)\.\w+$/);
    return m[2];
}
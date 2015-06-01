var inputFolder = Folder.selectDialog("Select a folder to process");

var fileList = inputFolder.getFiles("*.png");

for(var i=0; i<fileList.length; i++) {
    alert(fileList[i]);
}

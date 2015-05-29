// test export for web

doc = app.activeDocument;  

var options = new ExportOptionsSaveForWeb();
//options.quality = 70;
options.format = SaveDocumentType.PNG;
options.optimized = true;

var newName = doc.name+'.png';

doc.exportDocument(File(doc.path+'/'+newName),ExportType.SAVEFORWEB,options);

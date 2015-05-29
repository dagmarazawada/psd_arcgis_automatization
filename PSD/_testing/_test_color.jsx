// test color

var docRef = app.activeDocument

var fWidth = 10;
var fHeight = 10;
docRef.resizeImage(UnitValue(fWidth,"%"),UnitValue(fHeight,"%"),null,ResampleMethod.BICUBIC);

var pixelLoc = [UnitValue("10 pixels") , UnitValue("10 pixels")];
var colorSamplerRef = docRef.colorSamplers.add(pixelLoc);
alert(colorSamplerRef.color.rgb.hexValue);

var pixelLoc2 = [UnitValue("20 pixels") , UnitValue("20 pixels")];
var colorSamplerRef2 = docRef.colorSamplers.add(pixelLoc2);
alert(colorSamplerRef2.color.rgb.hexValue);

if ( colorSamplerRef.color.rgb.hexValue == "000000" && colorSamplerRef2.color.rgb.hexValue == "000000" ) {
		var layerRef = app.activeDocument.artLayers.getByName("Tło");
        layerRef.invert();
	}
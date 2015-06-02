# export layers to PNG

import arcpy

mxd = arcpy.mapping.MapDocument("CURRENT")  
df = arcpy.mapping.ListDataFrames(mxd, '')[0] # mozliwy jeden dataframe

# Switch to layout view:
#mxd.activeView='PAGE_LAYOUT'

#Read input parameters from script tool
allLayers = arcpy.GetParameterAsText(0) # w parametrach narzedzia musi byc Multivalue YES
lyrList = allLayers.split(";")

PNGPath = arcpy.GetParameterAsText(1)

# Set export scale - jednak lepiej ustawic recznie w projekcie niz wpisywac
#setScale = arcpy.GetParameterAsText(2) #Long
#df.scale = setScale
#arcpy.RefreshActiveView()

#Turn of all lyrs in list
for lyr in arcpy.mapping.ListLayers(mxd, '', df):
    for layer in lyrList:
        if lyr.name == layer:
            lyr.visible = False
arcpy.RefreshActiveView()

# Loop through each layer, turn it on and export map as PNG
for lyr in arcpy.mapping.ListLayers(mxd, '', df):
    for layer in lyrList:
        if lyr.name == layer:
            lyr.visible = True
            arcpy.RefreshActiveView()
            arcpy.mapping.ExportToPNG(mxd, PNGPath+"\\" + lyr.name + ".png", resolution = 300, transparent_color = "255, 255, 255") # kolor bialy bedzie eksportowany jako przezroczysty
            lyr.visible = False
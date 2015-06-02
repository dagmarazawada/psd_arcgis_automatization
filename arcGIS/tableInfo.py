#!/usr/bin/env python
# -*- coding: utf-8 -*-

# print table info - fields and properties
import arcpy

mxd = arcpy.mapping.MapDocument("CURRENT") 

in_fc = arcpy.GetParameterAsText(0)
out_txt = arcpy.GetParameterAsText(1)
txtFile = open(out_txt,"w")
#in_fc = "d:/dagmara/automatization/arcGIS/countries/countries.shp"

def pprint_fields(in_fc):
    def _print(l):
        print("".join(["{:>12}".format(i) for i in l]))
        arcpy.AddMessage("".join(["{:>12}".format(i) for i in l]))
        txtFile.write("".join(["{:>12}".format(i) for i in l]))
        txtFile.write('\n')
    atts = ['name', 'aliasName', 'type', 'baseName', 'domain',
            'editable', 'isNullable', 'length', 'precision',
            'required', 'scale',]
    _print(atts)
    for f in arcpy.ListFields(in_fc):
        _print(["{:>12}".format(getattr(f, i)) for i in atts])

arcpy.AddMessage('---')
arcpy.AddMessage('TABLE PROPERTIES: ')
pprint_fields(in_fc)
arcpy.AddMessage('---')

txtFile.close()

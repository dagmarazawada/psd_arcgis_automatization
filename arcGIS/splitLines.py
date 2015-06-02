# split line to equal parts - ArcGIS 10.3 only!

in_fc = arcpy.GetParameterAsText(0)
out_fc = arcpy.GetParameterAsText(1)
out_count = int(arcpy.GetParameterAsText(2)) # how many features desired

line = arcpy.da.SearchCursor(in_fc, ("SHAPE@",)).next()[0]
arcpy.CopyFeatures_management([line.segmentAlongLine(i/float(out_count), ((i+1)/float(out_count)), True) for i in range(0, out_count)], out_fc)
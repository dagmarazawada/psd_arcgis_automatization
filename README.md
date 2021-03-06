# README #

Zbiór skryptów automatyzujących proste prace i przetworzenia w PSD (JavaScript) i ArcGIS (Python)

# Zastosowanie #

### PSD ###

* `_helloPsd_test` - pierwszy testowy skrypt, wyświetla alert w programie Photoshop

* `_layer_export_PNG24` - z aktywnego projektu .psd skrypt eksportuje wszystkie warstwy do oddzielnych plików .png i zapisuje je w tej samej lokalizacji co projekt

* `_open_resize10_savePNG2_invertBlack` - we wskazanych katalogach skrypt odszukuje pliki .tif, zmienia ich tryb barw na rgb, zmniejsza do 10% wielkości i zapisuje w tej samej lokalizacji w formacie .png, oryginalny plik .tif jest usuwany

* `_open_resize200px` - we wskazanych katalogach skrypt otwiera jpg, zmniejsza do 200px szerokości i nadpisuje w tej samej lokalizacji

* `_window_open_file` - skrypt uruchamiany w okienku dialogowym z guzikami, pozwala przeglądać pliki na dysku i otwiera wskazany obraz .tif

### ArcGIS ###

* `exportPNG` - w aktywnym projekcie .mxd skrypt kolejno eksportuje do formatu .png wszystkie warstwy projektu w widoku i rozmiarze takim jak do druku (layout view)

* `splitLine` - narzędzie dla ArcGIS 10.3, wskazaną linię dzieli na podaną liczbę równych odcinków

* `tableInfo` - wypisuje i zapisuje we wskazanym pliku .txt informacje o właściwościach pól tabeli wybranej warstwy, shp, tabeli

# Uruchomienie #

### PSD ###

* Skrypt otworzyć w Adobe ExtendScript Toolkit i przez niego uruchomić w Photoshop, lub
* Skrypty umieścić w ścieżkach instalacji PSD, np. `C:\Program Files\Adobe\Adobe Photoshop CS6 (64 Bit)\Presets\Scripts`
* Wywołanie poprzez PSD: Plik - Skrypty - Manadżer skryptów.. (odszukać w ścieżkach PSD lub wybranej lokalizacji)

### ArcGIS ###

* Wywołanie przez ArcMap: Otworzyć projekt ArcMap (.mxd), w zakładce ArcToolbox kliknąć prawym przyciskiem na ArcToolbox - Add Toolbox, odnaleźć i wskazać ściągnięty toolbox, lub odnaleźć ściągnięty toolbox przez ArcCatalog * W toolboxach znajdują się skrypty .py do uruchomienia przez dwuklik - tak jak dla narzędzi ArcToolbox, otworzy się okienko to podania parametrów
* Toolbox i skrypt powinny znajdować się w tym samym katalogu, jeśli skrypt ma inną lokalizację albo program nie może go znaleźć - we właściwościach wskazać poprawną ścieżkę do skryptu .py
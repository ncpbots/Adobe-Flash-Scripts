##Convert to Vector Symbols
>Converts selected bitmaps in the library to vectors, then stores them in a movieclip.

###Installing
-  Each folder contains a file that should go in its respective file in your local Flash user configuration.
-  The path (for a Windows user) should be something along the lines of [USER]\AppData\Local\Adobe\[Flash]\en_US\Configuration\[FolderName].
-  An easy way to find this folder is to open a new Flash Javascript file in whatever version of Flash you have, then File > Save As. Flash should, by default, direct you to the user configurations folder (or one of its folders, i.e. Commands, Javascript, just go up one directory).
-  Copy the files in the folders I have provided into their respective folder in your user configuration folder.
-  Explicitly, "toVectorSymbols.jsfl" should go in [USER]\AppData\Local\Adobe\[Flash]\en_US\Configuration\Javascript and "Convert to Vector Symbol.jsfl" should go in [USER]\AppData\Local\Adobe\[Flash]\en_US\Configuration\Commands

###Usage
>Make you do this with a blank stage. Create a blank keyframe if needed.
1. Select bitmaps in the Flash library, then click Commands > Convert to Vector Symbols.
2. The script will try to store the new symbols in a folder. Specify the path for the an existing folder or a new folder.
3. Leave the field blank if you want the script to leave the new symbols in the Library root.
-  Ex. "NewFolder" will store them in an existing folder called "NewFolder" or create a new folder with that name to store them in.
-  You can also specify paths for subfolders, i.e. "NewFolder/subfolder0".

###Notes
-  This script will also remove the source bitmaps from the library.
-  If you want to keep the original bitmaps, edit the "toVectorSymbols.jsfl" file.
-  I've commented which line to remove if you want to keep your bitmaps.
-  It should be Line 24: removeBitmaps();

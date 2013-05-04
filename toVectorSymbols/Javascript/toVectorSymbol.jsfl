/**
 * Written by Alvin Ling
 * I use this for MapleStory sprite animations
 * when I need to mass convert the individual image files to vectors.
**/

var doc = fl.getDocumentDOM();
var selectedItems = doc.library.getSelectedItems();
var folderpath;

function toVectorSymbol()
{
  // Check if the items are selected. If no items are selected, throw an alert.
  // If items are selected, throw the prompt to add text.
  if (selectedItems.length == 0)
  {
    alert("Please select 1 or more bitmaps in the library.");
  } else if (selectedItems.length >= 1)
  {
		folderpath = prompt("Please provide folder path to store symbols.");
		if (!(folderpath == null))
		{
    	convertItems();		// Converts bitmaps to vectors, then stores them in a movie clip.
			removeBitmaps();	// Deletes the source bitmaps. You can remove this if you want to keep the original bitmaps.
		}
  }
}

// Converts the selected bitmaps in the library to vectors, then symbols.
function convertItems()
{
	var needsFolder = !(folderpath == "");
	if (needsFolder) doc.library.newFolder(folderpath); 
	for (var i = 0; i < selectedItems.length; i++)
  {
		if (selectedItems[i] instanceof BitmapItem)
		{
			var itemName = selectedItems[i].name;
			var newName = itemName.replace(/\.[^/.]+$/, "");
			doc.library.addItemToDocument({x:0, y:0}, itemName);
			doc.selectAll();
			doc.traceBitmap(0, 1, 'pixels', 'few corners');
			doc.convertToSymbol("movie clip", newName, "bottom center");
			doc.selectAll();
			doc.deleteSelection();
			if (needsFolder) doc.library.moveToFolder(folderpath, newName, false)
		}
  }
}

function removeBitmaps()
{
	var itemArray = doc.library.items;
	var i;
	for(i = 0; i < itemArray.length; i++)
	{
		if (itemArray[i] instanceof BitmapItem)
		{
			var itemName = itemArray[i].name;
			doc.library.deleteItem(itemName);
		}
	}
}
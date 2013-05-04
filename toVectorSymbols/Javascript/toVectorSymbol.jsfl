/**
 * Written by Alvin Ling
 * I use this for MapleStory sprite animations
 * when I need to mass convert the individual image files to vectors.
**/

var doc = fl.getDocumentDOM();
var selectedItems = doc.library.getSelectedItems();

function toVectorSymbol()
{
  // Check if the items are selected. If no items are selected, throw an alert.
  // If items are selected, throw the prompt to add text.
  if (selectedItems.length == 0)
  {
    alert("Please select 1 or more bitmaps in the library.");
  } else if (selectedItems.length >= 1)
  {
    convertItems();		// Converts bitmaps to vectors, then stores them in a movie clip.
    removeBitmaps();	// Deletes the source bitmaps. You can remove this if you want to keep the original bitmaps.
  }
}

// Converts the selected bitmaps in the library to vectors, then symbols.
function convertItems()
{
  var i;
	var itemName;
	for (i = 0; i < selectedItems.length; i++)
  {
		if (selectedItems[i] instanceof BitmapItem)
		{
			itemName = selectedItems[i].name;
			doc.library.addItemToDocument({x:0, y:0}, itemName);
			doc.selectAll();
			doc.traceBitmap(0, 1, 'pixels', 'few corners');
			doc.convertToSymbol("movie clip", itemName.replace(/\.[^/.]+$/, ""), "bottom center");
			doc.selectAll();
			doc.deleteSelection();
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

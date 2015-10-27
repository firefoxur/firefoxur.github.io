// P A G I N A T I O N
// On index.html load, display 5 most recent project_items
// $(document).ready(function () {
	
// Display pagination for remaining project_items

// When checkbox is clicked, display 5 most recent matching project_items

// Display pagination for remaining project_items


//F I L T E R I N G

var $results=$('.project_item'),
$checks=$(':checkbox');

$checks.on('change', filterItems);

function filterItems () {
	$('#sorry').remove()
	var $checked=$checks.filter(':checked');
	/* show all when nothing checked*/
	if(!$checked.length){
		$results.show();
		return; /* quit here if nothing checked */
	} else {
		/* create array of checked values */
		var checkedVals= $.map($checked, function(el){
			return el.value
		});

		/* hide all results, then filter for matches */
		var showResults = $results.hide().filter(function(){
			/* split categories for this result into an array*/
			var tagData = $(this).data('tag');

			if (tagData) {
				var tagArray = tagData && tagData.split(' ')
			} else {
				return
			}

	        // var tags = $(this).data('tag').split(' ');
	        /* filter the checkedVals array to only values that match */
	        var checkMatches=checkedVals.filter(function(checkedValue){              
	        	return $.inArray(checkedValue, tagArray) !== -1;
	        });
	        /* only return elements with matched array and original array being same length */             
	        return checkMatches.length === checkedVals.length;
	        /* show results that match all the checked checkboxes */            
	    })

		showResults.show();
		/* do something when there aren't any matches */
		if(!showResults.length){
			// alert('Sorry, no matching reports.');
			$('<p id="sorry">Sorry, no matching reports.</p>').appendTo('#projects');
		}
	}
}

// R E S E T - F I L T E R S
$('#reset').on('click', function () {
    $("input[type='checkbox']").removeAttr('checked');
    filterItems();
})



//C U R R E N T - P A G E

var i = document.location.href.lastIndexOf("/");
var current = document.location.href.substr(i+1);

    $(".nav_highlight a").removeClass('active');

    $(".nav_highlight a[href^='"+current+"']").each(function(){
        $(this).addClass('active');
    });
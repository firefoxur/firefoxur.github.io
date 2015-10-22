var $results=$('.project_item'),
    $checks=$(':checkbox');

$checks.change(function(){
    var $checked=$checks.filter(':checked');
    /* show all when nothing checked*/
    if(!$checked.length){
        $results.show();
        return; /* quit here if nothing checked */
    }
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
        return checkMatches.length;
     /* show results that match all the checked checkboxes */            
    })

    showResults.show();
    /* do something when there aren't any matches */
    if(!$results.length){
       alert('Ooops...no matches');
    }


});










// $(document).ready(function () {
//             $('.results > li').hide();

//             $('div.sidebar').find('input:checkbox').live('click', function () {
//                 $('.results > li').show();
//                 $('div.sidebar').find('input:checked').each(function () {
//                     $('.results > li.' + $(this).attr('rel')).hide();
//                 });
//             });
//         });  







// when user clicks on checkbox VALUE
// Only display project_items with 
// 	data-topics = VALUE, 
// 	data-platofrm = VALUE, 
// 	data-location = VALUE

// do i need the extra layer of naming?





// function filtering () {

// }

// // Check
// $("#checkbox").attr("checked", true);

// //  Uncheck
// $("#checkbox").attr("checked", false);

// $('.hamburger').on('click', function () {
// 	$('#menu').toggleClass ('open');
// });



//  var elements = $('.menu-item').find('input:checked');

//     if(elements.length){
//         elements.each(function () {
//             post.filter('.' + this.id).show();
//         });
//     }
//     else
//         post.show();
//   });


// var elements = $('.project_item').find('input:checked');
// if elements.length){

// }






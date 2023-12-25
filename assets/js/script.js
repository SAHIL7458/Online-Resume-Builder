
// Script for handling form repeater using jQuery Repeater plugin
// form repeater
$(document).ready(function(){
   // Initialize the repeater plugin  
    $('.repeater').repeater({
        // Configuration options for the repeater

        // Do not initialize the repeater with an empty item
        initEmpty: false,
        defaultValues: {
            'text-input': ''
        },
        show:function(){
        // Function to show a form section
            $(this).slideDown();
        },
        hide: function(deleteElement){
            $(this).slideUp(deleteElement);
            setTimeout(() => {
                generateCV();
            }, 500);
        },
// Ensure that the first item in the repeater is undeletable
        isFirstItemUndeletable: true
    })
})
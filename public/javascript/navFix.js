
jQuery( window ).load(function() {
    // When clicked anywhere on the page
    $('html').click(function() {
        
        // Determine which menu content is open
        var openMenu = $('body').attr('data-nav-active');
        
        // if menu content is "mobile"
        if (openMenu == "mobile") {
            
            // Remove the "active" class from the nav hamburger element
            $('.nav__hamburger').removeClass('active');

        }
        
        // if menu content is either "products" or "resources"
        if (openMenu == "products" || openMenu == "resources" ) {
            
            // switch the menu content to "mobile"
            $('body').attr('data-nav-active','mobile');

        }
        
        // Remove the nav open class on the body
        $('body').removeClass("nav__open")
        
        // Remove active link class
        $('.link__triangle-bottom').removeClass("active");
        
    });

    $('.nav__top').click(function(event){
        event.stopPropagation();
    });
    
    
    // Bool to determine if the menu button has been clicked once
    var clickedOnce = false;
    
    // When nav hamburger is clicked
    $('.nav__hamburger').click(function() {
        
        if (clickedOnce) {
        
            // If the element is active
            if ($(this).hasClass('active')) {

                // Remove the nav open class on the body
                $('body').removeClass("nav__open")

                // Remove the "active" class from the nav hamburger element
                $(this).removeClass('active');

            }  else {

                // Add the nav open class on the body
                $('body').addClass("nav__open")

                // Add the "active" class from the nav hamburger element
                $(this).addClass('active');
            }
        
        } else {
        
            clickedOnce = true;
        }
        
    });
});
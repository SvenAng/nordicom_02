
(function($) {

    "use strict";

    /******************************************************************************************************************************************
     * ALLTID ALLTID ALLTID ALLTID ALLTID ALLTID ALLTID ALLTID ALLTID ALLTID ALLTID ALLTID ALLTID ALLTID ALLTID ALLTID ALLTID ALLTID ALLTID
     ******************************************************************************************************************************************/
    Drupal.behaviors.NordicomMisc = {
        attach: function(context, settings) {
            $('html', context).once('foo', function() {

                // Mobil meny
                $('.zone-branding-wrapper', context).once('foo', function() {
                    
                    // Sticky huvudmeny
                    var sticky = new Waypoint.Sticky({
                        element: $('.zone-branding-wrapper')[0],
                        offset: 0
                    });

                    // Headroom btn
                    var up_btn_head = document.querySelector("body");
                    var headroom = new Headroom(up_btn_head, {
                        "offset": 550,
                        "tolerance": 10,
                        "classes": {
                            "initial": "headr",
                            "pinned": "scroll-up",
                            "unpinned": "scroll-down",
                            "top": "menu-top",
                            "notTop": "menu-below",
                            "bottom": "headr-bm",
                            "notBottom": "headr-nbm"
                        }
                    });
                    headroom.init();

                    // Add Menu Open Class
                    $("#superfish-2-toggle").click(function(event) {
                        var $this = $("body");

                        // Trigger click first time
                        if (!$this.hasClass("mobile-clicked")) {
                            $this.addClass("mobile-clicked");
                            //$("#block-superfish-2 ul.sf-main-menu li.active-trail.sf-depth-1 > a").trigger("click");
                        }
                                                
                        if ($this.hasClass("mobile-open")) {
                            $this.removeClass("mobile-open");
                            return;
                        }
                        $this.addClass("mobile-open");
                        $("#block-superfish-2 ul.sf-main-menu li.active-trail.sf-depth-1 > a").trigger("click");

                        // Add class to prevent cloning of menu item
                        $("#block-superfish-2 ul.sf-main-menu li.sf-depth-2.menuparent li").addClass("sf-clone-parent");
                    });

                    
                    // Prevent expand on level 2 go to link instead
                    $("#block-superfish-2 ul.sf-main-menu li a.sf-depth-2.menuparent").click(function( event ) {
                        //event.preventDefault();
                        event.stopPropagation();
                        var $url_link = $(this).attr("href");
                        window.location.href = $url_link;
                        return false;
                    });

                });


            });
        }
    };
    /******************************************************************************************************************************************
     * ALLTID END ALLTID END ALLTID END ALLTID END ALLTID END ALLTID END ALLTID END ALLTID END ALLTID END ALLTID END ALLTID END ALLTID END
     ******************************************************************************************************************************************/
})(jQuery);

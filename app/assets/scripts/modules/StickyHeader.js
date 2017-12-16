import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
    
    constructor() {  
        this.siteHeader = $(".site-header"); 
        this.headerTriggerElement = $(".base-banner__title-trigger");
        this.frontTitle = $(".base-banner__title");
        this.frontSubtitle = $(".base-banner__subtitle"); 
        this.headerText = $(".site-header__addtext");
        this.HeaderForm = $(".base-banner__form");
        this.ScrollToTopArrow = $(".scroll-to-top");
        this.ArrowToTopTriggerElement = $(".prices");
        this.createHeaderWaypoint();
        this.createTopwaypointtrigger();
        this.pageSections = $(".page-section");
        this.headerLinks = $(".primary-nav a");
        this.createPageSectionWaypoints();
        this.addSmoothScrolling();
    }
    
    addSmoothScrolling() {
        this.headerLinks.smoothScroll();
       
    }
   
    
    createHeaderWaypoint() {
        var that = this;
        new Waypoint({
            element: this.headerTriggerElement[0],
            handler: function(direction) {
               if(direction == "down") {
                   that.HeaderForm.addClass("base-banner__form--visible");
                   that.frontSubtitle.addClass("base-banner__subtitle--small");
                    that.frontTitle.addClass("base-banner__title--small");
                     that.siteHeader.addClass("site-header--dark");
                   that.headerText.addClass("site-header__addtext--visible");
                 
               } else {
                    that.HeaderForm.removeClass("base-banner__form--visible");
                    that.frontSubtitle.removeClass("base-banner__subtitle--small");
                      that.siteHeader.removeClass("site-header--dark");
                    that.headerText.removeClass("site-header__addtext--visible");
                    that.frontTitle.removeClass("base-banner__title--small");
               
               }
            }
        });
    }
    
    createPageSectionWaypoints() {
        var that = this;
        this.pageSections.each(function() {
            var currentPageSection = this;
           new Waypoint({
               element: currentPageSection,
               handler: function(direction) {
                   
                   if (direction == "down") {
                    var matchinglink = currentPageSection.getAttribute("data-matching-link");
                    that.headerLinks.removeClass("is-current-link");
                    $(matchinglink).addClass("is-current-link");
                   }
               },
               offset: "20%"
           });
            new Waypoint({
               element: currentPageSection,
               handler: function(direction) {
                   
                   if (direction == "up") {
                    var matchinglink = currentPageSection.getAttribute("data-matching-link");
                    that.headerLinks.removeClass("is-current-link");
                    $(matchinglink).addClass("is-current-link");
                   }
               },
               offset: "-20%"
           });
        });
    }
    createTopwaypointtrigger() {
        var that = this;
        new Waypoint({
            element: this.ArrowToTopTriggerElement[0],
            handler: function(direction) {
               if(direction == "down") {
                    that.ScrollToTopArrow.addClass("scroll-to-top--visible");
                 
                 
               } else {
                     that.ScrollToTopArrow.removeClass("scroll-to-top--visible");
                 
               
               }
            }
        });
    }
    
}

export default StickyHeader; 
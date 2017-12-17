import $ from 'jquery';
class scroll {
    
    constructor() {
        this.ScrollToTopArrow = $(".scroll-to-top");
         this.HTML = $('html, body');
        this.events();
    }
     events() { 
          this.ScrollToTopArrow.click(this.scrolltotop.bind(this));  
 
    
}
    scrolltotop() {
       this.HTML.animate({scrollTop : 0}, 800);
    }

 
}

export default scroll;

                       
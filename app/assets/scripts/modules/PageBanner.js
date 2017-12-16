
import $ from 'jquery';

class PageBanner {
    
    constructor() {
      this.MainTitle = $(".base-banner__text-content");
        this.Dot = $(".base-banner__dots");
         this.events();
    }
    
  
    
    events() { 
          this.Dot.click(this.toggleTitle.bind(this)); 
        
       
    }
    
      toggleTitle() {
          
        this.MainTitle.toggleClass("base-banner__text-content--hided");     
       
    }
 
   
    
    
}
export default PageBanner; 
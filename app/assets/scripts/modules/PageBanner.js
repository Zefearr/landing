
import $ from 'jquery';

class PageBanner {
    
    constructor() {
      this.MainTitle = $(".base-banner__overlay");
        this.Dot = $(".base-banner__dots");
         this.events();
    }
    
  
    
    events() { 
        this.Dot.click(this.ChangeBackground.bind(this));
    
        
       
    }
   
    
    
    
      ChangeBackground() {
          
        this.MainTitle.toggleClass("base-banner__overlay--light");     
       
    }
 
   
    
    
}
export default PageBanner; 
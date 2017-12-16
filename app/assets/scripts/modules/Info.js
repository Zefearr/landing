import $ from 'jquery';

class Info {
    
    constructor() {
      this.pricesInfo = $(".info__content");
        this.infoIcon = $(".info__menu-icon");
      
     
         this.events();
    }
    
  
    
    events() { 
          this.infoIcon.click(this.toggleTheInfo.bind(this)); 
        
       
    }
    
      toggleTheInfo() {
       
        this.pricesInfo.toggleClass("info__content--expanded");
        this.infoIcon.toggleClass("info__menu-icon--expanded");
          
       
    }
 
   
    
    
}
export default Info; 
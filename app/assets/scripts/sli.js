 var responsiveSlider = function() {
     var slider = document.getElementById("slider");
     var sliderWidth = slider.offsetWidth;  
     var sliderList = document.getElementById("sliderWrap");
     var count = 1;
     var items = sliderList.querySelectorAll("li").length;
     var prev = document.getElementById("prev");
     var next = document.getElementById("next");
     
     window.addEventListener('resize', function() {
        sliderWidth = slider.offsetWidth; 
     });
     
     var prevSlide = function() {
         if(count > 1) {
             count = count -2;
             sliderList.style.left = "-" + count * sliderWidth + "px";
             count++;
         } else if(count = 1) {
             count = items -1;
             sliderList.style.left = "-" + count * sliderWidth + "px";
             count++;
         }
     };
      var nextSlide = function() {
          
        
          
         if(count < items) {
           
             sliderList.style.left = "-" + count * sliderWidth + "px";
             count++;
             
         } else if(count = items) {
            
             sliderList.style.left = "0px"
             count = 1;
            
         }
     };
     
     
     
     next.addEventListener("click", function(){
       nextSlide();                    
    });
    prev.addEventListener("click", function(){
       prevSlide();                    
    });
     
   
     
 }
 
 window.onload = function() {
     responsiveSlider();
 }
 
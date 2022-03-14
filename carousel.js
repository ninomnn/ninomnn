var slider_i = 1; 
var slider_change = function (){
   if(++slider_i > 3){
      slider_i=1;
   } 
   document.getElementById('item-'+slider_i).checked = true;         
   setTimeout(slider_change, 7000);
};
slider_change();
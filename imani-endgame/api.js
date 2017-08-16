var key= "AIzaSyDCyDct55DD5v-6mrVO2miKo2hePEe_gd8";
 $(document).ready(function(){
$.ajax({
url : "https://maps.googleapis.com/maps/api/staticmap?center=Australia&size=640x400&style=element:labels|visibility:off&style=element:geometry.stroke|visibility:off&style=feature:landscape|element:geometry|saturation:-100&style=feature:water|saturation:-100|invert_lightness:true&key=AIzaSyDCyDct55DD5v-6mrVO2miKo2hePEe_gd8",
dataType:'json',
success:function(data){
    console.log(data);
}
});
});
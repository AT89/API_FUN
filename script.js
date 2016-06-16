$(document).ready(function(){

  $("#hybridAnimals").on("click", function(){
    console.log("clicked");
    $.getJSON("https://www.reddit.com/r/hybridanimals/.json?jsonp=?", function(data) {
      $.each(data.data.children, function(i,item){
          $("<img/>").attr("src", item.data.url).appendTo("#images");
      });

    });
  });
});

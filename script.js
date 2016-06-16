var target = '';
var fixer = "http://accesscontrolalloworiginall.herokuapp.com/";
var page = 2;

var retrieveImg = function(){
  $.getJSON(target,  function(data) {
    $.each(data.data.children, function(i,item){
      //if has data img
        $("<img/>").attr("src", item.data.url).appendTo("#images");
    });
  })
  .fail(function(){
    console.log("fail");
  })
}
//item.data.preview.images[0].source. THIS WORKS WITH FUNNY but the hybrid animals/memes first stickied post doesnt contain a preview..so it errors. Need to add an if statement to ignore reddit post without data preview.. soo that is if = data.preview then.. do code

var clearImg = function(){
      $("#images").replaceWith("<div id='images'></div>"); //clear the current
}
var clearTarget = function(){
  target = '';
}

$(document).ready(function(){
  console.log("clicked");
  $("#hybridAnimals").on("click", function(){
    clearImg();
    clearTarget();
    target = fixer+"https://www.reddit.com/r/hybridanimals/.json?";
    retrieveImg();
  });

  $("#memes").on("click", function(){
    console.log("clicked");
    clearImg();
    clearTarget();
    target = fixer+"https://www.reddit.com/r/memes/.json?";
    retrieveImg();
  });

  $("#funny").on("click", function(){
    console.log("clicked");
    clearImg();
    clearTarget();
    target = fixer+"https://www.reddit.com/r/funny/.json?";
    retrieveImg();
  });

//.getJSON is short for:
// $.ajax({
//   dataType: "json",
//   url: url,
//   data: data,
//   success: success
// });
//

//need to remove noredirect, causing some images not to be linked.. some url's are albums.. looked into the imgur api but that requires auth

  $(window).scroll(function() {
     if($(window).scrollTop() + $(window).height() == $(document).height()) {
           $("html, body").animate({ scrollTop: 0 }, "slow");
           //if page 1..
           clearImg();
           target = target.replace("/.json?","/#page="+page+"/.json?");
           retrieveImg();
           page++;
           //else split and then add page + .json
     }
// use "http://accesscontrolalloworiginall.herokuapp.com/"; before to access.. overcomes API obstacle
//      demoString = "Jack's birthday is 8/22";
      // newString = demoString.replace("Jack","Jacques");
  });

}); //from ready

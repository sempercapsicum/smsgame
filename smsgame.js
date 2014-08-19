$(document).ready(function() {
  $('.introduction .title').hide();
  
  $(".intro").submit(function(e){
    e.preventDefault();
    var start = $('.introduction .start');
    var intro = $('.introduction .title');
    var investigate = $('.part1 .invest')
    var fname = $(".fname").val();
    var title = "Subterranean Mountaintop Seaside: " +fname+ "'s Big Adventure"
    var desc1 = "You are standing on a beautiful hillside, staring out across a wide valley dotted with trees. The grasses around you are waving in the wind, and the sun is shining on your face. Nothing could be more peaceful! Suddenly, you hear a rustling behind you. Turning, you see a greyish shape bobbing through the grass."
    intro.html(title);
    start.html(desc1);
    investigate.slideDown();
    intro.slideDown();
    start.slideDown();
  });

  $(".invest").submit(function(e){
      e.preventDefault();
      var decision = $(".part1 .investigate").val();
      var response1 = $(".part1 .response1");
      var opts1 = $(".part2 .opts1");
      var userDec1 = function() {
        if (decision == "yes" || decision == "Yes") {
          response1.html("You quietly slip through the grass towards the shape, which turns out to be rather furry. As you creep closer, it freezes. It's a raccoon! She looks scared.");
          $(opts1).slideDown();
        } else if (decision == "no" || "No") {
          response1.html("You are a big chicken, and find the shape frightening. You back away, tumbling off a very tall cliff. You lose.");
        } else {
          response1.html("Sorry, you'll need to answer Yes or No to move forward.");
        }
      }
        response1.html(userDec1)
        response1.slideDown();
        $(".intro").slideUp();
        $(".welcome").slideUp();
      });

  $(".opts1").submit(function(e){
      e.preventDefault();
      var decision = $(".part2 .options1").val();
      var response2 = $(".part2 .response2");
      var userOpts1 = function() {
        if (decision == "pet" || decision == "Pet" || decision == "Pat" || decision == "pat" || decision == "Stroke" || decision == "stroke" || decision == "Hug" || decision == "hug" || decision == "feed" || decision == "Feed") {
          response2.html("You reach down to " +decision+ " the raccoon, but she backs away hissing. She takes off around the side of the hill.");
        } else if (decision == "kick" || decision == "Kick" || decision == "punch" || decision == "Punch") {
          response2.html("Wow, you're actually a horrible person. Start again and be nice this time! We don't hurt the furry creatures. No!");
        } else if (decision == "talk" || decision == "Talk" || decision == "talk to" || decision == "Talk to" || decision == "smile" || decision == "Smile"){
          response2.html("You say something friendly to the raccoon and she eases back on her haunches and tilts her head to the side, as if listening.");
        } else {
          response2.html("Sorry, you'll have to try something else.")
        }
      }
        response2.html(userOpts1)
        response2.slideDown();
        $(".invest").slideUp();
        $(".start").slideUp();
      });

   $(".opts2").submit(function(e){
      e.preventDefault();
      var decision = $(".part3 .options2").val();
      var response3 = $(".part3 .response3");
      var userOpts2 = function() {
        if (decision == "pet" || decision == "Pet" || decision == "Pat" || decision == "pat" || decision == "Stroke" || decision == "stroke" || decision == "Hug" || decision == "hug" || decision == "feed" || decision == "Feed") {
          response3.html("You reach down to " +decision+ " the raccoon, but she backs away hissing. She takes off around the side of the hill.");
        } else if (decision == "kick" || decision == "Kick" || decision == "punch" || decision == "Punch") {
          response3.html("Wow, you're actually a horrible person. Start again and be nice this time! We don't hurt the furry creatures. No!");
        } else if (decision == "talk" || decision == "Talk" || decision == "talk to" || decision == "Talk to" || decision == "smile" || decision == "Smile"){
          response3.html("You say something friendly to the raccoon and she eases back on her haunches and tilts her head to the side, as if listening.");
        } else {
          response3.html("Sorry, you'll have to try something else.")
        }
      }
        response3.html(userOpts2)
        response3.slideDown();
        $(".part1").slideUp();
      });


});
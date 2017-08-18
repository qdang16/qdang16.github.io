"use strict";

var Twitter = require('node-twitter-api');

// todo: keep secret hidden
module.exports = function(app) {
  var twitter = new Twitter({
    consumerKey: '5Uz3wfsYZMY7BqgDwCLdZr39O',
    consumerSecret: 'lmSNa45Ro4C2IEIlKn3NKj8V41ghYyduICqhbBiSKqR0EGeNR8',
    callback: ' https://quintondang.github.io',
  });

  var _requestSecret;

  app.get("/request-token", function(req, res) {
    twitter.getRequestToken(function(err, requestToken, requestSecret) {
      if (err)
        res.status(500).send(err);
      else {
        _requestSecret = requestSecret;
        res.redirect("https://api.twitter.com/oauth/authenticate?oauth_token=" + requestToken);
      }
    });
  });

  app.get("/access-token", function(req, res) {
    var requestToken = req.query.oauth_token,
  verifier = req.query.oauth_verifier;

    twitter.getAccessToken(requestToken, _requestSecret, verifier, function(err, accessToken, accessSecret) {
      if (err)
        res.status(500).send(err);
      else
        twitter.verifyCredentials(accessToken, accessSecret, function(err, user) {
          if (err)
            res.status(500).send(err);
          else
            res.send(user);
        });
    });
  });
};

$(document).ready(function() {
  console.log('got in here');
  $(function() {
      $('#sign-in-with-twitter').on('click', function() {
          window.location.href = 'quintondang.github.io/request-token';
      });
  });
    // $("#tab-home").click(function() {

    //     $('.tab').css("font-weight", "normal");
    //     $('html, body').animate({
    //         scrollTop: $("#view").offset().top
    //     }, 500);

    //     $(this).css("font-weight", "bolder");
    // });

    // $('#tab-project').click(function() {

    //     $('.tab').css("font-weight", "normal");
    //     $('html, body').animate({
    //         scrollTop: $(".projects-container").offset().top
    //     }, 500);

    //     $(this).css("font-weight", "bolder");
    // });

    // $('#tab-contact').click(function() {
    //     $('.tab').css("font-weight", "normal");
    //     $('html, body').animate({
    //         scrollTop: $(".contactme-container").offset().top
    //     }, 500);

    //     $(this).css("font-weight", "bolder");
    // });

    // $('.view-text').delay(800).hover(function() {
    //     $('.view-text').fadeOut("fast");
    //     $('.view-bio').fadeTo("slow", 1);
    //     $('.view-bio-nub').fadeTo("slow", 1);
    //     $('.view-image').fadeTo("slow", 1);
    // });

});
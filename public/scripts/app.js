/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(function() {

  var tweetData = {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  }


  function createTweetElement(tweetData) {

    let $tweetContainer = $("<article>").addClass("tweets-container");
    let $header = $("<header>").addClass("tweet-header");
    let $footer = $("<footer>").addClass("tweet-footer");
    let $content = $("<p>").addClass("content").text(tweetData.content.text);
    let $image = $("<img>").addClass("avatars").text(tweetData.user.avatars.small);
    let $name = $("<h2>").addClass("name").text(tweetData.user.name);
    let $handle = $("<h3>").addClass("handle").text(tweetData.user.handle);
    let $created_at = $("<span>").addClass("created_at").text(tweetData.created_at);
    let $icons = $("<div>").addClass("icons");

    $header.append( $image, $name, $handle );
    $footer.append( $created_at, $icons );
    $tweetContainer.append( $header, $content, $footer );

    return $tweetContainer;

  }

  var $tweet = createTweetElement(tweetData);

  // console.log($tweet);
  $('#all-tweets').append($tweet);


});

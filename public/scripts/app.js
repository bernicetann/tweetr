/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(function() {

  var data = [
    {
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
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": {
          "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
  ];

  function createTweetElement(tweet) {

    let $tweetContainer = $("<article>").addClass("tweets-container");
    let $header = $("<header>").addClass("tweet-header");
    let $footer = $("<footer>").addClass("tweet-footer");
    let $content = $("<p>").addClass("content").text(tweet.content.text);
    let $image = $("<img>").addClass("avatars").attr('src', tweet.user.avatars.small);
    let $name = $("<h2>").addClass("name").text(tweet.user.name);
    let $handle = $("<h3>").addClass("handle").text(tweet.user.handle);
    let $created_at = $("<span>").addClass("created_at").text(tweet.created_at);
    let $icons = $("<div>").addClass("icons");

    $header.append( $image, $name, $handle );
    $footer.append( $created_at, $icons );
    $tweetContainer.append( $header, $content, $footer );

    return $tweetContainer;

  }

  function renderTweets(tweets) {
    let $tweetSection = $('#all-tweets');
    for(var i = 0; i < tweets.length; i++) {
      $tweetSection.append( createTweetElement( tweets[i]) );
    }
  }


  $(".submitTweet").on('submit', function(event) {
    var $submitTweet = $(".submitTweet");

    event.preventDefault();
    var tweetOnPage = $.ajax({
      method: 'POST',
      url: '/tweets',
      data: $submitTweet.serialize()
    });
  });


  renderTweets(data);

});








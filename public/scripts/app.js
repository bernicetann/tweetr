/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(function() {

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
    $icons.append(
      `<i class="fa fa-flag" aria-hidden="true"></i>
       <i class="fa fa-retweet" aria-hidden="true"></i>
       <i class="fa fa-heart" aria-hidden="true"></i>`
      );

    return $tweetContainer;
  }


  function renderTweets(tweets) {
    let $tweetSection = $('#all-tweets');
    $tweetSection.empty();
    for(var i = 0; i < tweets.length; i++) {
      $tweetSection.prepend(createTweetElement(tweets[i]));
    }
  }


  $(".submitTweet").on('submit', function(event) {
    var $submitTweet = $(".submitTweet");
    var $currentCount = $('#compose').val().length;
    var MAX_TWEET_LENGTH = 140;
    var $characterCount = MAX_TWEET_LENGTH - $currentCount

    event.preventDefault();
    if($characterCount === MAX_TWEET_LENGTH ) {
      alert('There is no content to post');
    } else if($characterCount < 0) {
      alert('Content is too long to post. Chill out.');
    } else {
      $.ajax({
        method: 'POST',
        url: '/tweets',
        data: $submitTweet.serialize()
      });
      loadTweets();
      $("#compose").val("");
      $(".counter").text(MAX_TWEET_LENGTH);
    }
  });


  function loadTweets() {
    var $loadOnPage = $.ajax({
      method: 'GET',
      url: '/tweets'
    });
    $loadOnPage.done(function (data) {
      renderTweets(data);
    });
  }

  loadTweets();

  $(".composeButton").on('click', function(event) {
    $(".new-tweet").slideToggle("fast", function() {
      $("#compose").focus();
    });
  });

});








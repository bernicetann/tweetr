
//Keeps track of the character length
$(function() {

  const MAX_TWEET_LENGTH = 140;

  $("#compose").on('keyup', function onTextAreaKeyUp() {
    var $this = $(this);
    var $counter = $this.siblings(".counter");

    var currentCount = $this.val().length;
    var charactersRemaining = MAX_TWEET_LENGTH - currentCount;

    $counter.text(charactersRemaining);
    if(charactersRemaining < 0) {
      $counter.addClass("exceed-count");
    } else {
      $counter.removeClass("exceed-count");
    }
  });

});


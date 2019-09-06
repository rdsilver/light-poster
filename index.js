// This is for fun, code ain't gonna be beautiful for you. But thanks for looking buddy :)
const string = "Meet me at the pier cigarettes and beer I'll cut your hair I don't care";
let index = 0;

$(function() {
  const words = string.split(' ');
  for (let i=0; i < words.length; i++) {
    let word = words[i];
    $('body').append(`<div class="word">${word}</div>`);
  }

  $('.word').each(function() {
    let randomPosition = Math.round((Math.random() * 30) - 30);
    $(this).css('left', randomPosition);
  });

  window.setInterval(function(){
    $('.word').removeClass('word--active');
    $('.word').css('z-index', 0);

    const $chosenWord = $(`.word:nth(${index})`);
    $chosenWord.addClass('word--active');
    $chosenWord.css('z-index', 1);

    index++;
    index = index%words.length;
  }, 750);
});

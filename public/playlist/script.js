window.onkeydown = function(e) {
  return !(e.keyCode == 32);
};

/*
Handles a click on the down button to slide down the playlist.
*/
document.getElementsByClassName('down-header')[0].addEventListener('click', function(){
var list = document.getElementById('list');

list.style.height = ( parseInt( document.getElementById('flat-black-player-container').offsetHeight ) - 135 ) + 'px';

document.getElementById('list-screen').classList.remove('slide-out-top');
document.getElementById('list-screen').classList.add('slide-in-top');
document.getElementById('list-screen').style.display = "block";
});

/*
Handles a click on the up arrow to hide the list screen.
*/
document.getElementsByClassName('hide-playlist')[0].addEventListener('click', function(){
document.getElementById('list-screen').classList.remove('slide-in-top');
document.getElementById('list-screen').classList.add('slide-out-top');
document.getElementById('list-screen').style.display = "none";
});

/*
Handles a click on the song played progress bar.
*/
document.getElementById('song-played-progress').addEventListener('click', function( e ){
var offset = this.getBoundingClientRect();
var x = e.pageX - offset.left;

Amplitude.setSongPlayedPercentage( ( parseFloat( x ) / parseFloat( this.offsetWidth) ) * 100 );
});

document.querySelector('img[data-amplitude-song-info="cover_art_url"]').style.height = document.querySelector('img[data-amplitude-song-info="cover_art_url"]').offsetWidth + 'px';
Amplitude.init({
    "bindings": {
      37: 'prev',
      39: 'next',
      32: 'play_pause'
    },
    "songs": [
      {
        "name": "The Adults are Talking",
        "artist": "The Strokes",
        "album": "The New Abnormal",
        "url": "music/the-strokes-the-adults-are-talking-audio.mp3",
        "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg"
      },
      {
        "name": "At The Door",
        "artist": "The Strokes",
        "album": "The New Abnormal",
        "url": "music/the-strokes-at-the-door-official-video.mp3",
        "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg"
      },
      {
        "name": "Bad Decisions",
        "artist": "The Strokes",
        "album": "The New Abnormal",
        "url": "music/the-strokes-bad-decisions-official-video.mp3",
        "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg"
      },
      {
        "name": "Brooklyn Bridge To Chorus",
        "artist": "The Strokes",
        "album": "The New Abnormal",
        "url": "music/the-strokes-brooklyn-bridge-to-chorus-audio.mp3",
        "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg"
      },
      {
        "name": "Eternal Summer",
        "artist": "The Strokes",
        "album": "The New Abnormal",
        "url": "music/the-strokes-eternal-summer-audio.mp3",
        "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg"
      },
      {
        "name": "Not The Same Anymore",
        "artist": "The Strokes",
        "album": "The New Abnormal",
        "url": "music/the-strokes-not-the-same-anymore-audio.mp3",
        "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg"
      },
      {
        "name": "Ode To The Mets",
        "artist": "The Strokes",
        "album": "The New Abnormal",
        "url": "music/the-strokes-ode-to-the-mets-audio.mp3",
        "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg"
      },
      {
        "name": "Selfless Audio",
        "artist": "The Strokes",
        "album": "The New Abnormal",
        "url": "music/the-strokes-selfless-audio.mp3",
        "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg"
      },
      {
        "name": "Why Are Sundays So Depressing",
        "artist": "The Strokes",
        "album": "The New Abnormal",
        "url": "music/the-strokes-why-are-sundays-so-depressing-audio.mp3",
        "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg"
      },
    ]
  });

  window.onkeydown = function(e) {
      return !(e.keyCode == 32);
  };

  /*
    Handles a click on the song played progress bar.
  */
  document.getElementById('song-played-progress').addEventListener('click', function( e ){
    var offset = this.getBoundingClientRect();
    var x = e.pageX - offset.left;

    Amplitude.setSongPlayedPercentage( ( parseFloat( x ) / parseFloat( this.offsetWidth) ) * 100 );
  });
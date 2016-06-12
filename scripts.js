
 $( document ).ready(function() {
   SC.initialize({
     client_id: '898b179652144b48515ab6764540e7fa',
     redirect_uri: 'http://makesoundcloud.com/callback.html'
 });

//I don't think this works either, the getTracks thing
 var getTracks = function() { return SC.get('/me/tracks'); };
 // initiate auth popup
 SC.connect().then(function() {
     return SC.get('/me');
 }).then(function(me) {
      console.log("Description " + me.description);
      console.log("Tracks " + me.tracks);
     alert('Hello, ' + me.username);
     alert('Your id number for your soundcloud profile is, ' + me.id);
 });
 });

// connect and update track data
SC.connect().then(getTracks).then(function(tracks){
  SC.put('/tracks' + tracks[0].id, {
    track: {
      description: 'This track was recorded in Berlin',
      genre: 'Electronic'
    }
  });
});
console.log(getTracks);

// update user's profile description... i dont think this even works idk
SC.connect().then(function() {
   SC.put('/me', {
     user: { description: 'I am using the SoundCloud API!' }
   });
});

//Got rid of the widget =()
/*(function(){
  var widgetIframe = document.getElementById('sc-widget'),
      widget       = SC.Widget(widgetIframe);

  widget.bind(SC.Widget.Events.READY, function() {
    widget.bind(SC.Widget.Events.PLAY, function() {
      // get information about currently playing sound
      widget.getCurrentSound(function(currentSound) {
        console.log('sound ' + currentSound.get('') + 'began to play');
      });
    });
    // get current level of volume
    widget.getVolume(function(volume) {
      console.log('current volume value is ' + volume);
    });
    // set new volume level
    widget.setVolume(50);
    // get the value of the current position
  });

}());*/

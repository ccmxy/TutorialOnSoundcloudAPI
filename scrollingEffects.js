
function scrollToAnchor(aid, easing, duration){
 var aTag = $("div[id='"+ aid +"']");
 $('html,body')
  .animate(
   {scrollTop: aTag.offset().top},
       {
         duration: duration,
         easing:  easing
      }
    );
}


jQuery.extend( jQuery.easing,
  {
  swing: function (a, b, c, d) {
    return(-Math.cos(a*Math.PI)/2+.5)*d+c
  },
  easeOutElastic: function (x, t, b, c, d) {
      var s=1.70158;var p=0;var a=c;
      if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
      if (a < Math.abs(c)) { a=c; var s=p/4; }
      else var s = p/(2*Math.PI) * Math.asin (c/a);
      return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
  },
  easeInBounce: function (x, t, b, c, d) {
        return c - $.easing.easeOutBounce (x, d-t, 0, c, d) + b;
    },
easeOutBounce: function (x, t, b, c, d) {
    if ((t/=d) < (1/2.75)) {
        return c*(7.5625*t*t) + b;
    } else if (t < (2/2.75)) {
        return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
    } else if (t < (2.5/2.75)) {
        return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
    } else {
        return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
    }
},
easeInOutBounce: function (x, t, b, c, d) {
    if (t < d/2) return $.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
    return $.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
},
smoothMoves: function(t) {
  var p = 0.3;
     return Math.pow(2,-10*t) * Math.sin((t-p/4)*(2*Math.PI)/p) + 1;}
});

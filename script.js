let con = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
.fromTo(".wrap", {opacity:0}, {opacity:1, duration:1});


let scene = new ScrollMagic.Scene({
    triggerElement:"section",
    duration:"100%",
    triggerHook:0,
})
.setTween(timeline)
.addTo(con);
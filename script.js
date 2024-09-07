
// gsap.from("h1",{
//     opacity:1,
//     y:10,
//     duration:2,
//     delay:1,
//     stagger:1,
//     repeat:-1,
//     yoyoEase:true
// })
var select = function(s) {
    return document.querySelector(s);
  }, container = select('.container'), canL = select('.canL'), canR = select('.canR'), canL = select('.canL'), headband = select('.headband'), brainGroup = select('.brainGroup'), theText = select('.theText'), immersionText = select('.immersionText'), SVGText = select('.SVGText'), svgImmersionGroup = select('.svgImmersionGroup'), topLeftBox = select('.topLeftBox'), topRightBox = select('.topRightBox'), botLeftBox = select('.botLeftBox'), botRightBox = select('.botRightBox'), topLine = select('.topLine'), botLine = select('.botLine'), leftLine = select('.leftLine'), rightLine = select('.rightLine'), podcastText = select('.podcastText'), withRobText = select('.withRobText'), podcastMask = select('.podcastMask'), titleLineL = select('.titleLineL'), titleLineR = select('.titleLineR'), podcastTextGroup = select('.podcastTextGroup'),guestMask = select('.guestMask'),guestText = select('.guestText'),featuringMask = select('.featuringMask'),featuringText = select('.featuringText')

gsap.set('svg', {
position:'absolute',
top:'50%',
left:'50%',
xPercent:-50,
yPercent:-50
})

gsap.set(headband, {
drawSVG:'50% 50%',
alpha:0
})

gsap.set([canL,canR], {
transformOrigin:'50% 0%',
scale:0
})

gsap.set(svgImmersionGroup, {
transformOrigin:'50% 50%'//,
//scale:0
})

gsap.set([topLeftBox, botLeftBox, topRightBox, botRightBox],{
transformOrigin:'50% 50%'
})
var mainTimeline = new TimelineMax({repeat:-1, onUpdate:updateBoxes, repeatDelay:1});
mainTimeline.timeScale(1)
mainTimeline.from(brainGroup,2, {
alpha:0,
scale:0.5,
ease:Power4.easeInOut,
transformOrigin:'50% 50%'
})
.to(headband, 2, {
alpha:1,
drawSVG:'0% 100%',
stroke:'#000000',
delay:1,
ease:Power3.easeOut
},'-=2')
.to(canL, 2, {
scaleX:1,
ease:Elastic.easeOut.config(1, 0.8)
},'-=0.8')
.to(canL, 2, {
scaleY:1,
ease:Elastic.easeOut.config(1, 0.5)
},'-=2')
.to(canR, 2, {
scaleX:1,
ease:Elastic.easeOut.config(1, 0.8)
},'-=1.95')
.to(canR, 2, {
scaleY:1,
ease:Elastic.easeOut.config(1, 0.5)
},'-=1.9')

.staggerFrom([theText, SVGText, immersionText], 1, {
alpha:0,
attr:{
  y:'+=20'
},
ease:Expo.easeOut
}, 0.2, '-=1.6')

.staggerFrom([topLeftBox, topRightBox], 2,{
//scale:-30,
alpha:0,
transformOrigin:'50% 50%',
attr:{
  x:505,
  y:556
},
ease:Elastic.easeOut.config(1, 0.4)

}, 0.2, '-=1')

.staggerFrom([botLeftBox, botRightBox], 2,{
//scale:-30,
alpha:0,
transformOrigin:'50% 50%',
attr:{
  x:75.5,
  y:450
},
ease:Elastic.easeOut.config(1, 0.4)

}, 0.2, '-=2')

.from([topLine, rightLine, botLine, leftLine],1,{
alpha:0,
ease:Power4.easeOut
},'-=2.3')
/**/
.to(podcastMask, 2, {
attr:{
  y:460,
  width:430
},
//ease:Elastic.easeOut.config(1, 0.4)
ease:Power3.easeOut
},'-=2.51')


.from(titleLineL, 2, {
drawSVG:'0% 0%',
attr:{
  x1:'+=150',
  x2:'+=150'
},
delay:0.23,
ease:Power4.easeInOut
},'-=2')
.from(titleLineR, 2, {
drawSVG:'0% 0%',
attr:{
  x1:'-=150',
  x2:'-=150'
},
ease:Power4.easeInOut
}, '-=2')
.from(withRobText, 2, {
alpha:0
}, '-=1')

.to(podcastMask, 1, {
scaleX:0,
transformOrigin:'100% 50%',
ease:Power3.easeOut,
delay:2
})
.from(featuringMask, 1, {
scaleX:0,
transformOrigin:'0% 50%',
ease:Power3.easeOut
},'-=1')
.from(featuringText, 1, {
  x:'-=50',
ease:Power3.easeOut
}, '-=1')
.to(podcastTextGroup, 1, {
  x:'+=50',
ease:Power3.easeOut
}, '-=1')

.to(featuringMask, 1, {
scaleX:0,
transformOrigin:'100% 50%',
ease:Power3.easeOut,
delay:1
})
.to(featuringText, 1, {
  x:'+=50',
ease:Power3.easeOut
}, '-=1')
.from(guestMask, 1, {
scaleX:0,
transformOrigin:'0% 50%',
ease:Power3.easeOut
},'-=1')
.from(guestText, 1, {
  x:'-=50',
ease:Power3.easeOut
}, '-=1')

.to('.svgImmersion', 1, {
alpha:0,
delay:3
})


function updateBoxes(){

gsap.set(topLine, {
  attr:{
    x1:Number(topLeftBox.getAttribute('x')) + 20,
    x2:Number(topRightBox.getAttribute('x')),
    y1:Number(topLeftBox.getAttribute('y')) + (23/2),
    y2:Number(topRightBox.getAttribute('y')) + (23/2),
  }
})
gsap.set(rightLine, {
  attr:{
    x1:Number(botRightBox.getAttribute('x')) + (20/2),
    x2:Number(topRightBox.getAttribute('x')) + (20/2),
    y1:Number(botRightBox.getAttribute('y')),
    y2:Number(topRightBox.getAttribute('y')) + 23
  }
})  

gsap.set(botLine, {
  attr:{
     x1:Number(botLeftBox.getAttribute('x')) + 20,
     x2:Number(botRightBox.getAttribute('x')),
     y1:Number(botLeftBox.getAttribute('y')) + (23/2),
     y2:Number(botRightBox.getAttribute('y')) + (23/2)
  }
})   
gsap.set(leftLine, {
  attr:{
     x1:Number(botLeftBox.getAttribute('x')) + (20/2),
     x2:Number(topLeftBox.getAttribute('x')) + (20/2),
     y1:Number(botLeftBox.getAttribute('y')),
     y2:Number(topLeftBox.getAttribute('y')) + 23
  }
})   
}

updateBoxes();

gsap.set('svg', {
visibility:'visible'
})
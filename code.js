var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var bax;
var b1,b2,b3,b4,t1,t2,t3,t4,t6,t7,t8;
var a1,a2,a3,a4,a5,a6,a7,a8,a9;
var c1,c2,c3,c4,c5,c6,c7;
function setup() {
box=createSprite(20,10,10,10) ;
b1=createSprite(0,0,20,800) ;
b2=createSprite(400,0,20,800) ;
b3=createSprite(330,0,580,20) ;
b4=createSprite(0,400,690,20) ;
t1=createSprite(0,200,120,10) ;
t2=createSprite(80,70,50,10) ;
t3=createSprite(60,100,10,50) ;
t4=createSprite(130,130,150,10) ;
t5=createSprite(150,0,10,270) ;
t6=createSprite(200,160,10,50) ;
t7=createSprite(160,180,80,10) ;
t8=createSprite(120,250,10,150) ;
t9=createSprite(180,380,10,80) ;
a1=createSprite(300,0,10,100) ;
a2=createSprite(230,70,50,10) ;
a3=createSprite(250,110,10,80) ;
a4=createSprite(255,150,20,10) ;
a5=createSprite(260,180,10,70) ;
a6=createSprite(290,220,70,10) ;
a7=createSprite(320,160,10,120) ;
a8=createSprite(320,100,70,10) ;
a9=createSprite(290,120,10,40) ;
c1=createSprite(400,160,70,10) ;
c2=createSprite(360,180,10,50) ;
c3=createSprite(260,380,10,50) ;
c4=createSprite(260,350,70,10) ;
c5=createSprite(230,320,10,70) ;
c6=createSprite(290,280,10,130) ;
c7=createSprite(400,320,100,10) ;
//color
box.shapeColor="red";
b1.shapeColor="black";
b2.shapeColor="black";
b3.shapeColor="black";
b4.shapeColor="black";
t1.shapeColor="black";
t2.shapeColor="black";
t3.shapeColor="black";
t4.shapeColor="black";
t5.shapeColor="black";
t6.shapeColor="black";
t7.shapeColor="black";
t8.shapeColor="black";
t9.shapeColor="black";
a1.shapeColor="black";
a2.shapeColor="black";
a3.shapeColor="black";
a4.shapeColor="black";
a5.shapeColor="black";
a6.shapeColor="black";
a7.shapeColor="black";
a8.shapeColor="black";
a9.shapeColor="black";
c1.shapeColor="black";
c2.shapeColor="black";
c3.shapeColor="black";
c4.shapeColor="black";
c5.shapeColor="black";
c6.shapeColor="black";
c7.shapeColor="black";

}
function draw(){
  background('blue');
  if(keyDown("RIGHT_ARROW"))
  {
   box.velocityX=2;
   box.velocityY=0;
    
  }
  if(keyDown("LEFT_ARROW"))
  {
   box.velocityX=-2;
   box.velocityY=0;
  
    
  }
  if(keyDown("UP_ARROW"))
  {
   box.velocityX=0;
   box.velocityY=-2;
    
  }
  if(keyDown("DOWN_ARROW"))
  {
   box.velocityX=0;
   box.velocityY=2;
    
  }
  if(keyDown("SPACE"))
  {
   box.velocityX=0;
   box.velocityY=0;
    
  }
  if(box.isTouching(b1)){
  box.x=20;
  box.y=10;
  }
  if(box.isTouching(b2)){
  box.x=20;
  box.y=10;
  }
  if(box.isTouching(b3)){
  box.x=20;
  box.y=10;
  }
  if(box.isTouching(b4)){
  box.x=20;
  box.y=10;
  }
  if(box.isTouching(t1)){
  box.x=20;
  box.y=10;
  }
  if(box.isTouching(t2)){
  box.x=20;
  box.y=10;
  }
  if(box.isTouching(t3)){
  box.x=20;
  box.y=10;
  }
  if(box.isTouching(t4)){
  box.x=20;
  box.y=10;
  }
  if(box.isTouching(t5)){
  box.x=20;
  box.y=10;
  }
  if(box.isTouching(t6)){
  box.x=20;
  box.y=10;
  }
  if(box.isTouching(t7)){
  box.x=20;
  box.y=10;
  }
  if(box.isTouching(t8)){
  box.x=20;
  box.y=10;
  }
  if(box.isTouching(t9)){
  box.x=20;
  box.y=10;
  }
  if(box.isTouching(a1)){
  box.x=20;
  box.y=10;
  }
  if(box.isTouching(a2)){
  box.x=20;
  box.y=10;
  }
  if(box.isTouching(a3)){
  box.x=20;
  box.y=10;
  }
  if(box.isTouching(a4)){
  box.x=20;
  box.y=10;
  }
  if(box.isTouching(a5)){
  box.x=20;
  box.y=10;
  }
  if(box.isTouching(a6)){
  box.x=20;
  box.y=10;
  }
  if(box.isTouching(a7)){
  box.x=20;
  box.y=10;
  }
  if(box.isTouching(a8)){
  box.x=20;
  box.y=10;
  }
  if(box.isTouching(a9)){
  box.x=20;
  box.y=10;
  }
  if(box.isTouching(c1)){
  box.x=20;
  box.y=10;
  }
  if(box.isTouching(c2)){
  box.x=20;
  box.y=10;
  }
  if(box.isTouching(c3)){
  box.x=20;
  box.y=10;
  }
  if(box.isTouching(c4)){
  box.x=20;
  box.y=10;
  }
  if(box.isTouching(c5)){
  box.x=20;
  box.y=10;
  }
  if(box.isTouching(c6)){
  box.x=20;
  box.y=10;
  }
  if(box.isTouching(c7)){
  box.x=20;
  box.y=10;
  }
  

    
  createEdgeSprites();
  box.bounceOff(rightEdge);
  box.bounceOff(leftEdge);
  box.bounceOff(topEdge);
  box.bounceOff(b1);
  box.bounceOff(b2);
  box.bounceOff(b3);
  box.bounceOff(b4);
 box.bounceOff(t1);
 box.bounceOff(t2);
  box.bounceOff(t3);
  box.bounceOff(t4);
  box.bounceOff(t5);
  box.bounceOff(t6);
  box.bounceOff(t7);
  box.bounceOff(t8);
  box.bounceOff(t9);
  box.bounceOff(a1);
  box.bounceOff(a2);
  box.bounceOff(a3);
  box.bounceOff(a4);
  box.bounceOff(a5); 
  box.bounceOff(a6);
  box.bounceOff(a7);
  box.bounceOff(a8);
  box.bounceOff(a9);
  box.bounceOff(c1);
  box.bounceOff(c2);
  box.bounceOff(c3);
  box.bounceOff(c4);
  box.bounceOff(c5);
  box.bounceOff(c6);
  box.bounceOff(c7);
  drawSprites();
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};

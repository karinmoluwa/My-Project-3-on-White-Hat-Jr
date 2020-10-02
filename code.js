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

var Sofia = createSprite(20,25,18,18);

var cardboard1 = createSprite(78,76,70,20);
var cardboard2 = createSprite(108,91,20,50);
var cardboard3 = createSprite(102,126,32,20);
var cardboard4 = createSprite(116,76,168,25);
var cardboard5 = createSprite(193,105,22,83);
var cardboard6 = createSprite(51,200,23,110);
var cardboard7 = createSprite(67,253,63,20);
var cardboard8 = createSprite(89.5,238.7,20,50);
var cardboard9 = createSprite(104,215,50,22);
var cardboard10=createSprite(124,235,20,60);
var cardboard11=createSprite(38,299,80,20);
var cardboard12=createSprite(74,289,22,89);
var cardboard13=createSprite(64,332,160,24);
var cardboard14=createSprite(120,287,5,5);
var cardboard15=createSprite(142,395,22,150);
var cardboard16=createSprite(153,396,45,25);
var cardboard17=createSprite(172,380,25,280);
var cardboard18=createSprite(188,235,60,20);
var cardboard19=createSprite(247,296,25,90);
var cardboard20=createSprite(224,237,80,25);
var cardboard21=createSprite(310,299,120,25);
var cardboard22=createSprite(356,316,28,48);
var cup=createSprite(357,368,25,25);
cardboard1.shapeColor = "yellow";
cardboard2.shapeColor = "yellow";
cardboard3.shapeColor = "yellow";
cardboard4.shapeColor = "yellow";
cardboard5.shapeColor = "yellow";
cardboard6.shapeColor = "yellow";
cardboard7.shapeColor = "yellow";
cardboard8.shapeColor = "yellow";
cardboard9.shapeColor = "yellow";
cardboard10.shapeColor = "yellow";
cardboard11.shapeColor = "yellow";
cardboard12.shapeColor = "yellow";
cardboard13.shapeColor = "yellow";
cardboard14.shapeColor = "blue";
cardboard15.shapeColor = "yellow";
cardboard16.shapeColor = "yellow";
cardboard17.shapeColor = "yellow";
cardboard18.shapeColor = "yellow";
cardboard19.shapeColor = "yellow";
cardboard20.shapeColor = "yellow";
cardboard21.shapeColor = "yellow";
cardboard22.shapeColor = "yellow";
Sofia.shapeColor = 'red';
cup.shapeColor = "blue";

function draw() {
    background("violet");
      createEdgeSprites();
  Sofia.bounceOff(edges);
  Sofia.bounceOff(cardboard2);
  Sofia.bounceOff(cardboard3);
  Sofia.bounceOff(cardboard4);
  Sofia.bounceOff(cardboard5);
  Sofia.bounceOff(cardboard6);
  Sofia.bounceOff(cardboard7);
  Sofia.bounceOff(cardboard8);
  Sofia.bounceOff(cardboard9);
  Sofia.bounceOff(cardboard10);
  Sofia.bounceOff(cardboard11);
  Sofia.bounceOff(cardboard12);
  Sofia.bounceOff(cardboard13);
  Sofia.bounceOff(cardboard15);
  Sofia.bounceOff(cardboard16);
  Sofia.bounceOff(cardboard17);
  Sofia.bounceOff(cardboard18);
  Sofia.bounceOff(cardboard19);
  Sofia.bounceOff(cardboard20);
  Sofia.bounceOff(cardboard21);
  Sofia.bounceOff(cardboard22);
  Sofia.velocityX=0;
  Sofia.velocityY=0;
   if(keyDown(UP_ARROW)) {
    Sofia.velocityX = 0;
   Sofia.velocityY = -4;
  }
  if (keyDown(LEFT_ARROW)) {
   Sofia.velocityX = -3;
   Sofia.velocityY = 0;
  }
  if (keyDown(RIGHT_ARROW)) {
    
    Sofia.velocityX = 3;
    Sofia.velocityY = 0;
  }
  if (keyDown(DOWN_ARROW)){
    Sofia.velocityX = 0
    Sofia.velocityY = 3
  }
   if (Sofia.isTouching(cup)) {
   Sofia.velocityX=0;
    Sofia.velocityY=0;
   textSize(30);
   fill("red");
   textFont("Comic Sans MS");
   text("You Win !!! 100 points🥇", 60, 60) ;
   }
  if (keyDown("A")) {
    Sofia.velocityX = -3;
   Sofia.velocityY = 0;
  }
    if (keyDown("D")) {
     Sofia.velocityX = 3;
      Sofia.velocityY = 0;
    }
    if (keyDown("W")) {
     Sofia.velocityX = 0;
      Sofia.velocityY = -3;
    }
        if (keyDown("S")){
          Sofia.velocityX = 0;
         Sofia.velocityY = 3;
    }
   if (Sofia.isTouching(cardboard1) || Sofia.isTouching(cardboard2) || Sofia.isTouching(cardboard3) || Sofia.isTouching(cardboard4) || Sofia.isTouching(cardboard5) || Sofia.isTouching(cardboard6) || Sofia.isTouching(cardboard7) || Sofia.isTouching(cardboard8) || Sofia.isTouching(cardboard9) || Sofia.isTouching(cardboard10) || Sofia.isTouching(cardboard11) || Sofia.isTouching(cardboard12) || Sofia.isTouching(cardboard13) || Sofia.isTouching(cardboard14) || Sofia.isTouching(cardboard15) || Sofia.isTouching(cardboard16) || Sofia.isTouching(cardboard17) || Sofia.isTouching(cardboard18) || Sofia.isTouching(cardboard19) || Sofia.isTouching(cardboard20) || Sofia.isTouching(cardboard21) || Sofia.isTouching(cardboard22)){
    Sofia.x=10;
    Sofia.y=10
    
    }
    if (Sofia.isTouching(cardboard14)){
    Sofia.x=20;
    Sofia.y=25;
    
    }
    if (Sofia.isTouching(cardboard1)){
    Sofia.x=20;
    Sofia.y=25;
    
    }
   
  
    
    
    
    
    
    

createEdgeSprites();
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

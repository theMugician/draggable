const square = document.querySelector('.square');

let clicked = {};
let moving = false;

// Mouse events
square.addEventListener('mousedown', onMouseDown);
document.addEventListener('mousemove', onMove);
document.addEventListener('mouseup', onUp);

// Touch events 
//pane.addEventListener('touchstart', onTouchDown);
//document.addEventListener('touchmove', onTouchMove);
//document.addEventListener('touchend', onTouchEnd);


function onTouchDown(e) {
  onDown(e.touches[0]);
  e.preventDefault();
}

function onTouchMove(e) {
  onMove(e.touches[0]);
}

function onTouchEnd(e) {
  if (e.touches.length ==0) onUp(e.changedTouches[0]);
}

function onMouseDown(e) {
  console.log(e);
  onDown(e);
  e.preventDefault();
}

function onDown(e) {
  moving = true;

  clicked = {
    x: x,
    y: y,
    cx: e.clientX,
    cy: e.clientY,
    w: b.width,
    h: b.height,
    isMoving: !isResizing && canMove(),
  };
}

function onMove(e) {
  if(moving === true) {
    console.log(e);
    // moving
    square.style.top = (e.clientY - clicked.y) + 'px';
    square.style.left = (e.clientX - clicked.x) + 'px';
  }
}

function onUp(e) {
  moving = false;
}
/*
function onDown(e) {
  calc(e);

  var isResizing = onRightEdge || onBottomEdge || onTopEdge || onLeftEdge;

  clicked = {
    x: x,
    y: y,
    cx: e.clientX,
    cy: e.clientY,
    w: b.width,
    h: b.height,
    isResizing: isResizing,
    isMoving: !isResizing && canMove(),
    onTopEdge: onTopEdge,
    onLeftEdge: onLeftEdge,
    onRightEdge: onRightEdge,
    onBottomEdge: onBottomEdge
  };
}
*/
const app = function() {
  const canvas = document.querySelector('#main-canvas');
  const context = canvas.getContext('2d');

  canvas.addEventListener('click', function(event) {
    console.log(event.layerX, event.layerY);
  })

  let startPoint = {x: 10, y: 390};

  const moveLeftButton = document.querySelector('#move-left');
  moveLeftButton.addEventListener('click', () => {
    drawLeft()
  })

  const drawLeft = function() {
    context.beginPath();
    context.moveTo(startPoint.x, startPoint.y);
    console.log('Before increment', startPoint);
    if (startPoint.x > 0) {
      startPoint.x -= 5;
    }
    console.log('After increment', startPoint);
    context.lineTo(startPoint.x, startPoint.y);
    context.stroke();
  }

  const moveRightButton = document.querySelector('#move-right');
  moveRightButton.addEventListener('click', () => {
    drawRight();
  });

  const drawRight = function() {
    context.beginPath();
    context.moveTo(startPoint.x, startPoint.y);
    if (startPoint.x < canvas.width) {
      startPoint.x += 5;
    }
    context.lineTo(startPoint.x, startPoint.y);
    context.stroke();
  }

  const moveUpButton = document.querySelector('#move-up');
  moveUpButton.addEventListener('click', () => {
    drawUp();
  });

  const drawUp = function() {
    context.beginPath();
    context.moveTo(startPoint.x, startPoint.y);
    if (startPoint.y > 0) {
      startPoint.y -= 5;
    }
    context.lineTo(startPoint.x, startPoint.y);
    context.stroke();
  }

  const moveDownButton = document.querySelector('#move-down');
  moveDownButton.addEventListener('click', () => {
    drawDown();
  });

  const drawDown = function() {
    context.beginPath();
    context.moveTo(startPoint.x, startPoint.y);
    if (startPoint.y < canvas.height) {
      startPoint.y += 5;
    }
    context.lineTo(startPoint.x, startPoint.y);
    context.stroke();
  }

  document.addEventListener('keydown', (event) => {
    const key = event.key
    switch (key) {
      case "ArrowDown" :
      event.preventDefault();
      drawDown();
      break;
      case "ArrowUp" :
      event.preventDefault();
      drawUp();
      break;
      case "ArrowLeft" :
      event.preventDefault();
      drawLeft();
      break;
      case "ArrowRight" :
      event.preventDefault();
      drawRight();
      break;
    }
    console.log(event.key);
  })

  const resetButton = document.querySelector('#reset');
  resetButton.addEventListener('click', () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    const container = document.querySelector('#canvas-container');
    container.classList.add('shake');
    setTimeout(function() {
      container.classList.remove('shake');
    }, 2000);
  })

}// end of app

document.addEventListener('DOMContentLoaded', app);

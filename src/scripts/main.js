'use strict';

document.addEventListener('click', (e) => {
  // write code here
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!wall.contains(e.target)) {
    return;
  }

  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  const borderLeft = parseFloat(getComputedStyle(wall).borderLeftWidth);
  const borderTop = parseFloat(getComputedStyle(wall).borderTopWidth);
  const borderRight = parseFloat(getComputedStyle(wall).borderRightWidth);
  const borderBottom = parseFloat(getComputedStyle(wall).borderBottomWidth);

  let x = e.clientX - wallRect.left - spiderRect.width / 2;
  let y = e.clientY - wallRect.top - spiderRect.height / 2;

  const maxX = wallRect.width - spiderRect.width - borderRight * 2;
  const maxY = wallRect.height - spiderRect.height - borderBottom * 2;

  if (x < borderLeft) {
    x = 0;
  }

  if (y < borderTop) {
    y = 0;
  }

  if (x > maxX) {
    x = maxX;
  }

  if (y > maxY) {
    y = maxY;
  }

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});

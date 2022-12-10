const scrollMenu = () => {
  const mainNav = document.querySelector('[data-nav]');
  const mainNavItems = mainNav.querySelectorAll('.navigation__item');
  const scrollButtonRight = document.querySelector('[data-nav-button-right]');
  const scrollButtonLeft = document.querySelector('[data-nav-button-left]');

  let widthArr = [];
  mainNavItems.forEach((el) => {
    widthArr.push(el.clientWidth);
  });

  if (scrollButtonRight) {
    scrollButtonRight.addEventListener('click', goRight);
  }

  if (scrollButtonLeft) {
    scrollButtonLeft.addEventListener('click', goLeft);
  }

  scrollButtonLeft.style.opacity = '0.6';

  let clickedIndex = 0;

  function goRight() {
    if (clickedIndex < mainNavItems.length) {
      clickedIndex = clickedIndex + 1;
      scrollButtonLeft.style.opacity = '1';
      mainNav.style.marginLeft =
        -(mainNav.offsetWidth / mainNavItems.length) * clickedIndex + 'px';
    } else {
      clickedIndex = 0;
      mainNav.style.marginLeft = 0 + 'px';
      scrollButtonLeft.style.opacity = '0.6';
    }
  }

  function goLeft() {
    if (clickedIndex > 0) {
      clickedIndex = clickedIndex - 1;
      mainNav.style.marginLeft =
        -(mainNav.offsetWidth / mainNavItems.length) * clickedIndex + 'px';
      scrollButtonLeft.style.opacity = '0.6';
    }
  }
};

export {scrollMenu};

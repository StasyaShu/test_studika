const chooseCity = () => {
  const cityTab = document.querySelector('#city');
  const cityList = document.querySelector('#cities-list');
  const saveButton = document.querySelector('.city-form__submit-button');

  const openMenu = () => {
    cityTab.classList.add('is-chosen');
    cityList.classList.add('city-list--show');
  };

  const closeMenu = () => {
    cityTab.classList.remove('is-chosen');
    cityList.classList.remove('city-list--show');
  }

  const documentClickHandler = (evt) => {
    if (evt.target.classList.contains('city-form__item')) {
      return;
    } else {
      closeMenu();
    }
  }

  if (cityTab) {
    cityTab.addEventListener('click', (evt) => {
      evt.preventDefault();
      openMenu();
      const regionInput = cityList.querySelector('#region');
      regionInput.focus();
    });
  }

  if (cityList) {
    cityList.addEventListener('click', (evt) => {
      const target = evt.target;

      if (!target.classList.contains('city-form__item')) {
        return;
      } else {
        target.classList.add('city-form__item--active');

        const cityFormHeader = document.querySelector('.city-form__header');
        const spanWithCityName = document.createElement('span');
        spanWithCityName.textContent = target.textContent;
        cityFormHeader.appendChild(spanWithCityName);

        const city = document.querySelector('.city__header');
        const cityTabText = city.querySelector('span');
        cityTabText.textContent = target.textContent;

        saveButton.classList.add('button--active');

        document.addEventListener('click', documentClickHandler);
      }
    });
  }

  document.removeEventListener('click', documentClickHandler);
};

export {chooseCity};

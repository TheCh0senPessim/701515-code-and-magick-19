'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = userDialog.querySelector('.setup-close');
  var wizardCoat = userDialog.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = userDialog.querySelector('.setup-wizard .wizard-eyes');
  var wizardFireball = userDialog.querySelector('.setup-fireball-wrap');
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');


  var getRandomInt = function (int) {
    var randomInt = Math.floor(Math.random() * int) + 1;
    return randomInt;
  };

  var onCoatClick = function (evt) {
    evt.target.style.fill = window.consts.COAT_COLORS[getRandomInt(window.consts.COAT_COLORS.length - 1)];
    userDialog.querySelector('input[name="coat-color"]').value = evt.target.style.fill;
  };

  var onEyesClick = function (evt) {
    evt.target.style.fill = window.consts.EYES_COLORS[getRandomInt(window.consts.EYES_COLORS.length - 1)];
    userDialog.querySelector('input[name="eyes-color"]').value = evt.target.style.fill;
  };

  var onFireballClick = function (evt) {
    var newFireballColor = window.consts.FIREBALL_COLORS[getRandomInt(window.consts.FIREBALL_COLORS.length - 1)];
    evt.target.style.backgroundColor = newFireballColor;
    userDialog.querySelector('input[name="fireball-color"]').value = newFireballColor;
  };

  var onPopupEscPress = function (evt) {
    if (evt.key === window.consts.ESC_KEY && !evt.target.matches('input[class="setup-user-name"]')) {
      closePopup();
    }
  };

  var openPopup = function () {
    userDialog.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
    wizardCoat.addEventListener('click', onCoatClick);
    wizardEyes.addEventListener('click', onEyesClick);
    wizardFireball.addEventListener('click', onFireballClick);
  };

  var closePopup = function () {
    userDialog.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    wizardCoat.removeEventListener('click', onCoatClick);
    wizardEyes.removeEventListener('click', onEyesClick);
    wizardFireball.removeEventListener('click', onFireballClick);
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.key === window.consts.ENTER_KEY) {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.key === window.consts.ENTER_KEY) {
      closePopup();
    }
  });

  var getNewWizard = function () {
    var newWizard = {
      name: window.consts.WIZARD_NAMES[getRandomInt(window.consts.WIZARD_NAMES.length - 1)] + ' ' + window.consts.WIZARD_LAST_NAMES[getRandomInt(window.consts.WIZARD_LAST_NAMES.length - 1)],
      coatColor: window.consts.COAT_COLORS[getRandomInt(window.consts.COAT_COLORS.length - 1)],
      eyesColor: window.consts.EYES_COLORS[getRandomInt(window.consts.EYES_COLORS.length - 1)]
    };
    return newWizard;
  };

  var getBunchOfWizards = function () {
    var wizzardsArr = [];
    for (var i = 0; i < 4; i++) {
      wizzardsArr.push(getNewWizard());
    }
    return wizzardsArr;
  };

  var wizards = getBunchOfWizards();

  var createWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  };

  var renderWizards = function () {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < wizards.length; i++) {
      fragment.appendChild(createWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
  };

  renderWizards();

  userDialog.querySelector('.setup-similar').classList.remove('hidden');
})();

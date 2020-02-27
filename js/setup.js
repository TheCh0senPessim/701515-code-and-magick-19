'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

var userDialog = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = userDialog.querySelector('.setup-close');

var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY && !evt.target.matches('input[class="setup-user-name"]')) {
    closePopup();
  }
};

var openPopup = function () {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  userDialog.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var getRandomInt = function (int) {
  var randomInt = Math.floor(Math.random() * int) + 1;
  return randomInt;
};

var wizards = [
  {
    name: WIZARD_NAMES[getRandomInt(WIZARD_NAMES.length - 1)] + ' ' + WIZARD_LAST_NAMES[getRandomInt(WIZARD_LAST_NAMES.length - 1)],
    coatColor: COAT_COLORS[getRandomInt(COAT_COLORS.length - 1)],
    eyesColor: EYES_COLORS[getRandomInt(EYES_COLORS.length - 1)]
  },
  {
    name: WIZARD_NAMES[getRandomInt(WIZARD_NAMES.length - 1)] + ' ' + WIZARD_LAST_NAMES[getRandomInt(WIZARD_LAST_NAMES.length - 1)],
    coatColor: COAT_COLORS[getRandomInt(COAT_COLORS.length - 1)],
    eyesColor: EYES_COLORS[getRandomInt(EYES_COLORS.length - 1)]
  },
  {
    name: WIZARD_NAMES[getRandomInt(WIZARD_NAMES.length - 1)] + ' ' + WIZARD_LAST_NAMES[getRandomInt(WIZARD_LAST_NAMES.length - 1)],
    coatColor: COAT_COLORS[getRandomInt(COAT_COLORS.length - 1)],
    eyesColor: EYES_COLORS[getRandomInt(EYES_COLORS.length - 1)]
  },
  {
    name: WIZARD_NAMES[getRandomInt(WIZARD_NAMES.length - 1)] + ' ' + WIZARD_LAST_NAMES[getRandomInt(WIZARD_LAST_NAMES.length - 1)],
    coatColor: COAT_COLORS[getRandomInt(COAT_COLORS.length - 1)],
    eyesColor: EYES_COLORS[getRandomInt(EYES_COLORS.length - 1)]
  }
];

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

'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

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

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

'use strict';

(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var GAP = 10;
  var FONT_GAP = 20;
  var BAR_WIDTH = 40;
  var BAR_HEIGHT = FONT_GAP - 150;
  var BAR_GAP = 40;
  var COLUMNS_DISTANCE = 50;
  var WIZARD_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var ESC_KEY = 'Escape';
  var ENTER_KEY = 'Enter';

  window.consts = {
    CLOUD_WIDTH: CLOUD_WIDTH,
    CLOUD_HEIGHT: CLOUD_HEIGHT,
    CLOUD_X: CLOUD_X,
    CLOUD_Y: CLOUD_Y,
    GAP: GAP,
    FONT_GAP: FONT_GAP,
    BAR_WIDTH: BAR_WIDTH,
    BAR_HEIGHT: BAR_HEIGHT,
    BAR_GAP: BAR_GAP,
    COLUMNS_DISTANCE: COLUMNS_DISTANCE,
    WIZARD_NAMES: WIZARD_NAMES,
    WIZARD_LAST_NAMES: WIZARD_LAST_NAMES,
    COAT_COLORS: COAT_COLORS,
    EYES_COLORS: EYES_COLORS,
    FIREBALL_COLORS: FIREBALL_COLORS,
    ESC_KEY: ESC_KEY,
    ENTER_KEY: ENTER_KEY
  };
})();

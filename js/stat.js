'use strict';

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

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = 'bold 16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + FONT_GAP, CLOUD_Y + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + FONT_GAP, CLOUD_Y + FONT_GAP * 2);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240, ' + Math.floor(Math.random() * 101) + '%, 50%)';
    }
    ctx.fillRect(CLOUD_X + BAR_GAP + i * (BAR_WIDTH + COLUMNS_DISTANCE), CLOUD_Y + CLOUD_HEIGHT - BAR_GAP, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + BAR_GAP + i * (BAR_WIDTH + COLUMNS_DISTANCE), CLOUD_HEIGHT - FONT_GAP);
    ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_GAP + i * (BAR_WIDTH + COLUMNS_DISTANCE), CLOUD_Y + CLOUD_HEIGHT - BAR_GAP + (BAR_HEIGHT * times[i]) / maxTime - FONT_GAP);
  }
};

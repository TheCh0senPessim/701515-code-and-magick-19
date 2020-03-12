'use strict';

(function () {

  var renderCloud = function (ctx, cloudGap, color) {
    ctx.fillStyle = color;
    ctx.fillRect(window.consts.CLOUD_X + cloudGap, window.consts.CLOUD_Y + cloudGap, window.consts.CLOUD_WIDTH, window.consts.CLOUD_HEIGHT);
  };

  // var getMaxElement = function (arr) {
  //   var maxElement = arr[0];
  //   for (var i = 1; i < arr.length; i++) {
  //     if (arr[i] > maxElement) {
  //       maxElement = arr[i];
  //     }
  //   }
  //   return maxElement;
  // };

  window.renderStatistics = function (ctx, names, times) {
    renderCloud(ctx, window.consts.GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, 0, '#fff');

    ctx.fillStyle = '#000';
    ctx.font = 'bold 16px PT Mono';
    ctx.textBaseline = 'hanging';
    ctx.fillText('Ура вы победили!', window.consts.CLOUD_X + window.consts.FONT_GAP, window.consts.CLOUD_Y + window.consts.FONT_GAP);
    ctx.fillText('Список результатов:', window.consts.CLOUD_X + window.consts.FONT_GAP, window.consts.CLOUD_Y + window.consts.FONT_GAP * 2);

    var maxTime = window.utils.getMaxElement(times);

    for (var i = 0; i < names.length; i++) {
      if (names[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = 'hsl(240, ' + Math.floor(Math.random() * 101) + '%, 50%)';
      }
      ctx.fillRect(window.consts.CLOUD_X + window.consts.BAR_GAP + i * (window.consts.BAR_WIDTH + window.consts.COLUMNS_DISTANCE), window.consts.CLOUD_Y + window.consts.CLOUD_HEIGHT - window.consts.BAR_GAP, window.consts.BAR_WIDTH, (window.consts.BAR_HEIGHT * times[i]) / maxTime);
      ctx.fillStyle = '#000';
      ctx.fillText(names[i], window.consts.CLOUD_X + window.consts.BAR_GAP + i * (window.consts.BAR_WIDTH + window.consts.COLUMNS_DISTANCE), window.consts.CLOUD_HEIGHT - window.consts.FONT_GAP);
      ctx.fillText(Math.round(times[i]), window.consts.CLOUD_X + window.consts.BAR_GAP + i * (window.consts.BAR_WIDTH + window.consts.COLUMNS_DISTANCE), window.consts.CLOUD_Y + window.consts.CLOUD_HEIGHT - window.consts.BAR_GAP + (window.consts.BAR_HEIGHT * times[i]) / maxTime - window.consts.FONT_GAP);
    }
  };
})();

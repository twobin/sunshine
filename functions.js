var $window = $(window), gardenCtx, gardenCanvas, $garden, garden;

function timeElapse(c) {
  var e = Date();
  var f = (Date.parse(e) - Date.parse(c)) / 1000;
  var g = Math.floor(f / (3600 * 24));
  f = f % (3600 * 24);
  var b = Math.floor(f / 3600);
  if (b < 10) {
    b = "0" + b
  }
  f = f % 3600;
  var d = Math.floor(f / 60);
  if (d < 10) {
    d = "0" + d
  }
  f = f % 60;
  if (f < 10) {
    f = "0" + f
  }
  var a = '<span class="digit">' + g + '</span> 天 <span class="digit">' + b + '</span> 时 <span class="digit">' + d + '</span> 分 <span class="digit">' + f + "</span> 秒";
  $("#elapseClock").html(a)
}

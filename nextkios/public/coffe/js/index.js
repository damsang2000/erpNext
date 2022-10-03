$(".item").click(function () {
  $(".overlay").fadeIn();
});

// Закрытие окна на крестик
$(".close-popup").click(function () {
  $(".overlay").fadeOut();
});

// Закрытие окна на поле
$(document).mouseup(function (e) {
  var popup = $(".popup");
  if (e.target != popup[0] && popup.has(e.target).length === 0) {
    $(".overlay").fadeOut();
  }
});

// button
$("#button-1").mousedown(function () {
  $(this).addClass("hold-mouse");
  var x = event.offsetX - 10;
  var y = event.offsetY - 10;
  $("#button-1").append(
    '<div class="circle grow" style="left:' + x + "px;top:" + y + 'px;"></div>'
  );
});
$("#button-1").mouseup(function () {
  $(this).removeClass("hold-mouse");
});

//btn click
$(".btn-order").click(function (e) {
  $(".overlay").fadeOut();
  $(".section-right .title").remove();
  $(".section-right img").remove();
  $(".section-right").addClass("flex-column");
  $(".orders").addClass("left0");
});

$(".add").click(function (e) {
  var add = parseInt($(".value").text());
  console.log(add);
  $(".value").text(add + 1);
  //   var totalString = $(".total-money h3").text();
  //   var result = totalString.replace(".", "");
  //   var totalValue = parseInt(result);
  //   $(".total-money h3").text(totalValue * add);
});
$(".subtract").click(function (e) {
  var add = parseInt($(".value").text());
  console.log(add);
  $(".value").text(add - 1);
});

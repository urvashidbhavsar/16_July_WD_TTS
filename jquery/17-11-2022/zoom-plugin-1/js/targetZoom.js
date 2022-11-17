var l = $("#target").zoom(2);

$('input[type="range"]').on("change", function () {
  l.setZoom(this.value);
});

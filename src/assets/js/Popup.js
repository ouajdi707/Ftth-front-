$(function () {
  $("#btnShow").click(function () {
    $("#frame").attr("src", localStorage.getItem("cv")).dialog({
      modal: true,
      title: localStorage.getItem("filename"),
      width: 600,
      height: 600,
      open: function () {
        $("#frame");
      }
    });
  });
});


  $(".basic").spectrum({
  color: "#E6E",
  change: function(color) {
    $("#basic-log").text("change called: " + color.toHexString());
  }
  });

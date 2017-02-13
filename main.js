function getInfo(callback) {
    $.ajax({
        url: `http://json-data.herokuapp.com/forms`,
        dataType: "json",
        success: callback
    });
}

var labels = "";
var icons = "";

function formData(data) {
  var information = data;
    for (var i = 0; i < information.length; i++) {
      if ("type" === "select") {

      } else if ("type") {

      }
        console.log(labels);
        $(".form").append(`
          <div class="inputs">
          <i class= "small-icon fa ${information[i].icon}"</i> ${information[i].label}
          </div>`);
    }
  }
};

  // if (label === "Select Language") {
  //   return `<select>${label}</select>`
  // } else if (label === "Your Comment"){
  //   return `<textarea>${label}</textarea>`
  // } else

getInfo(formData);

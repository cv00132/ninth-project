var information;

function getInfo (callback) {
  information = $.ajax({
    url: `http://json-data.herokuapp.com/forms`,
    dataType: "json",
    success: callback
  });
}

var formData;

function formInfo (){
 for (var i = 0; i <information.responseJSON.length; i++){
    formData += information.responseJSON[i].label
  }
};

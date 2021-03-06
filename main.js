function getInfo(callback) {
    $.ajax({
        url: `https://json-data.herokuapp.com/forms`,
        dataType: "json",
        success: callback
    });
}

function formData(data) {
    for (var i = 0; i < data.length; i++) {
        var icons = data[i].icon;
        var labels = data[i].label;
        var types = data[i].type;
        var language = data[i].options;

        if (types === "select") {
            $(".form").append(`<div class="formInputs"><${types}><option>${labels}...</option></${types}></div>`)
            for (var count = 0; count < language.length; count++) {
                $(`${types}`).append(`<option>${language[count].label}</option>`)
            }
        } else if (types === "textarea") {
            $(".form").append(`
              <div class="formInputs">
              <i class= "small-icon fa ${icons}" aria-hidden="true"></i>
              <${types} placeholder = "${labels}"></${types}>
              </div>
              `)
        } else if (types != "select" && types != "textarea") {
            $(".form").append(`
           <div class="formInputs"><i class= "small-icon fa ${icons}" aria-hidden="true"></i>
           <input placeholder = "${labels}"></input>
           </div>
           `)
        }
    }
};

getInfo(formData);

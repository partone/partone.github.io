let currentLayout = '';
let currentKey = '';

function switchConfiguration(config, layout, key) {
  currentLayout= layout;
  currentKey = key;
  for (const property in config) {
    $("#" + property)
      .find(".top")
      .text(config[property][0].toUpperCase());
    $("#" + property)
      .find(".bottom")
      .text(config[property][1].toUpperCase());
  }
}

$(document).ready(function () {
  switchConfiguration(angloConfigs['CG']['Wheatstone'], 'Wheatstone', 'CG');

  // Switch keys
  $(".keyButton").on("click", function () {
    $(".keyButton").css("background-color", "rgba(255, 255, 255, 0.56)");
    $(this).css("background-color", "rgba(255, 255, 255)");
    const key = $(this).attr('id');
    console.log(key);
    switchConfiguration(angloConfigs[key][currentLayout], currentLayout, key);
  });

  // Switch layouts
  $("#switchButton").on("click", function () {
    if(currentLayout === 'Wheatstone') {
      switchConfiguration(angloConfigs[currentKey]['Jeffries'], 'Jeffries', currentKey);
    } else {
      switchConfiguration(angloConfigs[currentKey]['Wheatstone'], 'Wheatstone', currentKey);
    }
  });
});

let currentConfig = '';

const CGAngloWheatstone = {
  l1: ["C", "G"],
  l2: ["G", "B"],
  l3: ["c", "d"],
  l4: ["e", "f"],
  l5: ["g", "a"],
  l6: ["B", "A"],
  l7: ["d", "f#"],
  l8: ["g", "a"],
  l9: ["b", "c"],
  l10: ["d", "e"],
  l1a: ["E", "F"],
  l2a: ["A", "B♭"],
  l3a: ["c#", "d#"],
  l4a: ["a", "g"],
  l5a: ["g#", "b♭"],
  r1: ["c", "b"],
  r2: ["e", "d"],
  r3: ["g", "f"],
  r4: ["c", "a"],
  r5: ["e", "b"],
  r6: ["g", "f#"],
  r7: ["b", "a"],
  r8: ["d", "c"],
  r9: ["g", "e"],
  r10: ["b", "f#"],
  r1a: ["c#", "d#"],
  r2a: ["a", "g"],
  r3a: ["g#", "b♭"],
  r4a: ["c#", "d#"],
  r5a: ["a", "f"],
};

const CGAngloJeffries = {
  l1: ["C", "G"],
  l2: ["G", "B"],
  l3: ["C", "D"],
  l4: ["E", "F"],
  l5: ["G", "A"],
  l6: ["B", "A"],
  l7: ["D", "F#"],
  l8: ["G", "A"],
  l9: ["B", "c"],
  l10: ["d", "e"],
  l1a: ["E", "F"],
  l2a: ["A", "B♭"],
  l3a: ["C#", "D#"],
  l4a: ["A", "G"],
  l5a: ["G#", "B♭"],
  r1: ["c", "B"],
  r2: ["e", "d"],
  r3: ["g", "f"],
  r4: ["c", "a"],
  r5: ["e", "b"],
  r6: ["g", "f#"],
  r7: ["b", "a"],
  r8: ["d", "c"],
  r9: ["g", "e"],
  r10: ["f", "f#"],
  r1a: ["d#", "c#"],
  r2a: ["c#", "d#"],
  r3a: ["g#", "g"],
  r4a: ["c#", "B♭"],
  r5a: ["a", "d"],
};

function switchConfiguration(config, name) {
  currentConfig = name;
  console.log(currentConfig);
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
  switchConfiguration(CGAngloWheatstone, 'CGAngloWheatstone');
  $(".keyButton").on("click", function () {
    $(".keyButton").css("background-color", "rgba(255, 255, 255, 0.56)");
    $(this).css("background-color", "rgba(255, 255, 255)");
  });

  $("#switchButton").on("click", function () {
    if(currentConfig === 'CGAngloWheatstone') {
      switchConfiguration(CGAngloJeffries, 'CGAngloJeffries');
    } else {
      switchConfiguration(CGAngloWheatstone, 'CGAngloWheatstone')
    }
  });
});

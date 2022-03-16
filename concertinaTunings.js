const CGanglo = {
    l1: ["C", "G"],
    l2: ["G", "B"],
    l3: ["C", "D"],
    l4: ["E", "F"],
    l5: ["G", "A"],
    l6: ["B", "A"],
    l7: ["D", "F#"],
    l8: ["G", "A"],
    l9: ["B", "c"],
    l10:["d", "e"],
    l1a:["E", "F"],
    l2a:["A", "B♭"],
    l3a:["C#", "D#"],
    l4a:["A", "G"],
    l5a:["G#", "B♭"],
    r1: ["c", "B"],
    r2: ["e", "d"],
    r3: ["g", "f#"],
    r4: ["c'", "a"],
    r5: ["e'", "b"],
    r6: ["g", "f#"],
    r7: ["b", "a"],
    r8: ["d'", "c'"],
    r9: ["g'", "e'"],
    r10:["b'", "f#'"],
    r1a:["c#", "d#"],
    r2a:["a", "g"],
    r3a:["g#", "a#"],
    r4a:["c#", "d#"],
    r5a:["a", "f"],
}

for (const property in CGanglo) {
    $('#' + property).find(".top").text(CGanglo[property][0]);
    $('#' + property).find(".bottom").text(CGanglo[property][1]);
  }
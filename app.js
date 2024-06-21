// Changing the first letter of a sentence
// way 1
const txt = "hello it's me, i was wondering if after all this years to be"
const finalText = txt.replace(txt.charAt(0) , txt.charAt(0).toUpperCase())
console.log(finalText);

// way 2
const finalText2 = txt.slice(0,1).toUpperCase().concat(txt.slice(1))
console.log(finalText2);

// way3
console.log(txt.split("")[0].toUpperCase().concat(txt.substring(1)));

const name = "sabita"
const repocount = 50

//console.log(name + repocount + "value");

console.log(`hello my name is ${name} and my repocount is ${repocount}`);

const gameName = new String('sabitahc')

//console.log(gameName[0]);
//console.log(gameName.__proto__);


//console.log(gameName.length);
//console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newstring = gameName.substring(0,4)
console.log(newstring);

const anotherstring = gameName.slice(-8,4)
console.log(anotherstring);

const newStringOne = "  sabita  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "http://sabita.com/sabita%20pandit"

console.log(url.replace(`%20`, - '-'))
console.log(url.includes('sundar'));


console.log(gameName.split('-'));

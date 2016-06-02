var fs = require('fs');

// var getPets = new Promise()

var args = process.argv.slice(2);
args = args.map(x => x.toLowerCase());

// TODO if no arguments, give usage message warning to stderror
if (!args[1]){
  console.error('Usage: node pets.js [read | create | update | destroy]');
  // process.exit(9);
}

console.log('hello');


// if READ, read the pets.js file
var pets;
if (args[0] === 'read' && !args[1]) {
  fs.readFile('./pets.json', (err,data) => {
    if (err) throw err;
    pets = JSON.parse(data);
    console.log(pets);
  });
}
else if (args[0] === 'read') {
  fs.readFile('./pets.json', (err,data) => {
    if (err) throw err;
    pets = JSON.parse(data);
    console.log(pets[args[1]]);
  });
}

// TODO
// if args[1] is out of bounds, throw error
// Usage: node pets.js read INDEX


// if args[0] is 'create', check for three more args:
//    AGE KIND NAME
else if (args[0] === 'create' && args.length === 4){
  //  then make a new pet object for the pets.json
  //  remember to make age an integer
  var age = parseInt(args[1]),
      kind = args[2],
      name = args[3];

  var newPet = {
    'age': age,
    'kind': kind,
    'name': name
  }

}

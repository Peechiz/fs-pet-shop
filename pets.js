var fs = require('fs');
var file = './pets.json';
var subCommand = process.argv[2];

if (!subCommand){
  console.error('Usage: node pets.js [read | create | update | destroy]');
  process.exit(9);
}

if (subCommand === 'read') {
  var petIndex = process.argv[3];

  fs.readFile(file, 'utf8', (err,data) => {
    if (err) { throw err };
    var pets = JSON.parse(data);

    if (!petIndex){
      console.log(pets);
    }
    else if (!pets[petIndex]){
      console.error('Usage: node pets.js read INDEX\n');
      process.exit(9);
    }
    else {
      console.log(pets[petIndex]);
    }
  })
}
else if (subCommand === 'create') {
  var age = process.argv[3],
      kind = process.argv[4],
      name = process.argv[5];

  if (age && kind && name){
    var newPet = {};
    newPet.age = parseInt(age);
    newPet.kind = kind;
    newPet.name = name;

    // append to JSON file
    fs.readFile(file, 'utf8', (err,data) => {
      var pets = JSON.parse(data);
      pets.push(newPet);

      fs.writeFile(file, JSON.stringify(pets), (err) => {
        if (err) throw err;
        console.log(newPet.name, 'was added successfully');
      })
    })
  }
  else {
    console.error('Usage: node pets.js create AGE KIND NAME');
  }
}

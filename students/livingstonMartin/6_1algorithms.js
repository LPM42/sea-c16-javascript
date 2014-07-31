var people = [
  {
    name: 'Hank',
    age: 29,
    parent: 'Don'
  },
  {
    name: 'Deborah',
    age: 30,
    parent: 'Don'
  },
  {
    name: 'Danny',
    age: 24,
    parent: 'Don'
  },
  {
    name: 'Don',
    age: 64,
    parent: 'Haskell'
  },
  {
    name: 'Kathy',
    age: 75,
    parent: 'Lenora'
  },
  {
    name: 'Haskell',
    parent: 'Finus'
  },
  {
    name: 'Finus'
  }
]

function oldestLivingParent(people) {
  var parentList = [];
  var oldestParent = "";

  people.forEach(function (person) {
    parentList.push(person.parent);
  });

  people.forEach(function (person) {
    parentList.forEach(function(parent) {
      if ((person.name === parent) && (person.age >= oldestParent)) {
      oldestParent = person;
      }
    });
  });
  console.log(oldestParent.name + " is the oldest parent at the ripe old age of " + oldestParent.age + " years old.");
  return oldestParent;
}

oldestLivingParent(people);
// -> 'Don'
function Hero(id, name, age, gender, height, weight) {
  this.id = id;
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.height = height;
  this.weight = weight;
}


function Api() {
  this.db = [];

  this.initData = function () {
    for (let i = 0; i < 200; i++) {
      this.db.push(new Hero(i,
        'Name',
        Math.random() * 85 + 15,
        Math.random() < 0.5 ? 'MALE' : 'FEMALE',
        Math.random()*50 + 150),
        Math.random()*50 + 50);
    }
  };

  this.add = function (hero) {
    this.db.push(hero);
  }

  this.get = function(id) {
    return this.db;
  }




}
function Hero(pageid, name, urlslug, id, align, eye, hair, sex, gsm, alive, appearances, firstappearance, year) {
  this.pageid = pageid;
  this.name = name;
  this.urlslug = urlslug;
  this.id = id;
  this.align = align;
  this.eye = eye;
  this.hair = hair;
  this.sex = sex;
  this.gsm = gsm;
  this.alive = alive;
  this.appearances = appearances;
  this.firstappearance = firstappearance;
  this.year = year;
}

function HeroFromExisting(hero) {
  return new Hero(hero.pageid, hero.name, hero.urlslug, hero.id, hero.align,
    hero.eye, hero.hair, hero.sex, hero.gsm, hero.alive, hero.appearances,
    hero.firstappearance, hero.year);
}


function Api() {
  this.db = [];

  this.initData = function () {
    const heroes = require('../var/data/marvel-wikia-data');
    for (let hero of heroes) {
      this.db.push(new Hero(
        hero.page_id,
        hero.name,
        hero.urlslug,
        hero.ID,
        hero.ALIGN,
        hero.EYE,
        hero.HAIR,
        hero.SEX,
        hero.GSM,
        hero.ALIVE,
        hero.APPEARANCES | 0,
        hero.FIRSTAPPEARANCE,
        hero.Year | 0)
      );
    }
  };

  this.add = function (hero) {
    this.db.push(HeroFromExisting(hero));
  };

  this.getAll = function() {
    return this.db;
  };

  this.getOne = function (id) {
    return this.db.find(o => o.id === id);
  };


  this.initData();
}

module.exports = {
  Api,
  Hero,
  HeroFromExisting
};
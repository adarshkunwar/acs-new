const db = require("../config/db");
class TARGET {
  constructor(name, location) {
   this.name=name,
   this.location=location
  }

  createTarget() {
    let query = `insert into target(name,location)
    values('${this.name}','${this.location}')`;
    return db.execute(query);
  }
  static getTarget() {
    let query = `select * from target`;
    return db.execute(query);
  }
}
module.exports = TARGET;

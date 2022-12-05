const db = require("../config/db");
class TARGET {
  constructor(username, targetname, position, location, image, description) {
    (this.username = username),
      (this.targetname = targetname),
      (this.position = position),
      (this.location = location),
      (this.image = image),
      (this.description = description);
  }

  createTarget() {
    let query = `insert into target(username,targetname,position,location,image,description)
    values('${this.username}','${this.targetname}','${this.position}','${this.location}','${this.image}','${this.description}')`;
    return db.execute(query);
  }
  static getTarget() {
    let query = `select * from target`;
    return db.execute(query);
  }
}
module.exports = TARGET;

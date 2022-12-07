const db = require("../config/db");
class Login {
  constructor(username, citizenship, password) {
    (this.username = username),
      (this.citizenship = citizenship),
      (this.password = password);
  }
  createLogin() {
    let createSql = `insert into register (username,citizenship,password)
    values('${this.username}','${this.citizenship}','${this.password}')`;
    return db.execute(createSql);
  }
  static getLogin() {
    let createSql = `select * from register`;
    return db.execute(createSql);
  }
  static findUser(username) {
    return db.execute(`SELECT * FROM register WHERE username='${username}'`);
  }
}
module.exports = Login;

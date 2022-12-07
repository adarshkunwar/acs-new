const { check, validationResult } = require("express-validator");
const LOGIN = require("../module/register");

const bcrypt = require("bcrypt");

exports.loginValidations = [
  check("username", "Username should not be empty").not().isEmpty(),
  check("password", "password length should me more than 5").isLength({
    min: 5,
  }),
  check(
    "citizenship",
    "citizenship number should not be more than 12 digit"
  ).isLength({
    max: 12,
  }),
];
exports.validate = (req, res, next) => {
  const result = validationResult(req);
  console.log(result);
  if (!result.isEmpty()) {
    return res.status(400).json({
      err: result.array(),
    });
  } else {
    next();
  }
};
exports.createLogincontroller = async (req, res, err) => {
  try {
    //citizenship password

    console.log("called");
    const { username, citizenship, password } = req.body;

    // const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, 10);
    const loginModal = new LOGIN(username, citizenship, hash);
    const createRecord = await loginModal.createLogin();
    return res.status(200).json({
      createRecord,
      msg: "user register panel created successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      errors: error,
    });
  }
};
exports.userLogin = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    // bycript

    const [user] = await LOGIN.findUser(username);
    console.log(user[0].password);
    if (user.length >= 1) {
      const matched = await bcrypt.compare(password, user[0].password);

      if (matched) {
        return res.status(200).json({
          msg: "You have login successfully",
          user,
        });
      } else {
        return res.status(401).json({
          errors: [
            {
              msg: "Password is not correct",
            },
          ],
        });
      }
    } else {
      return res.status(404).json({
        errors: [
          {
            msg: "user not found",
          },
        ],
      });
    }
  } catch (error) {
    next(error);
  }
};

exports.getLoginController = async (req, res, err) => {
  const loginModal = await LOGIN.getLogin();
  return res.status(200).json(loginModal[0]);
};

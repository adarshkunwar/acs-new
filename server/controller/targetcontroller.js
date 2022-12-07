const TARGET = require("../module/target");
const formidable = require("formidable");
const fs = require("fs");

exports.createTargetController = async (req, res, err) => {
  try {
    const { username, targetname, position, location, image, description } =
      req.body;
    const buffer = Buffer.from(image, "base64");
    const targetModal = new TARGET(
      username,
      targetname,
      position,
      location,
      image,
      description
    );
    const createRecord = await targetModal.createTarget();
    return res.status(200).json({
      createRecord,
      msg: "table db created succesfully",
    });
  } catch (error) {
    console.log(error);
  }
};
exports.getTargetController = async (req, res, err) => {
  const targetModal = await TARGET.getTarget();

  return res.status(200).json(targetModal[0]);
};

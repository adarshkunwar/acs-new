const TARGET = require("../module/target");
exports.createTargetController = async (req, res, err) => {
  try {
    const { name, location } = req.body;

    const targetModal = new TARGET(name,location);
    const createRecord = await targetModal.createTarget();
    return res.status(200).json({
      createRecord,
      msg: "table db created succesfully",
    });

  } catch (error) {
    console.log(error);
  }
}
exports.getTargetController = async (req, res, err) => {
  const targetModal = await TARGET.getTarget();
  
  return res.status(200).json(targetModal[0]);
};

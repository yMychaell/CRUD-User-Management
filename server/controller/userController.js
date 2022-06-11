const USER_MODEL = require('../model/userModel');

const createUser = async (req, res) => {

  const { name, email, gender, status } = req.body;

  if (!name || !email || !gender || !status) {

    res.status(400).json({ message: "Please fill all out fields." });

  };

  const userData = {
    name,
    email,
    gender,
    status
  }

  try {

    await USER_MODEL.create(userData);

    res.status(201).json(userData);

  } catch (error) {

    res.status(500).json({ message: error.message });

  };


}

const findUser = async (req, res) => {

  if (req.query.id) {
    const id = req.query.id;


    try {

      const userData = await USER_MODEL.findById(id);
      res.status(200).json(userData);

    } catch (error) {
      res.status(500).json({ message: error });
    }

  } else {

    try {

      const userData = await USER_MODEL.find();
      res.status(200).json(userData);

    } catch (error) {
      res.status(500).json({ message: error });
    };
  }
}

const updateUser = async (req, res) => {

  const id = req.params.id

  const { name, email, gender, status } = req.body

  try {

    await USER_MODEL.findByIdAndUpdate(id, {
      name,
      email,
      gender,
      status
    })

    res.status(200).json(req.body)

  } catch (error) {
    res.status(500).json({ message: error })
  }

}

const deleteUser = async (req, res) => {

  const id = req.params.id

  try {

    await USER_MODEL.findByIdAndDelete(id);

    res.status(200).json({message: "User removed successfully !"})

  } catch (error) {
    res.status(500).json({ message: error })
  }

}

module.exports = {
  createUser,
  findUser,
  updateUser,
  deleteUser
}

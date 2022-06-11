const axios = require('axios');

const home = async (req, res) => {

  try {

    const response = await axios.get("crud-user-management.herokuapp.com/api/users")

    const userData = response.data

    res.render('index', { user: userData })

  } catch (error) {
    console.log(error)
  }


}

const addUser = (req, res) => {

  res.render('add-user')

}

const updateUser = async (req, res) => {

  const response = await axios.get("http://localhost:4000/api/users/", { params: { id: req.query.id } })

  const userData = response.data
  res.render('update-user', { user: userData })

}

module.exports = {
  home,
  addUser,
  updateUser
}

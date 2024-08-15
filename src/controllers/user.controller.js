import User from "../models/user.model.js";

export function getUsers(req, res) {
  User.find({})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
}

export async function getUserById(req, res) {
  const id = req.user;
  console.log(await User.findById({ _id: id }));

  await User.findById({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
}

export async function registerUser(req, res) {
  const userData = req.body;

  const newUser = new User({
    email: userData.email,
    username: userData.username,
    password: userData.password,
  });

  await newUser
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
}

export async function updateUser(req, res) {
  console.log(req.user);
  console.log(req.body);
  try {
    const updatedUser = await User.findByIdAndUpdate(req.user, req.body, {
      new: true,
    });
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

export function deleteUser(req, res) {
  const id = req.params.id;

  User.deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
}

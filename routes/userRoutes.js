const router = require('express').Router();
const User = require('../models/User');

// GET all users
router.get('/', async (req, res) => {
  const users = await User.find().populate('thoughts friends');
  res.json(users);
});

// GET a single user by ID
router.get('/:userId', async (req, res) => {
  const user = await User.findById(req.params.userId).populate('thoughts friends');
  res.json(user);
});

// POST a new user
router.post('/', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.status(201).json(user);
});

// PUT to update a user by ID
router.put('/:userId', async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
  res.json(user);
});

// DELETE a user by ID
router.delete('/:userId', async (req, res) => {
  await User.findByIdAndDelete(req.params.userId);
  res.status(204).send();
});

module.exports = router;

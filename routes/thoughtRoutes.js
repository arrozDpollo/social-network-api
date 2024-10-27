const router = require('express').Router();
const Thought = require('../models/Thought');

// GET all thoughts
router.get('/', async (req, res) => {
  const thoughts = await Thought.find();
  res.json(thoughts);
});

// GET a single thought by ID
router.get('/:thoughtId', async (req, res) => {
  const thought = await Thought.findById(req.params.thoughtId);
  res.json(thought);
});

// POST a new thought
router.post('/', async (req, res) => {
  const thought = new Thought(req.body);
  await thought.save();
  res.status(201).json(thought);
});

// PUT to update a thought by ID
router.put('/:thoughtId', async (req, res) => {
  const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, { new: true });
  res.json(thought);
});

// DELETE a thought by ID
router.delete('/:thoughtId', async (req, res) => {
  await Thought.findByIdAndDelete(req.params.thoughtId);
  res.status(204).send();
});

module.exports = router;

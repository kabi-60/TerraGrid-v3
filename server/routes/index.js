const express = require('express');
const router = express.Router();
const taskModel = require('../models/tasks');
const NTaskModel = require('../models/Ntask');
const passwordModel = require('../models/passwordmanager');
const PracticalModel = require('../models/practical');

// Task Routes
router.post('/add', (req, res) => {
  taskModel.create(req.body)
    .then(tasks => res.json(tasks))
    .catch(err => res.json(err));
});

router.get('/get', (req, res) => {
  taskModel.find().sort({ _id: -1 })
    .then(tasks => res.json(tasks))
    .catch(err => res.json(err));
});

router.delete('/delete/:id', (req, res) => {
  const id = req.params.id;
  taskModel.findByIdAndDelete({ _id: id })
    .then(tasks => res.json(tasks))
    .catch(err => res.json(err));
});

// NTask Routes
router.post('/tomorrowTask', (req, res) => {
  NTaskModel.create(req.body)
    .then(Ntask => res.json(Ntask))
    .catch(err => res.json(err));
});

router.get('/tomorrowTask', (req, res) => {
  NTaskModel.find().sort({ _id: -1 })
    .then(Ntask => res.json(Ntask))
    .catch(err => res.json(err));
});

router.delete('/tomorrowTask/:id', (req, res) => {
  const id = req.params.id;
  NTaskModel.findByIdAndDelete({ _id: id })
    .then(Ntask => res.json(Ntask))
    .catch(err => res.json(err));
});

// Practical Routes
router.post('/practical', (req, res) => {
  PracticalModel.create(req.body)
    .then(practical => res.json(practical))
    .catch(err => res.json(err));
});

router.get('/practical', (req, res) => {
  PracticalModel.find().sort({ _id: -1 })
    .then(practical => res.json(practical))
    .catch(err => res.json(err));
});

router.delete('/practical/:id', (req, res) => {
  const id = req.params.id;
  PracticalModel.findByIdAndDelete({ _id: id })
    .then(practical => res.json(practical))
    .catch(err => res.json(err));
});

// Password Routes
router.post('/password', (req, res) => {
  passwordModel.create(req.body)
    .then(password => res.json(password))
    .catch(err => res.json(err));
});

router.get('/password', (req, res) => {
  passwordModel.find().sort({ _id: -1 })
    .then(password => res.json(password))
    .catch(err => res.json(err));
});

router.delete('/password/:id', (req, res) => {
  const id = req.params.id;
  passwordModel.findByIdAndDelete({ _id: id })
    .then(password => res.json(password))
    .catch(err => res.json(err));
});

router.put('/password/:id', (req, res) => {
  const id = req.params.id;
  passwordModel.findByIdAndUpdate(id, req.body, { new: true })
    .then(password => res.json(password))
    .catch(err => res.json(err));
});

router.get('/password/:id', (req, res) => {
  const id = req.params.id;
  passwordModel.findById({ _id: id })
    .then(password => res.json(password))
    .catch(err => res.json(err));
});

module.exports = router;

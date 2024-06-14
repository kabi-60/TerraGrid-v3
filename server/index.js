const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const taskModel = require("../models/tasks");
const NTaskModel = require("../models/Ntask");
const passwordModel = require("../models/passwordmanager");
const PraticalModel = require("../models/practical");

mongoose.connect("mongodb://127.0.0.1:27017/terragrid", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Define routes
app.post("/add", (req, res) => {
    taskModel.create(req.body)
        .then(tasks => res.json(tasks))
        .catch(err => res.json(err));
});

app.get("/get", (req, res) => {
    taskModel.find().sort({ _id: -1 })
        .then(tasks => res.json(tasks))
        .catch(err => res.json(err));
});

app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    taskModel.findByIdAndDelete({ _id: id })
        .then(tasks => res.json(tasks))
        .catch(err => res.json(err));
});

app.post("/tomorrowTask", (req, res) => {
    NTaskModel.create(req.body)
        .then(Ntask => res.json(Ntask))
        .catch(err => res.json(err));
});

app.get("/tomorrowTask", (req, res) => {
    NTaskModel.find().sort({ _id: -1 })
        .then(Ntask => res.json(Ntask))
        .catch(err => res.json(err));
});

app.delete("/tomorrowTask/:id", (req, res) => {
    const id = req.params.id;
    NTaskModel.findByIdAndDelete({ _id: id })
        .then(Ntask => res.json(Ntask))
        .catch(err => res.json(err));
});

app.post("/pratical", (req, res) => {
    PraticalModel.create(req.body)
        .then(pratical => res.json(pratical))
        .catch(err => res.json(err));
});

app.get("/pratical", (req, res) => {
    PraticalModel.find().sort({ _id: -1 })
        .then(pratical => res.json(pratical))
        .catch(err => res.json(err));
});

app.delete("/pratical/:id", (req, res) => {
    const id = req.params.id;
    PraticalModel.findByIdAndDelete({ _id: id })
        .then(pratical => res.json(pratical))
        .catch(err => res.json(err));
});

app.post("/password", (req, res) => {
    passwordModel.create(req.body)
        .then(password => res.json(password))
        .catch(err => res.json(err));
});

app.get("/password", (req, res) => {
    passwordModel.find().sort({ _id: -1 })
        .then(password => res.json(password))
        .catch(err => res.json(err));
});

app.delete("/password/:id", (req, res) => {
    const id = req.params.id;
    passwordModel.findByIdAndDelete({ _id: id })
        .then(password => res.json(password))
        .catch(err => res.json(err));
});

app.put("/password/:id", (req, res) => {
    const id = req.params.id;
    passwordModel.findByIdAndUpdate(id, req.body, { new: true })
        .then(password => res.json(password))
        .catch(err => res.json(err));
});

app.get("/password/:id", (req, res) => {
    const id = req.params.id;
    passwordModel.findById({ _id: id })
        .then(password => res.json(password))
        .catch(err => res.json(err));
});

// Export the app so it can be used as a serverless function
module.exports = app;

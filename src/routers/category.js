// const express = require("express")
const {Category} = require("../models/category");

// const categoryRouter = express.Router()

exports.createCategory = async (req, res) => {
    try {
        const category = new Category(req.body);
        await category.save();
        res.status(201).json(category);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

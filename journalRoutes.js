const express = require('express');
const router = express.Router();
const Journal = require('../models/Journal');

// Create a journal
router.post('/', async (req, res) => {
    try {
        const journal = new Journal(req.body);
        const saved = await journal.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get all journals
router.get('/', async (req, res) => {
    try {
        const journals = await Journal.find().sort({ createdAt: -1 });
        res.json(journals);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Delete a journal
router.delete('/:id', async (req, res) => {
    try {
        await Journal.findByIdAndDelete(req.params.id);
        res.json({ message: 'Deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
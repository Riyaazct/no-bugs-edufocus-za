const express = require("express");
const router = express.Router();
const db = require("./db");

//API Endpoint to get all training material
router.use("/training_material", (req, res) => {
    db.query("SELECT * FROM training_material", (err, result) => {
        if(err) {
            console.error(err);
            res.status(500).json({ error: "Internal Server Error" });
            return;
        } res.json(result.rows);
    });
});

// API endpoint to get a specific training material by id
router.use("/training_material/:id", (req, res) => {
    const id = req.params.id;
    db.query("SELECT * FROM training_material WHERE id = $1", [id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: "Internal Serer Error" });
            return;
        }
        if (result.rows.length === 0) {
            res.status(404).json({ error: "Training material not found" });
            return;
        }
        res.json(result.rows[0]);
    });
});


module.exports = router;
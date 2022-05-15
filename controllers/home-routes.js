const router = require("express").Router();
const sequelize = require("../config/connection");
const { FormSubs } = require("../models");

// get all posts for homepage
router.get("/", (req, res) => {
    console.log("======================");
    FormSubs.findAll({})
        .then((dbFormData) => {
            const form_data = dbFormData.map((form) =>
                form.get({ plain: true })
            );

            res.render("homepage", {
                form_data,
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;

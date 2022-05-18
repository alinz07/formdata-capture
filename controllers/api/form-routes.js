const router = require("express").Router();
const { FormSubs } = require("../../models");

// get all formsubs
router.get("/", (req, res) => {
    console.log("======================");
    FormSubs.findAll({})
        .then((dbFormData) => res.json(dbFormData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post("/", (req, res) => {
    // expects {title: 'Taskmaster goes public!', post_url: 'https://taskmaster.com/press', user_id: 1}
    FormSubs.create({
        name: req.body.name,
        email: req.body.email,
        note: req.body.note,
    })
        .then((dbFormData) => res.json(dbFormData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

//maybe implement delete if people start using my form
// router.delete("/:id", (req, res) => {
//     console.log("id", req.params.id);
//     FormSubs.destroy({
//         where: {
//             id: req.params.id,
//         },
//     })
//         .then((dbFormData) => {
//             if (!dbFormData) {
//                 res.status(404).json({ message: "No post found with this id" });
//                 return;
//             }
//             res.json(dbFormData);
//         })
//         .catch((err) => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

module.exports = router;

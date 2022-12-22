const router = require('express').Router();
const {
    user,
    post,
    comment
} = require('../../models');
const withAuth = require('../../utils/auth');


//Get comments
router.get("/", (req, res) => {
    comment.findAll()
        .then((dbCommentData) => res.json(dbCommentData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

//Create comments
router.post('/', withAuth, (req, res) => {
    if (req.session) {
        comment.create({
                comment_text: req.body.comment_text,
                post_id: req.body.post_id,
                user_id: req.session.user_id
            })
            .then(dbCommentData => res.json(dbCommentData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    }
});


module.exports = router;
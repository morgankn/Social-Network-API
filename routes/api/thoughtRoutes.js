const router = require('express').Router();

const {
    getThought,
    singleThoughtId,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thoughtController');

router.route('/').get(getThought).post(createThought);

router.route('/:thoughtId')
.get(singleThoughtId)
.put(updateThought)
.delete(deleteThought);

router.route(':thoughtId/reaction')
.post(createReaction)
.delete(deleteReaction);



module.exports = router;

const router = require('express').Router();
const twitterController = require('../controllers/twitter');
const authUser = require('../middleware/userAuth');


// get tweets route
router.get('/:id',authUser, twitterController.getTweet);

//create tweets routes
router.post('/',authUser, twitterController.createTweet);

//delete tweet routes
router.delete('/:id',authUser, twitterController.deleteTweet);

//likes tweet route
router.put('/like/:id',authUser, twitterController.likeTweet);

//dislike tweet route
router.put('/dislike/:id',authUser, twitterController.dislikeTweet);

//comment on tweet route
router.put('/comment/:id',authUser, twitterController.commentTweet);

// retweet the tweet
router.post('/retweet/:id',authUser, twitterController.createTweet);

//export module
module.exports = router;
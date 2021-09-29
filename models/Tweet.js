const mongoose = require('mongoose');

const TweetSchema = mongoose.Schema({
    userId: { type: mongoose.Types.ObjectId, require: true },
    content: { type: String, require: true },
    isRetweet: { type: mongoose.Types.ObjectId, ref: "User" },
    retweet: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
    likes: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
    comments: [{userId:{ type: mongoose.Types.ObjectId, ref: 'User' },comment:{type:String,require:true}}]
});


//create model
const Tweet = mongoose.model('Tweet',TweetSchema);

//export module
module.exports = Tweet;
const Tweet = require('../models/Tweet')
//get tweet controller
exports.getTweet = (req, res, next) => {
    const userId = req.params.id;
    Tweet.find({userId})
    .then(result=>{
        if(result)
        res.status(201).json(result);
        else
        {
            res.status(404).json({message:'No tweet found'})
        }
    })
    .catch(error=>{
        res.status(500).json({error:error.message});
    })
    //res.status(200).json({message:"rampravesh"})
}

//create tweet controller
exports.createTweet = (req, res, next) => {
    const {userId,content,isRetweet} = req.body;
    Tweet.create({userId,content,isRetweet})
    .then(tweet=>{
        tweet.save();
        res.status(201).json({message:'Tweet created successfully'});
    })
    .catch(error=>{
        res.status(500).json({error:error.message});
    })
}

//delete tweet
exports.deleteTweet = (req, res, next) => {
   const _id = req.params.id
    Tweet.findOneAndDelete({_id})
    .then(()=>{
        res.status(201).json({message:'Tweet deleted successfully'});
    })
    .catch(error=>{
        res.status(500).json({error:error.message});
    })
}

//like tweet
exports.likeTweet = (req, res, next) => {
    const _id= req.params.id
    Tweet.findOne({_id})
    .then(tweet=>{
        if(tweet){
            tweet.likes.addToSet(_id);
            tweet.save()
            res.status(200).json({message:'Liked tweet successfully'});
        }
        else{
            res.status(404).json({error:'No found'});
        }
    })
    .catch(error=>{
        res.status(500).json({error:error.message});
    })
}


//dislike tweet
exports.dislikeTweet = (req, res, next) => {
    const _id= req.params.id
    Tweet.findOne({_id})
    .then(tweet=>{
        if(tweet){
            tweet.likes.pull(_id);
            tweet.save();
            res.status(200).json({message:'Disliked tweet successfully'});
        }
        else{
            res.status(404).json({error:'No found'});
        }
    })
    .catch(error=>{
        res.status(500).json({error:error.message});
    })
}

//comment on tweet
exports.commentTweet = (req, res, next) => {
    const _id= req.params.id
    const {userId, comment} = req.body;
    Tweet.findOne({_id})
    .then(tweet=>{
        if(tweet){
            tweet.comments.push({userId,comment});
            tweet.save();
            res.status(200).json({message:'Commented on tweet successfully'});
        }
        else{
            res.status(404).json({error:'No found'});
        }
    })
    .catch(error=>{
        res.status(500).json({error:error.message});
    })
}
require('../models/User');
const User   = require('mongoose').model('User');

//create register user controller
exports.registerUser = (req, res, next) => {
    const {username, password} = req.body;
    if(req.body.username != null && req.body.password != null){
        User.exists({username})
        .then(result=>{
            if(result){
                return res.status(409).json({error:"Username already exist"});
            }else{
                User.create({username})
                .then( user=>{
                    user.setPassword(password);
                    console.log(user.hash);
                    const token = user.generateJWT();
                    res.cookie('jwt',token,{httpOnly:true,maxAge:3*24*60*60*1000});
                    return user.save()
                    .then(()=>{
                        res.status(200).json({userId:user._id,message:'User successfully register'});
                    }); 
                }); 
            }
        })
        .catch(error=>{
            res.status(500).json({eror:error.message});
        });
    }
    else{
        res.status(401).json({error:"Please enter username and password both"})
    }
}

// login user controller
exports.loginUser = (req, res, next) => {   
    const {username,password} = req.body;
    if(req.body.username != null && req.body.password != null){
        User.findOne({username})
        .then(user=>{
             if(user){
                 if(user.validPassword(password)){
                    const token = user.generateJWT();
                    res.cookie('jwt',token,{httpOnly:true,maxAge:3*24*60*60*1000});
                    res.status(200).json({userId:user._id,message:'User successfully login.'});
                 }
                 else{
                    res.status(401).json({error:'Please enter valid usename and password.'}); 
                 }
             }
             else{
                res.status(404).json({error:'User does not exists.'});
             }
        })
        .catch(error=>{
            res.status(500).json({error:error.message});
        });
     }
     else{
         res.status(401).json({error:"Please enter username and password both"});
     }
}

// follow user controller
exports.followerUser = (req, res, next) => {
    const followerId = req.body.followerId;
    const followingId = req.body.followingId;
    if(followerId != null && followingId != null){
        User.findOne({_id:followingId})
        .then(followingUser=>{
            if(followingUser){
                User.findOne({_id:followerId})
                .then(async followerUser=>{
                    if(followerUser){
                        followingUser.follower.addToSet(followerId);  
                        followerUser.following.addToSet(followingId);
                        await followingUser.save();
                        await followerUser.save();
                        res.status(200).json({follwer:followerUser.follower.length,following:followerUser.following.length,message:'User following'});
                    }
                    else{
                        res.status(404).json({error:'FollowerId does not exists'});
                    }
                })
            }
            else{
                res.status(404).json({error:'FollowingId does not exists'});
            }
        })
        .catch(error=>{
            res.status(500).json({error:error.message});
        });
    }
    else{
        res.status(401).json({error:'FollowerId and followingId both is required'})
    }
    
}

//Unfollow user controller
exports.unfollowerUser = (req, res, next) => {
    const followerId = req.body.followerId;
    const followingId = req.body.followingId;
    if(followerId != null && followingId != null){
        User.findOne({_id:followingId})
        .then(followingUser=>{
            if(followingUser){
                User.findOne({_id:followerId})
                .then(async followerUser=>{
                    if(followerUser){
                        followingUser.follower.pull(followerId);  
                        followerUser.following.pull(followingId);
                        await followingUser.save();
                        await followerUser.save();
                        res.status(200).json({follwer:followerUser.follower.length,following:followerUser.following.length,messgae:"Succesfully unfollow"})
                    }
                    else{
                        res.status(404).json({error:'FollowerId does not exists'});
                    }
                })
            }
            else{
                res.status(404).json({error:'FollowingId does not exists'});
            }
        })
        .catch(error=>{
            res.status(500).json({error:error.message});
        })
    }
    else{
        res.status(401).json({error:'FollowerId and followingId both is required'})
    }
}
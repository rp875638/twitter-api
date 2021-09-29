const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const UserSchma = mongoose.Schema({
    username: { type: String, require: true, unique: true },
    hash: { type: String, require: true },
    salt:{type:String, require:true},
    secreteKey:{type:String, require:true},
    follower: [{ type: mongoose.Types.ObjectId, ref: 'User'}],
    following: [{ type: mongoose.Types.ObjectId, ref: 'User'}]
});

UserSchma.methods.setPassword = function (password){
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password,this.salt,1000,64,`sha512`).toString('hex');
}
UserSchma.methods.validPassword = function(password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, `sha512`).toString(`hex`);
    return this.hash === hash;
};
UserSchma.methods.generateJWT = function() {
    const expirationTime = 3*24*60*60;
    
    return jwt.sign({
        _id: this._id,
    }, '79cb74d3-fd5f-4e0f-9d53-589b2be77a8a', {expiresIn:expirationTime});
}

const User = mongoose.model('User', UserSchma);

module.exports = User;
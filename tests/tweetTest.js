const chai = require('chai');
const server = require('../app');
const chaiHttp = require('chai-http');


//Assertion style
chai.should();

chai.use(chaiHttp);

describe('User API',()=>{

    describe('GET /tweet/:id',()=>{
        it('It should get tweets',(done)=>{
            const id = "6154356623e8870cb908810d";
            chai.request('http://localhost:3000')
            .get(`/tweet/${id}`)
            .end((error,response)=>{
                
                response.should.have.status(200);
                response.body.should.be.a('object');
                response.body.should.have.property('userId');
                response.body.should.have.property('content');
                response.body.should.have.property('likes');
                response.body.should.have.property('comments');
                response.body.should.have.property('retweet');

               done()
            })
        })
            
    })

    describe('POST /tweet',()=>{
        it('It should create tweet',(done)=>{
            const tweet = {
                userId:"6154356623e8870cb908810d",
                content:"Hello rampravesh. Welcome to the world of node."
            }
            chai.request('http://localhost:3000')
            .post('/tweet')
            .send(tweet)
            .end((error,response)=>{
                
                response.should.have.status(200);
                response.body.should.be.a('object');
                response.body.should.have.property('tweetId');
                response.body.should.have.property('message');

               done()
            })
        })
            
    })

    describe('DELETE /tweet/:id',()=>{
        it('It should delete tweet',(done)=>{
            const id = "61544260b5a782692df6cd87"
            chai.request('http://localhost:3000')
            .delete(`/tweet/${id}`)
            .end((error,response)=>{
                
                response.should.have.status(200);
                response.body.should.be.a('object');
                response.body.should.have.property('message');

               done()
            })
        })
            
    })

    describe('POST /tweet/like/:id',()=>{
        it('It should like tweet',(done)=>{
            const userId = "6154356623e8870cb908810d";
            const tweetId = "61546eda14ef3cd863bb1c68";
            
            chai.request('http://localhost:3000')
            .put(`/tweet/like/${tweetId}`)
            .send(userId)
            .end((error,response)=>{
                
                response.should.have.status(200);
                response.body.should.be.a('object');
                response.body.should.have.property('tweetId');
                response.body.should.have.property('message');

               done()
            })
        })
            
    })

    describe('POST /tweet/dislike/:id',()=>{
        it('It should dislike tweet',(done)=>{
            const userId = "6154356623e8870cb908810d";
            const tweetId = "61546eda14ef3cd863bb1c68";

            chai.request('http://localhost:3000')
            .put(`/tweet/dislike/${tweetId}`)
            .send(userId)
            .end((error,response)=>{
                
                response.should.have.status(200);
                response.body.should.be.a('object');
                response.body.should.have.property('tweetId');
                response.body.should.have.property('message');

               done()
            })
        })
            
    })

    describe('POST /tweet/comment/:id',()=>{
        it('It should comment on tweet',(done)=>{
            const comment = {
                userId:"6154356623e8870cb908810d",
                comment:"Rampravesh you are good in nodejs."
            }
            const tweetId = "61546eda14ef3cd863bb1c68";
            chai.request('http://localhost:3000')
            .put(`/tweet/comment/${tweetId}`)
            .send(comment)
            .end((error,response)=>{
                
                response.should.have.status(200);
                response.body.should.be.a('object');
                response.body.should.have.property('commentId');
                response.body.should.have.property('message');

               done()
            })
        })
            
    })

    describe('POST /retweet',()=>{
        it('It should create retweet',(done)=>{
            const retweet = {
                userId:"6154356623e8870cb908810d",
                content:"Hello rampravesh. Welcome to the world of node.",
                isTweet:"6154356e23e8870cb9088111"
            }
            chai.request('http://localhost:3000')
            .post('/tweet')
            .send(retweet)
            .end((error,response)=>{
                
                response.should.have.status(200);
                response.body.should.be.a('object');
                response.body.should.have.property('tweetId');
                response.body.should.have.property('message');

               done()
            })
        })
            
    })
});
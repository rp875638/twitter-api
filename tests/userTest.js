const chai = require('chai');
const server = require('../app');
const chaiHttp = require('chai-http');


//Assertion style
chai.should();

chai.use(chaiHttp);

describe('User API',()=>{
    /*
    * Post route registser-user
    */
    describe('POST /register-user',()=>{
        it('It should register-user',(done)=>{
            const user = {
                username:"ram",
                password:"ram@123"
            }
            chai.request('http://localhost:3000')
            .post('/user/register-user')
            .send(user)
            .end((error,response)=>{
                
                response.should.have.status(200);
                response.body.should.be.a('object');
                response.body.should.have.property('userId');
                response.body.should.have.property('message');
               // response.body.should.be. 

               done()
            })
        })
            
    })

    describe('POST /login-user',()=>{
        it('It should login-user',(done)=>{
            const user = {
                username:"ram",
                password:"ram@123"
            }
            chai.request('http://localhost:3000')
            .post('/user/login-user')
            .send(user)
            .end((error,response)=>{
                
                response.should.have.status(200);
                response.body.should.be.a('object');
                response.body.should.have.property('userId');
                response.body.should.have.property('message');

               done()
            })
        })
            
    })

    //Test follow user
    describe('POST /follow-user',()=>{
        it('It should follow-user',(done)=>{
            const follow = {
                followerId:"6154356623e8870cb908810d",
                followingId:"6154356e23e8870cb9088111"
            }
            chai.request('http://localhost:3000')
            .put('/user/follow-user')
            .send(follow)
            .end((error,response)=>{
                
                response.should.have.status(200);
                response.body.should.be.a('object');
                response.body.should.have.property('follwer');
                response.body.should.have.property('following');

               done()
            })
        })
            
    })

    // Test for unfollow user
    describe('POST /unfollow-user',()=>{
        it('It should unfollow-user',(done)=>{
            const unfollow = {
                followerId:"6154356623e8870cb908810d",
                followingId:"6154356e23e8870cb9088111"
            }
            chai.request('http://localhost:3000')
            .put('/user/unfollow-user')
            .send(unfollow)
            .end((error,response)=>{
                
                response.should.have.status(200);
                response.body.should.be.a('object');
                response.body.should.have.property('follwer');
                response.body.should.have.property('following');

               done()
            })
        })
            
    })

})
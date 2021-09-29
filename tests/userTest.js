const chai = require('chai');
const server = require('../app');
const chaiHttp = require('chai-http');


//Assertion style
chai.should();

chai.use(chaiHttp);

describe('User API',()=>{
    before(function() {
        // runs before all tests in this file regardless where this line is defined.
    });

    after(function() {
        // runs after all tests in this file
    });

    beforeEach(function() {
        // runs before each test in this block
    });

    afterEach(function() {
        // runs after each test in this block
    });
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

    describe('POST /follow-user',()=>{
        it('It should follow-user',(done)=>{
            const user = {
                username:"ram",
                password:"ram@123"
            }
            chai.request('http://localhost:3000')
            .post('/user/follow-user')
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

    describe('POST /unfollow-user',()=>{
        it('It should unfollow-user',(done)=>{
            const user = {
                username:"ram",
                password:"ram@123"
            }
            chai.request('http://localhost:3000')
            .post('/user/unfollow-user')
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

})
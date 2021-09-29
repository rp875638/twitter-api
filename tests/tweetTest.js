const chai = require('chai');
const server = require('../app');
const chaiHttp = require('chai-http');


//Assertion style
chai.should();

chai.use(chaiHttp);

describe('User API',()=>{

    describe('GET /tweet/:id',()=>{
        it('It should get tweets',(done)=>{
            const user = {
                username:"ram",
                password:"ram@123"
            }
            chai.request('http://localhost:3000')
            .get('/tweet/:id')
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

    describe('POST /tweet',()=>{
        it('It should create tweet',(done)=>{
            const user = {
                username:"ram",
                password:"ram@123"
            }
            chai.request('http://localhost:3000')
            .post('/tweet')
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

    describe('DELETE /tweet/:id',()=>{
        it('It should delete tweet',(done)=>{
            const user = {
                username:"ram",
                password:"ram@123"
            }
            chai.request('http://localhost:3000')
            .delete('/tweet/:id')
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

    describe('POST /tweet/like/:id',()=>{
        it('It should like tweet',(done)=>{
            const user = {
                username:"ram",
                password:"ram@123"
            }
            chai.request('http://localhost:3000')
            .put('/tweet/like/:id')
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

    describe('POST /tweet/dislike/:id',()=>{
        it('It should dislike tweet',(done)=>{
            const user = {
                username:"ram",
                password:"ram@123"
            }
            chai.request('http://localhost:3000')
            .put('/tweet/dislike/:id')
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

    describe('POST /tweet//comment/:id',()=>{
        it('It should comment on tweet',(done)=>{
            const user = {
                username:"ram",
                password:"ram@123"
            }
            chai.request('http://localhost:3000')
            .put('/tweet//comment/:id')
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
});
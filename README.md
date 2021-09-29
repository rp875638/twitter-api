# Twitter-api

This is simple twitter backend api based upon nodejs, express and mongodb

## Installation

**npm install** :- It will install all dependencies of project

**npm start** :- It will start nodejs server

**npm test** :- It is use run unit test

## API endpoints

### USER API endpoints

**POST** http://localhost:3000/user/register-user for creating user

**POST** http://localhost:3000/user/login-user for login user

**PUT** http://localhost:3000/user/follow-user for following user

**PUT** http://localhost:3000/user/unfollow-user for unfollow user

### Tweet API endpoints

**GET** http://localhost:3000/tweet/:id for get all tweets of given userId.

**POST** http://localhost:3000/tweet for creating new tweet.

**DELETE** http://localhost:3000/tweet/:id for deleting tweet of given tweetId.

**PUT** http://localhost:3000/tweet/like/:id for linking the tweet of given tweetId

**PUT** http://localhost:3000/tweet/dislike/:id for disliking the tweet of tweetId

**PUT** http://localhost:3000/tweet/comment/:id for making comment on tweet

**POST** http://localhost:3000/tweet/retweet/:id for retweeting the tweet

## Features

- User creation
- User login
- User session using jasonwebtoken and cookies
- Making tweet
- Getting all tweet
- Deleting tweet
- Like the tweet
- Dislike the tweet
- Comment on tweet
- Retweet the tweet
- Unit testing 

## Tech stack

- Nodejs
- Express
- MongoDb

## Useful links

[Doumentation](https://github.com/rp875638/twitter-api#readme)

[Repository](https://github.com/rp875638/twitter-api)

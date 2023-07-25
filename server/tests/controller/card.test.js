const request = require('supertest');
const express = require('express');
const card = require('../../controller/card.js');
const { getAllCards } = require('../../controller/card.js');
const mongoose = require('mongoose');
const app = require('../../app.js');

describe('getAllCards', () => {
  beforeEach( async ()=> {
    const app = await mongoose.connect(
       'mongodb+srv://m001-student:m001-mongodb-basics@cluster0.lvxam3o.mongodb.net',
       { useNewUrlParser: true, useUnifiedTopology: true }
    );
    card.getAllCards;
  });

  afterEach(async () => {
    await mongoose.disconnect();
  });

  it('should return all cards', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  }, 10000);

  it('should create a new card', async () => {
        const card = {
            name: 'NewCard',
            description: 'Description for New Card',
            price: '30',
            company: 'New Company',
            image: 'https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg',
        };
        const res = await request(app).post('/cards').send(card);
        expect(res.statusCode).toBe(201);
    });

    it('should delete a new card', async () => {
        const res = await request(app).delete('/cards/newCard');
        expect(res.statusCode).toBe(200);
    });
});
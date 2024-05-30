const axios = require("axios");
const { MongoClient, ObjectId } = require('mongodb');
const cors = require('cors');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'esercizio1';
const collectionName = 'battery';


let intervalID = setInterval(() => {
  const res = fetch(url);
  async function myCallback(collectionName) {
    const batteryValue = Math.random(101)*1;
  }
}, 10000);


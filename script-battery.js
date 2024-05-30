const axios = require("axios");
const { MongoClient, ObjectId } = require('mongodb');
const cors = require('cors');

const url = 'mongodb://localhost:27017/devices/';
const client = new MongoClient(url);
const dbName = 'esercizio1';
const collectionName = 'battery';


let intervalID = setInterval(() => {
  const res = fetch(url);
}, 10000);







async function myCallback(collectionName) {
  const batteryValue = Math.random(0-100)+1;
}




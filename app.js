const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'mediaList';

const media = require('./repos/mediaList');
const data = require('./data/media.json');

async function main() {
  const client = new MongoClient(url);
  await client.connect();

  const result = await media.loadData(data);
  console.log(result.insertedCount);

  const admin = client.db(dbName).admin();
  // console.log(await admin.serverStatus());
  console.log(await admin.listDatabases());
}

main();

const { MongoClient } = require('mongodb');

function mediaList() {
  const url = 'mongodb://localhost:27017';
  const dbName = 'mediaList';

  return function loadData(data) {
    return new Promise(async (resolve, reject) => {
      const client = new MongoClient(url);

      try {
        await client.connect();
        const db = client.db(dbName);

        result = await db.collection('newspapers').insertMany(data);
        // result is the insertion of the data
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  };
}

module.exports = mediaList();

const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'https://sytw-tania77.c9users.io';

const client = new pg.Client(connectionString);
client.connect();
const query = client.query(
  'CREATE TABLE pac(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
query.on('end', () => { client.end(); });

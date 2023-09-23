
import express from 'express';

import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';

import { create_insertOne, create_insertMany } from './services/create';
import { read_findOne, read_find } from './services/read';
import { update_updateOne, update_updateMany } from './services/update';
import { delete_deleteOne, delete_deleteMany } from './services/delete';

const app = express();

const port = process.env.PORT;
console.log("port: ", port)

app.use(cors({ credentials: true, origin: `http://localhost:${port}` }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).send('API is up and running!');
});

app.post('/create_insertOne', async (req, res) => {
  console.log("req.body inside /create_insertOne: ", req.body)
  try {
    const result = await create_insertOne(req.body);
    console.log("🚀 ~ file: app.ts ~ line 32 ~ app.post ~ result", result);
    if (result || result==0) {
      res.status(200).send('Data is written to DB');
    }
    else {
      res.status(500).send('Data is not written to DB');
    }
  } catch (error) {
    console.log("error while creating data: ", error)
    res.status(500).send('Data is not written to DB');
  }
});

app.post('/create_insertMany', async (req, res) => {
  console.log("req.body inside /create_insertMany: ", req.body)
  try {
    const result = await create_insertMany(req.body);
    if (result) {
      res.status(200).send('Data is written to DB');
    }
    else {
      res.status(500).send('Data is not written to DB');
    }
  } catch (error) {
    console.log("error while creating data: ", error)
    res.status(500).send('Data is not written to DB');
  }
});

app.post('/read_findOne', async (req, res) => {
  console.log("req.body inside /read_findOne: ", req.body)
  try {
    const result = await read_findOne(req.body);
    console.log("🚀 ~ file: app.ts ~ line 56 ~ app.post ~ result", result)
    if (result) {
      res.status(200).send({message: 'Data found in DB', responseData: result});
    }
    else {
      res.status(500).send('Data wasnt available in DB');
    }
  } catch (error) {
    console.log("error while searching for data: ", error)
    res.status(500).send('Data cant be searched in DB');
  }
});

app.post('/read_find', async (req, res) => {
  console.log("req.body inside /read_find: ", req.body)
  try {
    const result = await read_find(req.body);
    // console.log("🚀 ~ file: app.ts ~ line 56 ~ app.post ~ result", result)
    if (result) {
      res.status(200).send({message: 'Data found in DB', responseData: result});
    }
    else {
      res.status(500).send('Data wasnt available in DB');
    }
  } catch (error) {
    console.log("error while searching for data: ", error)
    res.status(500).send('Data cant be searched in DB');
  }
});

app.post('/update_updateOne', async (req, res) => {
  console.log("req.body inside /update_updateOne: ", req.body)
  try {
    const result = await update_updateOne(req.body);
    // console.log("🚀 ~ file: app.ts ~ line 56 ~ app.post ~ result", result)
    if (result == 0) {
      res.status(200).send('Data updated in DB');
    }
    else {
      res.status(500).send('Data wasnt available in DB');
    }
  } catch (error) {
    console.log("error while searching for data: ", error)
    res.status(500).send('Data cant be searched in DB');
  }
});

app.post('/update_updateMany', async (req, res) => {
  console.log("req.body inside /update_updateMany: ", req.body)
  try {
    const result = await update_updateMany(req.body);
    // console.log("🚀 ~ file: app.ts ~ line 56 ~ app.post ~ result", result)
    if (result == 0) {
      res.status(200).send('Data updated in DB');
    }
    else {
      res.status(500).send('Data wasnt available in DB');
    }
  } catch (error) {
    console.log("error while searching for data: ", error)
    res.status(500).send('Data cant be searched in DB');
  }
});

app.post('/delete_deleteOne', async (req, res) => {
  console.log("req.body inside /delete_deleteOne: ", req.body)
  try {
    const result = await delete_deleteOne(req.body);
    // console.log("🚀 ~ file: app.ts ~ line 56 ~ app.post ~ result", result)
    if (result == 0) {
      res.status(200).send('Data deleted in DB');
    }
    else {
      res.status(500).send('Data wasnt available in DB');
    }
  } catch (error) {
    console.log("error while searching for data: ", error)
    res.status(500).send('Data cant be searched in DB');
  }
});

app.post('/delete_deleteMany', async (req, res) => {
  console.log("req.body inside /delete_deleteMany: ", req.body)
  try {
    const result = await delete_deleteMany(req.body);
    // console.log("🚀 ~ file: app.ts ~ line 56 ~ app.post ~ result", result)
    if (result == 0) {
      res.status(200).send('Data deleted in DB');
    }
    else {
      res.status(500).send('Data wasnt available in DB');
    }
  } catch (error) {
    console.log("error while searching for data: ", error)
    res.status(500).send('Data cant be searched in DB');
  }
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

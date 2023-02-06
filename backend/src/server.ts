require('dotenv').config();
import express from 'express';
import cors from 'cors';
import { connect_to_db } from './database/db';

const app = express();
const PORT: string | number = process.env.PORT || 8000;

connect_to_db();

app.use(express.json());
app.use(cors());


app.listen(PORT, () => {
  console.log(`Server in ${process.env.NODE_ENV} http://localhost:${PORT}`);
});
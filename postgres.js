import pg from "pg"
const { Pool }= pg
import * as dotenv from 'dotenv'
dotenv.config() 



export const pool = new Pool({
    database: process.env.PG_DB,
    user: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
    host: process.env.PG_HOST
  })
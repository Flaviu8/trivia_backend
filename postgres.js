import pg from "pg"
const { Pool }= pg
import * as dotenv from 'dotenv'
dotenv.config() 



export const pool = new Pool({
    database: "btrosz3r4flacazjbc5u",
    user: "ue56sckblr5cdfagjhnh",
    password: "BSGfqkZwAZpHaIxJFH6yP3Xmr5r59A",
    port: 5432,
    host: "btrosz3r4flacazjbc5u-postgresql.services.clever-cloud.com"
  })
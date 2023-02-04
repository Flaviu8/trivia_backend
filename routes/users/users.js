import  express from "express"

import { pool }  from "../../postgres.js"
import { v4 as uuidv4 } from 'uuid';
import  { CreateUser } from "./controllers.js"


const router = express.Router()

router.get('/', (req, res) => {
  pool.query(`SELECT * FROM users`, (error, result) => {
    if (error) 
      throw error

    res.status(200).send( result.rows );
  });
  })

router.get('/', (req, res) => {
  const userId = req.params.id;
  pool.query(`SELECT * FROM users WHERE id = '${userId}'`, (error, result) => {
    if (error) {
      result.status(500).send({ message: error.message });
      return;
    }

    res.status(200).send({ users: result.rows });
  });
  })


  router.post('/', (req, res) => {
       const { username } = req.body
       const newUser = {id: uuidv4(), username}

       pool.query(CreateUser, [ newUser.id, newUser.username ], (error, result)=> {
        if (error) {
          res.status(500).send({ message: error.message });
          return;
        }
        res.status(201).send({ message: 'User created', user: newUser });
      }
    )
  })
    
  
        


 export default router

  

import  express from "express"
import { pool }  from "../../postgres.js"
import { v4 as uuidv4 } from 'uuid';
import  { CreateAnswer } from "../users/controllers.js"


const router = express.Router()

router.get('/', (req, res) => {
  pool.query(`SELECT * FROM answers`, (error, result) => {
    if (error) 
      throw error

    res.status(200).send( result.rows );
  });
  })

router.get('/', (req, res) => {
  const answerId = req.params.id;
  pool.query(`SELECT * FROM answers WHERE id = '${answerId}'`, (error, result) => {
    if (error) {
      result.status(500).send({ message: error.message });
      return;
    }

    res.status(200).send({ answers: result.rows });
  });
  })


  router.post('/', (req, res) => {
       const { answers } = req.body
       const newAnswers = {id: uuidv4(), answers}

       pool.query(CreateAnswer, [ newAnswers.id, newAnswers.answers ], (error, result)=> {
        if (error) {
          res.status(500).send({ message: error.message });
          return;
        }
        res.status(201).send({ message: 'Answers created', answers: newAnswers });
      }
    )
  })

  export default router
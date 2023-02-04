import  express from "express"
import { pool }  from "../../postgres.js"
import { v4 as uuidv4 } from 'uuid';
import  { CreateQuestions } from "../users/controllers.js"


const router = express.Router()

router.get('/', (req, res) => {
  pool.query(`SELECT * FROM questions`, (error, result) => {
    if (error) 
      throw error

    res.status(200).send( result.rows );
  });
  })

router.get('/', (req, res) => {
  const questionId = req.params.id;
  pool.query(`SELECT * FROM questions WHERE id = '${questionId}'`, (error, result) => {
    if (error) {
      result.status(500).send({ message: error.message });
      return;
    }

    res.status(200).send({ questions: result.rows });
  });
  })


  router.post('/', (req, res) => {
       const { questions } = req.body
       const newQuestion = {id: uuidv4(), questions}

       pool.query(CreateQuestions, [ newQuestion.id, newQuestion.questions ], (error, result)=> {
        if (error) {
          res.status(500).send({ message: error.message });
          return;
        }
        res.status(201).send({ message: 'Question created', questions: newQuestion });
      }
    )
  })

  export default router
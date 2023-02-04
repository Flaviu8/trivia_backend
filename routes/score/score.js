import  express from "express"
import { pool }  from "../../postgres.js"
import { v4 as uuidv4 } from 'uuid';
import  { CreateScore } from "../users/controllers.js"


const router = express.Router()

router.get('/', (req, res) => {
  pool.query(`SELECT * FROM scores`, (error, result) => {
    if (error) 
      throw error

    res.status(200).send( result.rows );
  });
  })

router.get('/', (req, res) => {
  const scoreId = req.params.id;
  pool.query(`SELECT * FROM scores WHERE id = '${scoreId}'`, (error, result) => {
    if (error) {
      result.status(500).send({ message: error.message });
      return;
    }

    res.status(200).send({ score: result.rows });
  });
  })


  router.post('/', (req, res) => {
       const { final_score } = req.body
       const newScore = {id: uuidv4(), final_score}

       pool.query(CreateScore, [ newScore.id, newScore.final_score ], (error, result)=> {
        if (error) {
          res.status(500).send({ message: error.message });
          return;
        }
        res.status(201).send({ message: 'Score created', scores: newScore });
      }
    )
  })
    
  
        


 export default router
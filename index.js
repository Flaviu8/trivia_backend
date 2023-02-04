import  express from "express"
import bodyParser from 'body-parser'
import  users  from './routes/users/users.js'
import  questions  from './routes/question/question.js'
import  score  from './routes/score/score.js'
import  answers  from './routes/answers/answers.js'
import  UsersById  from './routes/users/users.js'
import  QuestionsById  from './routes/question/question.js'
import  ScoreById  from './routes/score/score.js'
import  AnswerById  from './routes/answers/answers.js'


const port = 3008;
const app = express();
app.use(bodyParser.json())



app.listen(port, () => {
  console.log(`Trivia listening at http://localhost:${port}`);
});


app.use('/users', users)
app.use('/questions', questions)
app.use('/score', score)
app.use('/answers', answers)
app.use('/users/:id', UsersById)
app.use('/questions/:id', QuestionsById)
app.use('/score/:id', ScoreById)
app.use('/answers/:id', AnswerById)


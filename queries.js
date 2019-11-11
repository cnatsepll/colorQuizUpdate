


const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'color_quiz',
  password: 'admin',
  port: 5432,
})



const getTopAnswersWhite = (request, response) => {
     pool.query('select count(question_word),color_type_key, question_word, answer_value from answer join result on result.user_id = answer.user_id where white_counter > blue_counter and white_counter > black_counter and white_counter > red_counter and white_counter > green_counter and answer_value > 10 group by question_word, color_type_key, answer_value order by count desc limit 100;', (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json(results.rows)
        })
}




module.exports = {
    getTopAnswersWhite:getTopAnswersWhite
}
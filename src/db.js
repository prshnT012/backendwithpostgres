import dotenv from 'dotenv'
dotenv.config({
    
})
import pkg from 'pg';
const {Pool}  = pkg;

console.log(process.env.USERDB + " " + process.env.PASSWORD + " " + process.env.DATABASE + " " + process.env.HOST + " " + process.env.PORT)

const pool = new Pool({
    user : process.env.USERDB,
    host : process.env.HOST,
    database : process.env.DATABASE,
    password : process.env.PASSWORD,
    port : 5432
});

export default pool;
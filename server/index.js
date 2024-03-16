import express from "express"
import cors from "cors";
import mysql from "mysql"

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "bookMS"
})

app.get('/', (req, res)=>{
    const sql = "SELECT * FROM book";
    db.query(sql, (err, data)=>{
        if(err){
            return res.json({Error: "Error"})
        }
        else{
            return res.json(data);
        }
    })
})

app.post('/create', (req, res)=>{
    const sql = "INSERT INTO book (publisher, name, date) VALUES(?)";
    const values = [
        req.body.publisher,
        req.body.name,
        req.body.date
    ]

    db.query(sql, [values], (err, data)=>{
        if(err){
            return res.json({Error: "Error"})
        }
        else{
            return res.json(data);
        }
    })
})

app.put('/update/:id', (req, res)=>{
    const sql = "UPDATE book SET publisher = ?, name = ?, date = ? where id = ?";
    
    const values = [
        req.body.publisher,
        req.body.name,
        req.body.date
    ]
    const id = req.params.id;

    db.query(sql, [...values, id], (err, data)=>{
        if(err){
            return res.json({Error: "Error"})
        }
        else{
            return res.json(data);
        }
    })
})

app.delete('/delete/:id', (req, res)=>{
    const sql = "DELETE FROM book WHERE id = ?";
    const values = [
        req.body.publisher,
        req.body.name,
        req.body.date
    ]
    const id = req.params.id;
    db.query(sql, [id], (err, data)=>{
        if(err){
            return res.json({Error: "Error"})
        }
        else{
            return res.json(data);
        }
    })
})

app.listen(3000, ()=>{
    console.log("server is running");
})
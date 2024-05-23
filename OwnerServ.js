const mysql = require("mysql");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Horsedatabase",
    database: "Horseschema"

});

app.get('/', (req, res)=>{
    return res.json("OwnerServ Success")
});

app.post('/Create', (req, res)=>{
    const sql = "INSERT INTO Owners (`FirstName`, `LastName`, `Email`, `Address`) VALUES (?)";
    const values = [
        req.body.FirstName,
        req.body.LastName,
        req.body.Email,
        req.body.Address
    ]
    db.query(sql, [values], (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    })
})

app.put('/Update/:OwnerID', (req, res)=>{
    const sql = "Update Owners set `FirstName` = ?, `LastName` = ?, `Email` = ?, `Address` = ?, where OwnerID = ?";
    const id = req.body.OwnerID
    const values = [
        req.body.FirstName,
        req.body.LastName,
        req.body.Email,
        req.body.Address
    ]
    db.query(sql, [...values, id], (err, data) => {
        if(err) return res.json(id);
        return res.json(data);
    })
})

app.get('/Owners', (req, res)=>{
    const sql = "SELECT * FROM Owners";
    db.query(sql, (err, data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.listen(8082, ()=>{
    console.log("listening");
})
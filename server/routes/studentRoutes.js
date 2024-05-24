import express from 'express';
import db from '../config/db.js';

const router = express.Router();

// 1. To get students details from DB 
router.get('/', (req, res) => {
    const sql = "SELECT * FROM student";
    db.query(sql, (err, data) => {
      if (err) {
        res.status(500).json(`Error: ${err.message}`);
        return;
      }
      res.json(data);
    });
  });
  
  // 2. To post/insert the student details into DB
  router.post('/create', (req, res) => {
    const sql = `INSERT INTO student (
                   first_name, 
                   last_name, 
                   location, 
                   email, 
                   dob, 
                   education, 
                   about ) VALUES (?, ?, ?, ?, ?, ?, ?)`;
  
    const values = [
      req.body.first_name, 
      req.body.last_name, 
      req.body.location, 
      req.body.email, 
      req.body.dob, 
      req.body.education, 
      req.body.about
    ];
  
    db.query(sql, values, (err, data) => {
      if (err) {
        res.status(500).json(`Error: ${err.message}`);
        return;
      }
      res.json(data);
    });
  });
  
  // 3. To update/edit the student details from 'DB' based on ID
  router.put('/update/:id', (req, res) => {
    const sql = `UPDATE student SET
                   first_name = ?, 
                   last_name = ?, 
                   location = ?, 
                   email = ?, 
                   dob = ?, 
                   education = ?, 
                   about = ? WHERE id = ?`;
  
    const values = [
      req.body.first_name, 
      req.body.last_name, 
      req.body.location, 
      req.body.email, 
      req.body.dob, 
      req.body.education, 
      req.body.about,
      req.params.id
    ];
  
    db.query(sql, values, (err, data) => {
      if (err) {
        res.status(500).json(`Error: ${err.message}`);
        return;
      }
      res.json(data);
    });
  });
  
  // 4. To delete the student details from 'DB' based on ID
  router.delete('/delete/:id', (req, res) => {
    const sql = `DELETE FROM student WHERE id = ?`;
    const id = req.params.id;
  
    db.query(sql, id, (err, data) => {
      if (err) {
        res.status(500).json(`Error: ${err.message}`);
        return;
      }
      res.json(data);
    });
  });

  // 5. To get the student details from 'DB' based on ID for showing update page
  router.get('/getrecord/:id', (req, res) => {
    const id = req.params.id;
    const sql = `SELECT * FROM student WHERE id = ?`;
  
    db.query(sql, id, (err, data) => {
      if (err) {
        res.status(500).json(`Error: ${err.message}`);
        return;
      }
      res.json(data);
    });
  });

  export default router;

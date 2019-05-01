const express = require('express')
const router = express.Router();

const db = require('../database')

router.get('/add', (req, res) => {
    res.render('links/add')
});

//add links
router.post('/add', async (req, res)=>{
    const { title, url, description } = req.body;
    const newlink = {
        title,
        url,
        description
    };
    await db.query('INSERT INTO links set ?', [newlink]);
    console.log(req.body);
    res.redirect('/links');
});

//consulta links
router.get('/', async (req, res)=>{
    const links = await db.query('SELECT * FROM links');
    console.log(links);
    res.render('links/list', {links})
});

//deleta links
router.get('/delete/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM links WHERE ID = ?', [id]);
    res.redirect('/links');
});

module.exports = router 
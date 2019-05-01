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
router.get('/delete/:id', async (req, res) => {
    const { id } = req.params;
    await db.query('DELETE FROM links WHERE ID = ?', [id]);
    res.redirect('/links');
});

//editando links
router.get('/edit/:id', async (req, res) =>{
    const { id } = req.params;
    const links =  await db.query('SELECT * FROM links WHERE id = ?', [id]);
    res.render('links/edit', {link: links[0]});
});

router.post('/edit/:id', async (req, res) =>{
    const { id } = req.params;
    const { title, url, description } = req.body;
    const newlink = {
        title,
        url,
        description
    };
    await db.query('UPDATE links set ? WHERE id = ?', [newlink, id]);
    res.redirect('/links');
});

module.exports = router 
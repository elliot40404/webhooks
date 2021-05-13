const app = require('express')()
// const { json } = require('express')
const low = require('lowdb')
// const cors = require('cors')
// app.use(json())
// app.use('*', cors())
// * DB
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)
db.defaults({ posts: [], user: {}, count: 0 })
    .write()
//  * Routes
app.get('/api', (req, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate')
    res.json({msg: 'HELLO'})
})

app.get('/api/query', (req, res) => {
    db.get('posts')
        .push({ id: 1, title: 'lowdb is awesome' })
        .write()
    res.sendStatus(200)
})

app.post('/api/db', (req, res) => {
    const data = db.getState()
    res.send(data)
});

module.exports = app

// export default (req, res) => {
//     if (req.method == 'GET') {
//         res.json({ msg: 'hello' });
//     } else {
//         const { name, age } = req.body;
//         res.send({ staus: "user created", name, age })
//     }
// }
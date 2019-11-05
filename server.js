const express = require('express');
const db = require('./data/dbConfig.js');

//import router
const accountsRouter = require('./data/accounts-router');

const server = express();
server.use(express.json());

//api
server.use('/api/accounts', accountsRouter);

server.get('/', (req, res) => {
    res.send('<h2>Testing</h2>');
});

//stretch
// server.get('/', (req, res) => {
//     const query = db('accounts');
//     const { limit, sortby, sortdir } = req.query;
//     if (limit) {
//         query.limit(limit);
//     }
//     console.log(limit);

//     if (sortby) {
//         query.orderBy(sortby);
//     }

//     if (sortdir) {
//         query.sortdir(sortdir);
//     }

//     query

//         .then(account => {
//             res.status(200).json(account);
//         })

//         .catch(error => {
//             res.status(400).json({ error: 'server error' });
//         });
// });

// server.post('/', (req, res) => {
//     const post = req.body;

//     db('accounts')
    
//     .insert(post, 'id')

//     .then(post => {
//         res.status(200).json(post);
//     });
// });

// server.put('/:id', (req, res) => {
//     db('accounts')

//     .where('id', '=', req.params.id)
    
//     .update(req.body)
    
//     .then(newPut => {
//         res.status(200).json(newPut);
//     })
    
//     .catch(error => {
//         res.status(500).json({ error: 'server error' });
//     });
// });

// server.delete('/:id', (req, res) => {
//     db('accounts')
    
//     .where('id', '=', req.params.id)
    
//     .del()
    
//     .then(test => {
//         res.status(200).json(test);
//     })
    
//     .catch(error => {
//         res.status(500).json({ error: 'server error' });
//     });
// });


module.exports = server;
const express = require ('express');
const bodyParser = require ('body-parser');
const cors = require ('cors');
const ctr = require('./controller')

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.post('/api/app/todo', ctr.create)
app.get('/api/news', ctr.readNews)
app.delete('/api/delete/:id', ctr.delete)
app.put('/api/completed/:id', ctr.updateComplete)


const PORT = 3000;

app.listen(PORT, () => console.log('I\'m listening... ' + PORT));            
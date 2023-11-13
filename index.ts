import express from 'express';
import route from './mainRoute';

const app = express()
const port = 4000

import { engine } from 'express-handlebars';
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
import path from 'path';


app.use( express.static('/static'))
app.use('/', route);

app.listen(port, () => {
    console.log(`Express app listening on port ${port}`)
  })

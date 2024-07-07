const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
const route = require('./routes/index');

const app = express();
const port = 3000;

    app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
        app.use(express.json());

// app.use(morgan('combined'))

     app.engine('hbs', engine({ extname: '.hbs' }));
    app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

route(app);

app.listen(port, () => {
    console.log(`listening at http://127.0.0.1:${port}`);
});

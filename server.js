const express = require('express');
const graphqlHTTP = require('express-graphql');
const app = express();
const morgan = require('morgan');
const schema = require('./schema.js');

app.use(morgan('tiny'));
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
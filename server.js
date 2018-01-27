// @flow
import { join } from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose, { Schema } from 'mongoose';
import config from './config';
import morgan from 'morgan';
import chalk from 'chalk';
import compression from 'compression';
import routes from './rest';

const app = express();

app.use(compression());
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * @name static
 */
if (process.env.NODE_ENV === 'production') {
    const distDir = __dirname + "/dist/";
    app.use(express.static(distDir));
}

/**
 * @name REST
 */
app.use('/api', routes);

/**
 * @name server
 */
const server = app.listen(process.env.PORT, () => {
  const PORT = process.env.PORT;
  console.log(chalk.hex('#009688')(' [*] App: Bootstrap Succeeded.'));
  console.log(chalk.hex('#009688')(` [*] Host: http://localhost/${PORT}/.`));
});

/**
 * @name Mongo
 */
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.once('open', () => console.log(chalk.hex('#009688')(' [*] Mongo: Connection Succeeded.')));
mongoose.connection.on('error', err => console.error(err));



/*  "/api/membership"
 *    GET: finds all membership
 *    POST: creates a new contact
 */




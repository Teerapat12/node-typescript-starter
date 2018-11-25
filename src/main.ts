'use strict';
import express from 'express';
import PORT from './config';
import {HtmlConverter} from './route';

const app: express.Application = express();

// Mount the WelcomeController at the /welcome route
app.use('/welcome', HtmlConverter);

// Serve the application at the given port
app.listen(PORT, () => {
    // Success callback
    console.log(`Listening at http://localhost:${PORT}/`);
});

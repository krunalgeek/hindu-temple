import express from 'express';

import user from './users/user';

const router = express.Router();

router.use('/users', user);

export default router;
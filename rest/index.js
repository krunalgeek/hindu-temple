import express from 'express';

import user from './users/user';
import PriestServices from './priestservice/priestservice';

const router = express.Router();

router.use('/', user, PriestServices);

// router.use('/priestservices', user);

export default router;
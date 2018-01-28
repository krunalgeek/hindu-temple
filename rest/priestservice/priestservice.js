import { Router } from 'express';
import { PriestServices } from './priestservice-schema';

const router = Router();

/**
 * @name Mongo
 */

/**
 * @name Priest Service - get a PriestServices
 * @param {string} _id - get a item by ID
 * @param {string} text - search for text in PriestServices
 * @return {Array<PriestServices>}
 *
 * @example GET /priestservices
 * @example GET /priestservices?_id=${_id}
 * @example GET /priestservices?text=${text}
 */
router.get('/priestservices', async (req, res, next) => {
  try {
    const { _id, text } = req.query;
    const find = {};

    if (_id) find._id = { _id };
    if (text) find.text = { $regex: text, $options: 'i' };

    const data = await PriestServices.find(find).exec();

    res.json(data);
  } catch (err) {
    next(err);
  }
});

/**
 * @name count - get a PriestServices length
 * @return {number}
 *
 * @example GET /__/PriestServices/count
 */
router.get('/priestservices/count', async (req, res, next) => {
  try {
    const data = await PriestServices.count().exec();
    res.json(data);
  } catch (err) {
    next(err);
  }
});



/**
 * @name create - create a item
 *
 * @example POST /__/PriestServices
 */
router.post('/priestservices', async (req, res, next) => {
  try {
    if (!req.body) {
      res.status(400);
      res.json({ message: 'Please provide service object' });
      return;
    }

    const priestServices = await new PriestServices(req.body);
    const message = await priestServices.save().then(() => 'Priest Services Request Saved');

    res.json({ message });
  } catch (err) {
    next(err);
  }
});

/**
 * @name update - update a item
 *
 * @example PUT /__/PriestServices/${id}
 */
router.put('/priestservices/:id', async (req, res, next) => {
  try {
    const message = await PriestServices
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(() => 'PriestServices updated');

    res.json({ message });
  } catch (err) {
    next(err);
  }
});

/**
 * @name delete - remove a item
 *
 * @example DELETE /__/PriestServices/${id}
 */
router.delete('/priestservices/:id', async (req, res, next) => {
  try {
    const message = await PriestServices
      .findByIdAndRemove(req.params.id)
      .then(() => 'PriestServices deleted');

    res.json({ message });
  } catch (err) {
    next(err);
  }
});

/**
 * @name delete-many
 */
// router.delete('/', () => {
//   PriestServices.deleteMany({ isCheck: true }).then(() => 'PriestServices deleted');
// });

export default router;
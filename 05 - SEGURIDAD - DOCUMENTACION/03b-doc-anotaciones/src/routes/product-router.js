import {Router} from 'express'
import { productController } from '../controllers/product-controller.js'

const router = Router()

/**
 * @swagger
 * /products:
 *  get:
 *      summary: Obtener el listado de productos.
 *      tags: [Products]
 *      responses:
 *          200:
 *              description:
 *              content:
 *  post:
 */
router.route('/')
    .get(productController.getAll)
    .post(productController.create)

router.route('/:id')
    .get(productController.getById)
    .put(productController.update)
    .delete(productController.delete)

export default router;
import express from 'express';
import { 
  paginaInicio, 
  paginaNosotros, 
  paginaTestimoniales, 
  paginaViaje, 
  paginaDetalleViaje 
} from '../controllers/paginasController.js';
import {
  guardarTestimonial
} from '../controllers/testimonialController.js'

//Usamos la misma instancia de express pero extendemos su router
const router = express.Router();

router.get('/', paginaInicio);
router.get('/nosotros', paginaNosotros);
router.get('/viajes', paginaViaje);
router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', guardarTestimonial);


export default router;
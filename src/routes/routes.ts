import { Router } from 'express';

import * as ApiController from '../controllers/ApiController'

const router = Router();

router.get("/saudacao", ApiController.apiSaudacao)

export default router;



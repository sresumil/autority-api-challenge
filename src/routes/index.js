import { Router } from 'express';

import * as homeController from '@/controllers/home';

const router = Router();

router.get('/', homeController.index);

router.get('/health', homeController.healthCheck);

router.get('/tasks', homeController.getTasks);

router.get('/task/:id', homeController.getTask);

router.post('/task', homeController.createTask);

router.put('/task/:id', homeController.updateTask);

router.delete('/task/:id', homeController.deleteTask);


export default router;

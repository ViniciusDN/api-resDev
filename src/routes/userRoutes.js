import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveria existir
// router.get('/', userController.index); // Lista usuarios
// router.get('/:id', userController.show); // Lista usuario

router.post('/', loginRequired, userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
index => lista todos usuarios => GET
store or create => cria um novo usuario => POST
delete => apaga um usuario => DELETE
show => mostra um usuario => GET
update => atualiza um usuário => PATCH ou PUT
*/

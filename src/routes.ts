import { Router } from "express";
import { User } from "./controllers/User";

const router = Router();

const user = new User();

//Rota para criar user
router.post("/user", user.create);

//Rota para listar user
router.get("/users", user.list);

//Rota para atualizar
router.put("/user/:id", user.update);

//Rota para deletar
router.delete("/user/:id", user.delete);

export { router };

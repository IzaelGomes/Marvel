import  express from "express";
import { UserController } from "./controllers/user.controller.js";

const app = express();
app.use(express.json())

const userController = new UserController()

app.post("/users", (request, response) => {
    //CHAMA O NOSSO CONTROLADOR QUE VAI SALVAR O USUÁRIO
    console.log(request.body)

    return userController.handle(request, response);
})


app.listen(3002, () => console.log("server is running"))
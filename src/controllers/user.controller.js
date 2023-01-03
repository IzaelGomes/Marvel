import { CreateUserService } from "../services/create.user.server.js"

class UserController {
    handle(request, response){
        //CHAMAR A CAMADA DE SERVIÇO
        const { body } = request;

        try{
            const createUserService = new CreateUserService;
            const result = createUserService.execute(body);
            console.log("result em controller"+ result)
            return response.json(result);
    
        }catch (err){
            return response.status(400).json({
                err:err.message
            })
        }

    }
}


export {UserController}

//CAMADA NO QUAL VAI CONTER AS VALIDAÇÕES

import  UserRepository  from "../repositories/user.repository.js"

class CreateUserService{
    execute(data){

         /*
        USERNAME
        NAME
        ID
        */

        //CHAMAR O REPOSITÓRIO
        
        if(!data.sencondName){
            throw new Error("Username é obrigatório")
        }

        const userRepository =  UserRepository

        //VERIFICAR SE USARNAME EXISTE NO BANCO DE DADOS
        
          const existUser =  userRepository.findByUserNamer(data.name)
           .then((res) =>{
             if(data.name == res.name){
            return  console.log("usuário já existente")
             }
           }).catch(err => console.log(err))


        //SALVA O USUÁRIO
        return userRepository.save(data)
    
        
    }
}


export {CreateUserService}
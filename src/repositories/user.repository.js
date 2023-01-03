import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UserRepository {
  //SIMULA UMA CONSULTA NO BANCO
  //
   async findByUserNamer(username){
            // SELECT * FROM USERS WHERE USERNAME = '' LIMIT 1
            
          const userExists = await prisma.user.findFirst({
            where:{ 
              name: username
            }
          })

          console.log(userExists)
          
          return userExists
  
   }

  async save(user) {
    // INSERT INTO USERS (USERNAME, NAME) VALUES(''. '')
    try {
      const users = await prisma.user.create({
        data: {
          name: user.name,
          sencondName: user.sencondName,
        },
      });
      console.log("usuário criado com sucesso");

      return users;
    } catch (err) {
      throw new Error(err);
    }
  }
}

export default new UserRepository();

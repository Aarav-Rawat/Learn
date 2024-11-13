import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();


async function insertUser(username: string, password: string, firstName:string, lastName:string, email:string){
  const response = await prisma.user.create({
        data:{
            username,
            password,
            firstName,
            lastName,
            email,
        }
    })

}

async function getTodo(userId: number){
    const response = await prisma.todo.findMany({
        where:{
             userId: userId
        }
    })

    console.log(response);
}

async function getTodoUserDetails(userId: number){
    const response = await prisma.todo.findMany({
        where:{
             userId: userId
        },
        select: {
            id: true,
            title: true,
            description: true,
            user: true
        }
    })

    console.log(response);
}


getTodoUserDetails(1);

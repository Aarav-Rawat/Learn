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

    console.log(response);
}

insertUser('aar42av','aa53rav','aa53rav',
    'rawat53','aarav53@gmail.com');
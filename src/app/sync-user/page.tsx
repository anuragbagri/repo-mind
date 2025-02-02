import { db } from "@/server/db";
import { auth, clerkClient } from "@clerk/nextjs/server"
import { notFound, redirect } from "next/navigation";



const SyncUser = async() => {
    const { userId }= await auth();    
    if(!userId){
        throw new Error('user not found')
    }
    const client = await clerkClient();
    const user = await client.users.getUser(userId);

    if(!user.emailAddresses[0]?.emailAddress){
        return notFound();
    }   

    await db.users.upsert({
        where : {
            email : user.emailAddresses[0]?.emailAddress ?? ""
        },
        update : {
            imageUrl : user.imageUrl,
            firstname : user.firstName,
            lastname : user.lastName
        },
        create : {
            id : userId,
            email : user.emailAddresses[0]?.emailAddress,
            imageUrl : user.imageUrl,
            firstname : user.firstName,
            lastname : user.lastName
        }
    })
    return redirect('/dashboard')
}

export default SyncUser
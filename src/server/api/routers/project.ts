import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";


export const projectRouter = createTRPCRouter({
    createProject : publicProcedure.input(
        z.object({
            name : z.string(),
            githubUrl : z.string(),
            githubToken : z.string()
        })
    ).mutation(async  ({ctx, input}) {
        console.log('input' , input)
        return true
    })
})
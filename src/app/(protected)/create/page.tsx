"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import { useForm } from 'react-hook-form'


type FormInput = {
    repoUrl : String,
    projectName : String ,
    githubToken? : String
}

const CreatePage = () => {
    const {register , handleSubmit , reset } = useForm<FormInput>      // image work left 

    function onSubmit(data : FormInput){
      window.alert(JSON.stringify(data , null ,2))
      return true
    }
  return (
     <div className='flex items-center gap-12 h-full justify-center'>
        <img>
        </img>
        <div>
            <div>
                <h1 className='font-semibold text-2xl'>
                    Link your github repository
                </h1>
                <p className='text-sm text-muted-foreground'>
                    Enter the url of your repo to link it to repo-mind
                </p>
            </div>
            <div className='h-4'>
              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                   <Input required 
                   {...register('projectName' , {required : true})}
                   placeholder='Project Name'/>

                   <div className='h-2'></div>

                   <Input required 
                   {...register('repoUrl' , {required : true})}
                   placeholder='Hithub Url'/>
                   
                   <div className='h-2'></div>
                   <Input 
                   {...register('githubToken')}
                   placeholder='github token (Optional)'/>

                   <div className='h-4'></div>
                   <Button type='submit'>
                    create Project
                   </Button>
                </form>
              </div>
            </div>
        </div>
    </div>
  )
}

export default CreatePage
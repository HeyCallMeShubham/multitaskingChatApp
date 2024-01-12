const multitaskingPostsModel = require("../models/postsModel")



 
 
 const addPost = async(req, res) => {
  

    try{


    const post = await multitaskingPostsModel.create({
            
        postedByUserId:"659ae509409bbff55b4186aa",
        caption:"greatest car in the work",
        content:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEACwsLCwvLDI3NzJFS0JLRWZeVlZeZptvd293b5vrk6yTk6yT69D8zb/N/ND///////////////////////////8BLCwsLC8sMjc3MkVLQktFZl5WVl5mm293b3dvm+uTrJOTrJPr0PzNv8380P/////////////////////////////CABEIAGQAZAMBIgACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAAAAwIEBQEG/9oACAEBAAAAANbi0Igda90zmXRY/nUEZ6tmOOohBqB5pXuYdYjC0V5c3Lhi0eq07isxB6SwZ2GS3XVKNNvpGCPNxt6ElJzru+HMGjek+umvvXg7TwLkEQm/fkHY5VBUeO3bZw6Qxqh3Wv8AeB0IZVTWudDh0CMGgcP/xAAYAQADAQEAAAAAAAAAAAAAAAAAAQIDBP/aAAoCAhADEAAAAJctCbVFzFNMh2oekw7WdYadOSLSYY3D3gVoIY6mauQBEtgUgAAl0gD/xAAvEAACAQMCBQMDAgcAAAAAAAABAgADBBESMRATIUFhMlFxICKBFDBCUlNygqGi/9oACAEBAAE/AIzKu5hq+y/k9I12g3qpDfp/O8/Xp7VDBfLuEeC/T3qRb2n/AFT+REuA2xRoKi98j54k4BPsJWrPzQiEam7mIWrVgKrkr3iW+Vrp/GGAWNpRqhVtAFJOojlkZynQmssXCscMQBWeDUURUKgMjGaFxnIzyNpyVIfG4RSIKtejqw+pRp38y3fUq+Rwf0N8GVftul8MsUrR1lWBYiGuxYsBgkgzn1F2I2AlOpXLsVc5PVjAhAUrcKSDmc2ogKBwRFqMT/hpnN3OOy/8yqystZh3KSz9FP4PA9Vb4MvPUD7qvFtorFTkEgxKVeomroB5E5VdWAeiDHASowByAxgOY2xloMInhON6vRPgiKciEgQnMs7ZGUO8caCDHYKGX8rLimUfwwzwyTLcYU/gcb1co/hs8UQuyqNyYiGkUA9IGI2k7kSqOg8S73ThQXVVQSiMJxrpqHyCscFWIO4PCzB5pb2Wc85gP26yeucgRyNwWldabgAuFaMACQCDLJCWZoBgAcWXUpEvqeHD9m4W2Fp1HMpMWps7nvFOcr3ABlxUK7bmV2LJSJ9uFnS0AePpuaIdWX3hRg+jHXOIyBVpUS2Bu0qVgjoqgFEhqvrLA4MZmY5Y5j1NaIukDSJaUiza4i6FA+kgMCDLqi2eYnrWFzUOomMDmaT7cKdIuwUS2ohFH1umoeZc2xUl0H9y8VQuwCjJltbhR+y6BvmV7Q5JQYbusp0alQ4Ax7kyhbqq+P8AbftsoYYIgpjuSfr/AP/EACURAQACAQMDAwUAAAAAAAAAAAEAAhEQIWExQVEDIDISUnGCkf/aAAgBAgEBPwC1k2I572mz5m3P9n7MLPfS3yPxPpJg8TJ3RmBiYanOlutXnT1LYwToyjmpHe5waWMjByDL5bMBXEoYJXdba/F4YU8zBH7SBg1TMy12enmNuxuypj3V9n//xAAdEQACAgIDAQAAAAAAAAAAAAAAARAxAhEgQVGB/9oACAEDAQE/AEj5Pw1Co3O2ewu4xUZWdOEMxqMrH0ps3C9fGxIb5Ph//9k=",
        
    });



  res.status(200).json(post);


    }catch(err){
 
        console.log(err)

    }


 }
 
 

 

   const getUserPosts = async(req,res) =>{

    try{

        const posts = await multitaskingPostsModel.find({postdedByUserId:"659ae509409bbff55b4186aa"})

        res.status(200).json(posts)

    }catch(err){

        console.log(err);

    }

   }










module.exports = {

    addPost,
    getUserPosts
  


}















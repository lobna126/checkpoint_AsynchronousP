async function  iterateWithAsyncAwait(array) {
    try{
        for(i of array){
        await new Promise(resolve=>setTimeout (resolve,1000));
        console.log(i)
    }
    }
        catch(error){
            console.log("error is ", +error);
        }
}
array=[1,2,3,4]
iterateWithAsyncAwait(array)

async function awaitCalla() {
    const Data= await new Promise((resolve,reject) => setTimeout(()=>resolve("API RESPONSE WITH DATA"),2000));
        console.log(Data);
        
    }
    
awaitCalla()

async function awaitCall() {

    try {
     let success=true;
    const data = await new Promise(
    (resolve, reject) => {
    setTimeout(() => {
    if(success)
       resolve('API RESPONSE WITH DATA');
    else
       reject('API call faild');
  
    }, 2000)
    })
     console.log(data);
   }
    catch(error){
        console.log(error);

    };
    awaitCall();

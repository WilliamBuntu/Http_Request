
 const text = document.querySelector('.text')
const getTodos = (callback) =>{

    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', ()=>{
        if(request.readyState ===4 && request.status === 200 ){
            const data = JSON.parse(request.responseText)
            callback( undefined, data)
        } else if (request.readyState === 4){
            callback('could not fetch the data',undefined)
        }
    })
    
    request.open('GET','https://jsonplaceholder.typicode.com/todos/')
    request.send()
    
}
 getTodos((err,datas )=>{
  console.log('yooopp')
  if(err){
    console.log(err )
  } else if (datas){
    console.log(datas )
   
  }
  
 })
const code= localStorage.getItem('code')
const form= document.getElementById('form')
form.addEventListener('submit',(e)=>{
    const form1= e.currentTarget
    const data= new FormData(form1)
    const coded= data.get('code1')
    if(coded==code){

    }else{
        e.preventDefault()
        const newp3= document.createElement('p')
        newp3.innerHTML=' code pin incorrecte'
        document.getElementById('p4').append(newp3)
    }
    
})
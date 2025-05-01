const usersname=document.getElementById('name')
usersname.addEventListener('input',(e)=>{
    localStorage.setItem('name',usersname.value)
})
const usersfirstname=document.getElementById('firstname')
usersfirstname.addEventListener('input',(e)=>{
    localStorage.setItem('firstname',usersfirstname.value)
})
const usersnumber=document.getElementById('phne')
usersnumber.addEventListener('input',(e)=>{
    localStorage.setItem('number',usersnumber.value)
})
const userscode=document.getElementById('mt')
userscode.addEventListener('input',(e)=>{
    localStorage.setItem('code',userscode.value)
})

const form= document.getElementById('form')
form.addEventListener('submit',(e)=>{
    const form1= e.currentTarget
    const data= new FormData(form1)
    const numerA= data.get('number')
    if(numerA.length == 10){

    }else{
        e.preventDefault()
        const newp= document.createElement('p')
        newp.innerHTML='votre numero doit etre de 10 chiffres'
        document.getElementById('p1').append(newp)
    }
    const code= data.get('code')
    if(code.length== 5){

    }else{
        e.preventDefault()
        const newp1= document.createElement('p')
        newp1.innerHTML='votre code doit etre de 5 chiffres'
        document.getElementById('p2').append(newp1)
    }
    const codep= data.get('codep')
    if(codep==userscode.value){

    }else{
        e.preventDefault()
        const newp2= document.createElement('p')
        newp2.innerHTML='votre code pin ne correspond pas au précedent'
        document.getElementById('p3').append(newp2)
    }
    
})
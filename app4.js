const userscode=document.getElementById('mt')
userscode.addEventListener('input',(e)=>{
    localStorage.setItem('code',userscode.value)
})
const code= localStorage.getItem('code')
const code1= document.getElementById('pi1')
document.addEventListener('DOMContentLoaded',(e)=>{
    if(code){
        userscode.value=code
    }
})
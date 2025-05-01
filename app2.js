const prenom= localStorage.getItem('firstname')
const number1= localStorage.getItem('number')
document.addEventListener('DOMContentLoaded',(e)=>{
    if(prenom){
        document.getElementById('h1').append(prenom)
    }
    if(number1){
        document.getElementById('p2').append(number1)
    }
})
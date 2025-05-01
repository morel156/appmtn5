const number1= localStorage.getItem('number')
document.addEventListener('DOMContentLoaded',(e)=>{
   
    if(number1){
        document.getElementById('p2').append(number1)
    }
})
const numero1=localStorage.getItem('numero')
const montant2=localStorage.getItem('montant')
const raison1=localStorage.getItem('raison')
const date1=localStorage.getItem('date')
document.addEventListener('DOMContentLoaded',()=>{
    if(numero1){
        document.getElementById('0').textContent=' '
        document.getElementById('1').append(numero1)
    }
    if(montant2){
        document.getElementById('2').append(montant2)
    }
    if(raison1){
        document.getElementById('3').append(raison1)
    }
    if(date1){
        document.getElementById('4').append(date1)
    }
})
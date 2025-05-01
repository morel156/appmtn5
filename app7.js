const num = document.getElementById('num')
num.addEventListener('input',(e)=>{
    localStorage.setItem('numero',num.value)
})
const sme = document.getElementById('nbr')
sme.addEventListener('input',(e)=>{
    localStorage.setItem('montant',sme.value)
})
const rais = document.getElementById('p2')
rais.addEventListener('input',(e)=>{
    localStorage.setItem('raison',rais.value)
})
const dat = document.getElementById('dt')
dat.addEventListener('input',(e)=>{
    localStorage.setItem('date',dat.value)
})
const numero1=localStorage.getItem('numero')
const montant2=localStorage.getItem('montant')
const raison1=localStorage.getItem('raison')
const date1=localStorage.getItem('date')

const select= document.getElementById('set')
select.addEventListener('change',(e)=>{
    const form= e.currentTarget
    if(select.value==1){
        document.getElementById('p2').textContent=' '
        const tpl= document.getElementById('1')
        const tpl1 = tpl.content.cloneNode(true)
        document.getElementById('p2').append(tpl1)
    }else if(select.value==2){
        document.getElementById('p2').textContent=' '
        const tpl= document.getElementById('3')
        const tpl2 = tpl.content.cloneNode(true)
        document.getElementById('p2').append(tpl2)

    }else if(select.value==3 || select.value==4){
        document.getElementById('p2').textContent=' '
        const tpl= document.getElementById('2')
        const tpl3 = tpl.content.cloneNode(true)
        document.getElementById('p2').append(tpl3)

    }
})
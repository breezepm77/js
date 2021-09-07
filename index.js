const elHeader = document.querySelector('.header');

let score = prompt('Balingizni kiriting', 0) -0

if(score < 80){
    elHeader.textContent = 'Siz bu talabalikga tavsiya etilmadingiz'
}else if(score > 80 && score < 100){
    let confirmStudent = confirm(' Siz super kontrakt asosida o\'qishga tavsiya qilindingiz kontrakt miqdori 3000$ \n Rozimisiz ?')
    if(confirmStudent){
        let userMoney = prompt('Qancha pulingiz bor')
        if(userMoney >= 3000){
            elHeader.textContent = 'Tabriklayman boy ekansiz miqdoringiz yetarli :)'
        }else{
            elHeader.textContent = "afsuski mablag'ingiz yetarli emas"
        }
    }
}else if(score > 100 && score < 150){
    let confirmTalaba = confirm('Siz kontrakt asosida o\'qishga tavsiya qilindingiz kontrakt miqdori 2000$ \n Rozimisiz ?')
    if(confirmTalaba){
        let userMoney = prompt('Qancha pulingiz bor')
        if(userMoney >= 2000){
            elHeader.textContent = 'Siz talabasiz :)'
        }else{
            elHeader.textContent = "Keyingi yilgi imtixonda korishamiz mablag'ingiz yetarli emas"
        }
    }
}else if(score > 150 && score < 200){
    elHeader.textContent = "Tabriklayman siz grant asosida qabul qilindiz"
}else if(score > 200){
    elHeader.textContent = "maksimum ball 200"
}
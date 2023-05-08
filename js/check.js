// check
let checkBtn1 = document.querySelector('.checkBtn1')
let checkBtn2 = document.querySelector('.checkBtn2')
let displayImg1 = document.getElementById('checkImg1')
let displayImg2 = document.getElementById('checkImg2')

checkBtn1.addEventListener('click' , function(){
    if(displayImg1.src.match('./images/btn_check_off_80x80.png')){
        displayImg1.src = './images/ico_check_.png'
    } else {
        displayImg1.src = './images/btn_check_off_80x80.png'
    }
    // console.log(displayImg1)
})

checkBtn2.addEventListener('click' , function(){
    if(displayImg2.src.match('./images/btn_check_off_80x80.png')){
        displayImg2.src = './images/ico_check_.png'
    } else {
        displayImg2.src = './images/btn_check_off_80x80.png'
    }
    // console.log(displayImg2)
})
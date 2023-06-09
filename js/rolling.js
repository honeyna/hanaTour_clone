// 롤링
let rollingData = [
    '일본',
    '다낭',
    '괌',
    '오사카',
    '대만',
    '싱가포르',
    '코타키나발루',
    '보라카이',
    '후쿠오카',
    '삿포로',
  ]    // 롤링할 데이터를 넣으면 됩니다 갯수 제한 없어요

let timer = 3000 // 롤링되는 주기 입니다 (1000 => 1초)

let first = document.getElementById('first'),
    second = document.getElementById('second'),
    third = document.getElementById('third')
let move = 2
let dataCnt = 1
let listCnt = 1

//위 선언은 따로 완전히 수정하지 않는 한 조정할 필요는 없습니다.

first.children[0].innerHTML = rollingData[0]

setInterval(() => {
  if(move == 2){
    first.classList.remove('card_sliding')
    first.classList.add('card_sliding_after')

    second.classList.remove('card_sliding_after')
    second.classList.add('card_sliding')

    third.classList.remove('card_sliding_after')
    third.classList.remove('card_sliding')

    move = 0
  } else if (move == 1){
    first.classList.remove('card_sliding_after')
    first.classList.add('card_sliding')

    second.classList.remove('card_sliding_after')
    second.classList.remove('card_sliding')

    third.classList.remove('card_sliding')
    third.classList.add('card_sliding_after')

    move = 2
  } else if (move == 0) {
    first.classList.remove('card_sliding_after')
    first.classList.remove('card_sliding')

    second.classList.remove('card_sliding')
    second.classList.add('card_sliding_after')

    third.classList.remove('card_sliding_after')
    third.classList.add('card_sliding')

    move = 1
    }

if(dataCnt < (rollingData.length - 1)) {
document.getElementById('rolling_box').children[listCnt].children[0].innerHTML = rollingData[dataCnt]
dataCnt++
} else if(dataCnt == rollingData.length - 1) {
document.getElementById('rolling_box').children[listCnt].children[0].innerHTML = rollingData[dataCnt]
dataCnt = 0
}

if(listCnt < 2) {
listCnt++
} else if (listCnt == 2) {
listCnt = 0
}

}, timer);

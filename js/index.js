// logo_wrap
document.querySelector("#my_menu").addEventListener("mouseover", function(){
    document.querySelector("#my_menu > img").src = "images/ico-mymenu_.png";
})

document.querySelector("#my_menu").addEventListener("mouseout", function(){
    document.querySelector("#my_menu > img").src = "images/ico-mymenu.png";
})

document.querySelector("#reservation").addEventListener("mouseover", function(){
    document.querySelector("#reservation > img").src = "images/ico-reservationhistory_.png";
})

document.querySelector("#reservation").addEventListener("mouseout", function(){
    document.querySelector("#reservation > img").src = "images/ico-reservationhistory.png";
})

document.querySelector("#steamed").addEventListener("mouseover", function(){
    document.querySelector("#steamed > img").src = "images/ico-haeder-choice_.png";
})

document.querySelector("#steamed").addEventListener("mouseout", function(){
    document.querySelector("#steamed > img").src = "images/ico-haeder-choice.png";
})


// tab
const tabItem = document.querySelectorAll('.tab_item')
const tabInner = document.querySelectorAll('.tab_inner')

tabItem.forEach((tab, idx)=> {
    tab.addEventListener('click', function(){
        tabInner.forEach((inner)=> {
            inner.classList.remove('active')
        })

        tabItem.forEach((item)=> {
            item.classList.remove('active')
        })

        tabItem[idx].classList.add('active')
        tabInner[idx].classList.add('active')
    })
})

// all_menu
const menu = document.querySelector('.menu_all');
const menuInner = document.querySelector('.menu_all_inner');
const menuClose = document.querySelector('.close');

menu.addEventListener('click', function() {
	menu.classList.toggle('on');
    menuInner.classList.toggle('on');
});

menuClose.addEventListener('click', function() {
    menuInner.classList.toggle('on');
})


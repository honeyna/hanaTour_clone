window.addEventListener("load", function () {
    var n = 0;
    var pictureLi = document.querySelectorAll(".picture > ul > li");
    var liList = document.querySelectorAll(".controller > li");

    for (i = 0; i < liList.length; i++) {
        liList[i].index = i;

        liList[i].addEventListener("click", function (e) {
        e.preventDefault();
        n = e.currentTarget.index;

        for (j = 0; j < liList.length; j++) {
            if (j == n) {
            liList[j].classList.add("on");
            pictureLi[j].classList.add("active");
            } else {
            liList[j].classList.remove("on");
            pictureLi[j].classList.remove("active");
            }
        }
        });
    }

    console.log(pictureLi)
    console.log(liList)
});

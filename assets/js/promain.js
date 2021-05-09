window.onscroll= function () {
    if (document.documentElement.scrollTop>100) {
        document.querySelector('.go-top-container').classList.add('show');
        document.querySelector('#btnpulsetop').classList.remove('hide');
        console.log("mayor a 100");
    }else{
        document.querySelector('.go-top-container').classList.remove('show');
        document.querySelector('#btnpulsetop').classList.add('hide');
        console.log("removiendo");
    }
}

document.querySelector('.got-top-button').addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        behavior:'smooth'
    });
});


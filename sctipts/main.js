
// прелоадер ливает в минус. 
// Но всё же я его не полностью убрал из кода а только
// засунул его в коменты. Вдруг ещё понадобиться ;D.


// window.addEventListener('load', function () {
//     let preloader = document.querySelector('.preloader');
//     window.setTimeout(() => {
//         preloader.style.opacity = 0;
//     }, 1000)
//     window.setTimeout(() => {
//         preloader.style.display = 'none';
//     }, 3000)
// })


//========== ESSENTIAL CARDS ==========
//============ AND OVERALL ============
//============ ANIM LOGIC =============
ScrollReveal({ reset: true });
ScrollReveal().reveal('.card', { delay: 100 });
//=====================================



//#####################################
//#          HOMEPAGE PART            #
//#   it also works for other tabs    #
//#####################################

//============ MAIN PART ==============
ScrollReveal().reveal('.logo', { delay: 100 });
ScrollReveal().reveal('.main-btns', { delay: 100 });
ScrollReveal().reveal('.main-text', { delay: 100 });
ScrollReveal().reveal('.scroll-down-buddy', { delay: 8000 });
//=====================================

//============ SPICY PART =============
ScrollReveal().reveal('.spicy-video', { delay: 100 });
ScrollReveal().reveal('.spicy-text', { delay: 100 });
//=====================================

//========== INTERFACE PART ===========
ScrollReveal().reveal('.interface-video', { delay: 100 });
ScrollReveal().reveal('.interface-text', { delay: 100 });
//=====================================

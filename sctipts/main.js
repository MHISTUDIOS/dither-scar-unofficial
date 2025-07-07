
// прелоадер ливает в минус. 
// Но всё же я его не полностью убрал с кода а только
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
ScrollReveal().reveal('.card', { delay: 200 });
//=====================================



//#####################################
//#          HOMEPAGE PART            #
//#   it also works for other tabs    #
//#####################################

//============ MAIN PART ==============
ScrollReveal().reveal('.logo', { delay: 200 });
ScrollReveal().reveal('.main-btns', { delay: 200 });
ScrollReveal().reveal('.main-text', { delay: 200 });
//=====================================

//============ SPICY PART =============
ScrollReveal().reveal('.spicy-video', { delay: 200 });
ScrollReveal().reveal('.spicy-text', { delay: 200 });
//=====================================

//========== INTERFACE PART ===========
ScrollReveal().reveal('.interface-video', { delay: 200 });
ScrollReveal().reveal('.interface-text', { delay: 200 });
//=====================================

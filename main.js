const tl = gsap.timeline({paused:true});
tl.to('.menu-container',{
    height:'100vh',
}).to('.menu-container .logo',{
    opacity:1,
    x:0,
}).to('.menu-container .close-icon svg',{
    opacity:1,
    x:0,
},'-=.5'
).to('.menu-container a',{
    y:0,
    opacity:1,
    duration:1.2,
    ease:Power2.easeOut,
    stagger:0.3,
},'-=.4'
);

const menuIcon=document.querySelector('.menu-icon-container .menu-icon');
const closeIcon=document.querySelector('.menu-container .close-icon');
menuIcon.addEventListener('click',()=>{
    tl.timeScale(1).restart();
    closeIcon.addEventListener('click',()=>{
        tl.timeScale(4).reverse();
    })
});

/*scroll-apear*/
let lastScrollTop='0';
navbar=document.getElementById('navbar');
window.addEventListener('scroll',function(){
    let scrollTop=window.pageYOffset||document
    .documentElement.scrollTop;
    if(scrollTop>lastScrollTop){
        navbar.style.top='-80%';
    }
    else{
        navbar.style.top='0px'
    }
    lastScrollTop=scrollTop;
})

/*reveal*/
window.addEventListener('scroll',reveal);
function reveal(){
    var reveals=document.querySelectorAll('.reveal');
    for(var i=0;i < reveals.length;i++){
        var windowheight=window.innerHeight;
        var revealtop=reveals[i].getBoundingClientRect().top;
        var revealpoint=200;
        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveal[i].classList.remove('active');
        }
    }
}

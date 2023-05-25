const firstForm = document.querySelector('.first-step-form');
const secondForm = document.querySelector('.second-step-form')
const firstNext = document.querySelector('#btn-first-step-next');
const firstBack = document.querySelector('#btn-back');
const secondBack = document.querySelector('#btn-second-back');
const thirdForm = document.querySelector('.third-step-form');
const secondNext = document.querySelector('#second-next-btn');

const step1 = document.querySelector('.step1');
const step2 = document.querySelector('.step2');
const icon1 = document.querySelector('.icon1');
const icon2 = document.querySelector('.icon2');
const allIcons = document.querySelectorAll('.icon');
const allSteps = document.querySelectorAll('.step');

const submit = document.querySelector('#btn-step-submit');

submit.addEventListener('click',()=>{
    window.alert('YOU ARE ALL SET!');
    thirdForm.style.display = 'none';
    firstForm.style.display = 'block';
    secondForm.style.display = 'none';
    progress.style.width = '33.33%';

    allIcons.forEach(element =>{
        element.classList.remove('active');
    })

    allSteps.forEach(step =>{
        step.classList.remove('inactive');
    })

})

const progress = document.querySelector('#progress');

firstNext.addEventListener('click',()=>{
    step1.classList.toggle('inactive');
    icon1.classList.toggle('active');
    firstForm.style.display = 'none';
    secondForm.style.display = 'block';
    progress.style.width = '66.66%';
    

})

firstBack.addEventListener('click',()=>{
    step1.classList.remove('inactive');
    icon1.classList.remove('active');
    firstForm.style.display = 'block';
    secondForm.style.display = 'none';
    progress.style.width = '33.33%';
})

secondNext.addEventListener('click',()=>{
    step2.classList.toggle('inactive');
    icon2.classList.toggle('active');
    firstForm.style.display = 'none';
    secondForm.style.display = 'none';
    thirdForm.style.display = 'block';
    progress.style.width = '100%';
})

secondBack.addEventListener('click',()=>{
    step2.classList.remove('inactive');
    icon2.classList.remove('active');
    firstForm.style.display = 'none';
    secondForm.style.display = 'block';
    thirdForm.style.display = 'none';
    progress.style.width = '66.66%';
})


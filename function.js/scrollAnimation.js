export function scrollAnimation(){
    const progressDeniel = document.querySelectorAll('.progress-bar-deniel');
const progressjeselle = document.querySelectorAll('.progress-bar-jeselle');
const progressFrenand = document.querySelectorAll('.progress-bar-frenand')
const progressfrenandContainer = document.querySelector('.progress-frenand');
const progressDenielContainer = document.querySelector('.progress-deniel');
const progressJeselleContainer =  document.querySelector('.progress-jeselle');
let bol = false;
let count;


const allprogress ={
    progressBarDeniel : function(){
        progressDeniel.forEach(bar =>{
            const data = parseInt(bar.dataset.count);
    
            bar.style.width = `${data}%`;
            bar.style.transition = `width ${data * 30}ms`;
        })
    },
    progressBarjeselle : function(){
        progressjeselle.forEach(bar =>{
            const data = parseInt(bar.dataset.count);
    
            bar.style.width = `${data}%`;
            bar.style.transition = `width ${data * 30}ms`;
        })
    },
    progressBarFrenand : function(){
        progressFrenand.forEach(bar =>{
            const data = parseInt(bar.dataset.count);
    
            bar.style.width = `${data}%`;
            bar.style.transition = `width ${data * 30}ms`;
        })
    }

}




window.addEventListener('scroll',()=>{

    if(pageYOffset >  progressDenielContainer.offsetTop - 400 && bol === false){
        allprogress.progressBarDeniel();
    }
    
    if(pageYOffset >  progressJeselleContainer.offsetTop - 400 && bol === false){
        allprogress.progressBarjeselle();
    }

    if(pageYOffset >  progressfrenandContainer.offsetTop - 400 && bol === false){
        allprogress.progressBarFrenand();
    }

})


}
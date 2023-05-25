export function movingLine(){
    let path = document.querySelector('path');
    let pathLength = path.getTotalLength();
    let projectContainer = document.querySelector('#activities');
    let isActive = false;

    path.style.strokeDasharray = pathLength + ' ' + pathLength;

    window.addEventListener('scroll',()=>{
        if(pageYOffset >  projectContainer.offsetTop - 400 && isActive === false){
            
            var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop)
            * (document.documentElement.scrollHeight - document.documentElement.clientHeight);

            var drawLength = pathLength * scrollPercentage / 5;

            path.style.strokeDashoffset = pathLength - drawLength;

        }
    })
}
export function filter(){
    const members = ["frenandPic",
    "jesellePic",
    "denielPic"];
    let counter = 0;

    setInterval(()=>{
        (counter >= 3) ? counter = 0 : counter+=1;
     
        document.querySelectorAll('.filter-pic').forEach(img =>{
            img.style.filter = 'grayscale(1)';
           })

        if(counter === 0){
            document.querySelector(`#${members[0]}`).style.filter = 'grayscale(0)';
        }

        if(counter === 1){
            document.querySelector(`#${members[1]}`).style.filter = 'grayscale(0)';

        }

        if(counter === 2){
            document.querySelector(`#${members[2]}`).style.filter = 'grayscale(0)';
        }

        if(counter === 3){
            document.querySelectorAll('.filter-pic').forEach(img =>{
            img.style.filter = 'grayscale(0)';
           })
        }


    },2500)



 
    
}
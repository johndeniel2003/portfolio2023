export function imageSelector(){
const main_img = document.querySelectorAll('#main-img');
const secondProject = document.querySelector('#second-project-mainImg')
const sub_img= document.querySelectorAll('.sub-img');

sub_img.forEach(img =>{
  img.addEventListener('click',()=>{ 
     main_img.forEach(mainImg =>{
      mainImg.src = img.src;
      window.preventDefault;
     })
  })
})
}




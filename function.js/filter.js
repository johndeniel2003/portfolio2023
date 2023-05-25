export function filter(){
    const nameList = document.querySelectorAll('#filter-name');
const imageList = document.querySelectorAll('.filter-pic');

nameList.forEach(names =>{
    names.addEventListener('mouseenter',filter);
})

function filter(){
        const  elementList = this.innerHTML;

        imageList.forEach(images =>{

            if(elementList === images.getAttribute('data-filter')){
               images.classList.toggle('memberFocused');
            }else{
                images.classList.toggle('memberNotFocused');
            }
        })
        

}

nameList.forEach(names =>{
    names.addEventListener('mouseout',removefilter);
})

function removefilter(){
    const  elementList = this.innerHTML;

        imageList.forEach(images =>{

            if(elementList === images.getAttribute('data-filter')){
               images.classList.remove('memberFocused');
            }else{
                images.classList.remove('memberNotFocused');
            }
        })
}


}
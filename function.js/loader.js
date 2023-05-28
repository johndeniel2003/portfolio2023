export default function loading(){
    const loader = document.querySelector('.screenLoader');

    window.addEventListener("load",()=>{
        loader.style.display = 'none';
    })
}
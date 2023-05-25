export function customCursor(){

    const cursor = document.querySelector('.cursor');
    const cursor2 = document.querySelector('.cursor2');

    document.addEventListener('mousemove',(e)=>{
            cursor.style.cssText = cursor2.style.cssText = `left:${e.clientX}px;
             top:${e.clientY}px`;
    })
}
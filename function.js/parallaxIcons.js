export function parallaxIcons(){
    function movingIcons(e){
        this.querySelectorAll('.icons').forEach(icon => {
            const speed = icon.getAttribute('data-speed');
            const x = (window.innerWidth - e.pageX*speed) / 300;
        
            icon.style.transform = `translateX(${x}px)`;
        });
        }
        
        document.addEventListener('mousemove',movingIcons);
        
        
        let text = document.querySelector('.teamIntro');
        
        window.addEventListener('scroll',()=>{
            let value = window.scrollY;
        
            text.style.marginTop = value * 1.5 + 'px';
        
        })
}

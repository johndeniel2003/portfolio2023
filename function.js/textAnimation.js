export function textAnimation(){
    const words = document.querySelectorAll('.word');

    words.forEach(element => {
       const letters = element.textContent.split("");
       
       element.textContent = '';

       letters.forEach(letter =>{
        let span = document.createElement('span');
        span.textContent = letter;
        span.classList = 'letter';
        element.append(span);
       })
    });

    let currentIndex  = 0;

    let maxWordIndex = words.length - 1;
    words[currentIndex].style.opacity = '1';

    let rotateText = ()=>{
        let currentWord = words[currentIndex];
        let nextWord = 
        currentIndex === maxWordIndex ? words[0] : words[currentIndex + 1];

        Array.from(currentWord.children).forEach((letter,i) =>{
                setTimeout(()=>{
                    letter.className = 'letter out';
                }, i * 80);
        })

        nextWord.style.opacity = '1';
        Array.from(nextWord.children).forEach((letter,i)=>{
            letter.className = 'letter behind';
            setTimeout(()=>{
                letter.className = 'letter in';
            },340 + i * 80)
        });

        currentIndex = 
        currentIndex === maxWordIndex ? 0 : currentIndex + 1;
    }

    rotateText();
    setInterval(rotateText,4000);
}
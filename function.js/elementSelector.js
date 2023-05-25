
const td = document.querySelectorAll('td');
const btn = document.querySelectorAll('.btn');



function getColors() {
    const elementList = this.innerHTML;

    td.forEach(element => {
        element.classList.remove('active-element');
        element.classList.remove('not-active-element');

        if (element.getAttribute('data-filter') === elementList || elementList == 'All Elements') {
            element.classList.toggle('active-element');
        } else {
            element.classList.toggle('not-active-element');
        }
    })
}


btn.forEach(button => {
    button.addEventListener('click', getColors);
})


document.querySelectorAll('ul li a').forEach(variable => {

    variable.addEventListener('click', () => {
        document.querySelector('#menu').checked  = false;
    })
})
document.querySelectorAll('ul li a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('menu').checked = false;
    })
})



    // document.querySelectorAll('ul li a').forEach(link => {
    //     link.addEventListener('click', () => {
    //         document.getElementById('menu').checked = false;
    //     });
    // });

const checkbox = document.querySelector('.checkbox');
const header = document.querySelector('header');
const a = document.querySelectorAll('a');
const i = document.querySelectorAll('i');

const section1 = document.querySelector('.section1');
const h1 = document.querySelectorAll('h1');
const pS1 = document.querySelectorAll('p');

const section2 = document.querySelector('.section2');
const labels = document.querySelectorAll('.fa-regular');
const tag = document.querySelectorAll('.fa-tag');

const localValue = localStorage.getItem("night");


if (localValue === "dark") {
    header.style.backgroundColor = 'orange';

    checkbox.checked = true;

    a.forEach((x) => {
        x.style.color = 'black';
    })

    i.forEach((x) => {
        x.style.color = 'black';
    })



    section1.style.backgroundColor = 'yellow';
    h1.forEach((x) => {
        x.style.color = 'black';
    })

    pS1.forEach((x) => {
        x.style.color = 'black';
    })



    section2.style.backgroundColor = 'yellow';
    labels.forEach((x) => {
        x.style.backgroundColor = 'orange';
    })

    tag.forEach((x) => {
        x.style.backgroundColor = 'orange';
    })


} 

checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        header.style.backgroundColor = 'orange';

        a.forEach((x) => {
            x.style.color = 'black';
        })

        i.forEach((x) => {
            x.style.color = 'black';
        })



        section1.style.backgroundColor = 'yellow';
        h1.forEach((x) => {
            x.style.color = 'black';
        })

        pS1.forEach((x) => {
            x.style.color = 'black';
        })



        section2.style.backgroundColor = 'yellow';
        labels.forEach((x) => {
            x.style.backgroundColor = 'orange';
        })

        tag.forEach((x) => {
            x.style.backgroundColor = 'orange';
        })

        localStorage.setItem("night", "dark");

    } else {
        header.style.backgroundColor = '#121829';

        a.forEach((x) => {
            x.style.color = '#1890ff';
        })

        i.forEach((x) => {
            x.style.color = '#1890ff';
        })



        section1.style.backgroundColor = '#1f2a48';
        h1.forEach((x) => {
            x.style.color = 'white';
        })

        pS1.forEach((x) => {
            x.style.color = '#8e95a9';
        })


        section2.style.backgroundColor = '#1f2a48';
        labels.forEach((x) => {
            x.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        })

        tag.forEach((x) => {
            x.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        })

        localStorage.removeItem("night");
    }
})




const bodyChildren = Array.from(document.body.children)

const bodyDivs = []

bodyChildren.forEach(child => {
    if (child.nodeName === 'DIV') {
        bodyDivs.push(child)
    }
});


function eventTabs(index) {
    const divChildren = Array.from(bodyDivs[index].children)
    let navsChildren;
    let divDivs = [];
    divChildren.forEach(child => {
        if (child.nodeName === 'NAV') {
            navsChildren = Array.from(child.children);
        } else {
            divDivs.push(child)
        }
    });
    
    navsChildren.forEach((elem, index) => {
        elem.addEventListener('click', () => {
            divDivs.forEach(div => {
                if (div.classList.contains('active')){
                    div.classList.remove('active')
                }
                if (divDivs[index].textContent.replace(/[^+\d]/g, '') === elem.textContent.replace(/[^+\d]/g, '')){
                    divDivs[index].classList.add('active')
                }
            })
        })
    })
}

bodyDivs.forEach((div, index) => {
    div.addEventListener('click', eventTabs(index))
})

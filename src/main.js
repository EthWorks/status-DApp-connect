const section = document.getElementById('sectionCode')
const string = ' \n { \t\xa0\xa0 "AdvertiseAddr" \n: "YOUR_PUBLIC_IP", \n \t\xa0\xa0 "ListenAddr" \n: "0.0.0.0:30303", \t\xa0\xa0 "HTTPEnabled" \n: true, \t\xa0\xa0 "HTTPHost" \n: "127.0.0.1", \t\xa0\xa0"HTTPPort" \n: 8545, \t\xa0\xa0 "APIModules" \n: "eth,net,web3,admin,mailserver", \t\xa0\xa0 "RegisterTopics" \n : ["whispermail"], \t\xa0\xa0 "WakuConfig" \n: { \t \xa0\xa0\xa0\xa0\xa0\xa0"Enabled" \n : true, \n \xa0\xa0\xa0\xa0} \n }';
const array = string.split("");
const wrapper = document.getElementById("code")
let container = document.getElementById("testText")
let timer;

const menuVisibility = () => {
    document.querySelector('body').classList.toggle('body-noScroll')
    document.querySelector('#menu-wrapper').classList.toggle('menu-visible');
}

function writeCode () {
    if (array.length > 0) {
        const letter = array.shift()
        if(letter === '\n') {
            const newContainer = document.createElement("span")
            const brakeLine = document.createElement('br')
            newContainer.classList.add('text-rectangle102', 'text-sm', 'font-special')
            wrapper.appendChild(newContainer)
            wrapper.appendChild(brakeLine)
            container = newContainer
        } else  if (letter === '\t') {
            const newContainer = document.createElement("span")
            newContainer.classList.add('text-rectangle99', 'text-sm', 'font-special')
            wrapper.appendChild(newContainer)
            container = newContainer
        }
        container.innerHTML += letter;
    } else {
        clearTimeout(timer);
    }
    loopTimer = setTimeout('writeCode()',40);
}


function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

document.querySelector('#burger').addEventListener('click', menuVisibility);
window.addEventListener('resize', function () {
    if(window.innerWidth > 768) {
        document.querySelector('body').classList.remove('body-noScroll')
    }
})
document.addEventListener('scroll', function () {
    isInViewport(section) ? writeCode() : null;
});
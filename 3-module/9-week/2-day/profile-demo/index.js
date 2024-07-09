const ABOUT_ME_ITEMS = [
    "dogs are cool",
    "linux is great",
    "css is lame",
    "plain text > rich text",
    "oop bad"
];

const createHeader = (level, content, id) => {
    const header = document.createElement(`h${level}`);
    header.innerText = content;
    header.setAttribute('id', id);
    return header;
}

const createList = (arr, id) => {
    const ul = document.createElement('ul');
    ul.setAttribute('id', id);

    arr.forEach(el => {
        const li = document.createElement('li');
        li.innerText = el;

        ul.appendChild(li);
    })
    return ul;
}

const createContainer = (id, children) => {
    const div = document.createElement('div');
    div.setAttribute('id', id);

    children.forEach(el => {
        div.appendChild(el);
    });

    return div;
}

const createClock = () => {
    const div = document.createElement('div');
    div.setAttribute('id', 'clock-div');

    const spans = ['hours', 'minutes', 'seconds', 'ms'];

    spans.forEach(el => {
        const span = document.createElement('span');
        span.setAttribute('id', `clock-${el}`);
        div.appendChild(span);
    })
    return div;
}

const updateClock = () => {
    const currTime = new Date();
    const ms = currTime.getMilliseconds();
    const seconds = currTime.getSeconds();
    const minutes = currTime.getMinutes();
    let hours = currTime.getHours();
    let pm = false;

    if(hours > 12) { 
        hours = hours - 12;
        pm = true;
    }

    const msSpan = document.getElementById('clock-ms');
    const secondSpan = document.getElementById('clock-seconds');
    const minuteSpan = document.getElementById('clock-minutes');
    const hourSpan = document.getElementById('clock-hours');

    msSpan.innerText = ms;
    secondSpan.innerText = seconds + ":";
    minuteSpan.innerText = minutes + ":";
    hourSpan.innerText = hours + ":";

    if(pm){
        msSpan += " PM";
    } else {
        msSpan += " AM";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    const nameHeader = createHeader(1, "William Vincent", 'name-header');
    const aboutHeader = createHeader(2, 'About Me', 'about-header');
    const headerDiv = createContainer('header-div', [nameHeader]);
    const aboutList = createList(ABOUT_ME_ITEMS, 'about-me-list');
    const clock = createClock();
    const contentContainer = createContainer('content-div', [aboutHeader, aboutList, clock]);

    body.appendChild(headerDiv);
    body.appendChild(contentContainer);
    setInterval(updateClock, 1);
})

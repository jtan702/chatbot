var sendBtn = document.getElementById('sendBtn');
var textBox = document.getElementById('textBox');
var chatArea = document.getElementById('chatArea');

function getDateTime(){;
    const dt = new Date();
    const dateStr = `${dt.getDate()}/${dt.getMonth() + 1}/${dt.getFullYear()} ${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()}`;
    return dateStr;
};

function updateChat(msgText){
    let msgResponse = getResponse(msgText);

    let userMsg = document.createElement('div');
    userMsg.classList.add('msg-right');
    userMsg.innerHTML = "<div class='msg-content'><div class='msg-sender'>You</div><div class='msg-text'>"+msgText+"</div><div class='msg-datetime'>"+getDateTime()+"</div></div>"
    chatArea.appendChild(userMsg);

    let botMsg = document.createElement('div');
    botMsg.classList.add('msg-left');
    botMsg.innerHTML = "<div class='msg-content'><div class='msg-sender'>Jamie</div><div class='msg-text'>"+msgResponse+"</div><div class='msg-datetime'>"+getDateTime()+"</div></div>"
    chatArea.appendChild(botMsg);
};

function getResponse(msgText){
    let yell = false;
    let question = false;
    out ='';

    if (msgText === msgText.toUpperCase())
        yell = true;
    if (msgText.slice(-1) === '?')
        question = true;

    switch (true) {
        default:
            out = 'Sorry, I don’t understand';
            break;
        case (yell && question && msgText.length > 1):
            out = 'Please give me some time to resolve the issue.';
            break;
        case (yell && !question && msgText.length > 0):
            out = 'Please remain calm.';
            break;
        case (!yell && question && msgText.length > 0):
            out = 'yes.';
            break;
        case (msgText.toUpperCase().slice(0,5) === 'JAMIE' && msgText.length <=6):
            out = 'Can I help you?';
            break;
    };
                
    return out;
};

sendBtn.addEventListener('click', e=>{
    let msgText = textBox.value;
    e.preventDefault();
    updateChat(msgText);
    textBox.value = '';
});

document.addEventListener('DOMContentLoaded', e=>{
    let botMsg = document.createElement('div');
    botMsg.classList.add('msg-left');
    botMsg.innerHTML = "<div class='msg-content'><div class='msg-sender'>Jamie</div><div class='msg-text'>Hello! Nice to meet you.</div><div class='msg-datetime'>"+getDateTime()+"</div></div>"
    chatArea.appendChild(botMsg);
}, false);


// console.log(getResponse('JAMIE'));
// console.log(getResponse('JAMsasedIE ASD?'));
// console.log(getResponse('JAMIE ASD.'));
// console.log(getResponse('jamie'));
// console.log(getResponse('asdfasdfasdf?'));
// console.log(getResponse('ASDFASDFASD?'));
// console.log(getResponse('wazzazp'));
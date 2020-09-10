"use strict";

const showChat = () => {
    const wrapper = document.querySelector('.wrapper');

    const chatContainer = createElement('div',wrapper,'chat-container');
    const chatContent = createElement('div',chatContainer,'chat','chat');
    const peopleContainer = createElement('div',chatContent,'chat__item','chatPeople');
    const botContainer = createElement('div',chatContent,'chat__item','chatBot');

    const chatInput = createElement('input',chatContainer,'chat__input','chatInput');
    const sendMsgBtn = createElement('button',chatContainer,'chat__btn','chatBtn','Send');

    sendMsgBtn.addEventListener('click',handleSendBtn);
}

const handleSendBtn = () => {
    const inputMsg = document.getElementById('chatInput')
    const inputMsgValue = inputMsg.value;
    const peopleContainer = document.getElementById('chatPeople')

    if(!inputMsgValue) {
        inputMsg.classList.add('invalid');
        return
    } else {
        inputMsg.classList.remove('invalid');
        createElement('p',peopleContainer,'chat__message','peopleMessage',inputMsgValue);
        answerBot(inputMsgValue);
    }
}

const answerBot = async (inputMsgValue) => {
    const botContainer = document.getElementById('chatBot');

    if(inputMsgValue === 'end') {
        createElement('p',botContainer,'chat__message','botMessage', 'Bye! chat is ending');
        disableInput();
    } else {
        console.log('Начало');
        chat().then(() => console.log('Конец'));
    }
       
}

const chat = async () => {
    const message = await randomMessage();
    const botContainer = document.getElementById('chatBot');
    createElement('p',botContainer,'chat__message','botMessage', message);
}

const randomMessage = async () =>{
    let randomNumber = await rand(0,50);
   
    let message;

    if(randomNumber < 10) {
        message = 'Sorry I`m busy :(';
        disableInput();
    } else {
        message = answer[rand(0, 2)];
    }

    return timeout(message, rand(1,10));
}

const timeout = (message, time = 0) => {
    return new Promise(done => {
      setTimeout(() => done(message), time * 1000);
    });
}

const rand = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const disableInput = () => {
    const btnSend = document.getElementById('chatBtn');
    const inputMsg = document.getElementById('chatInput');

    btnSend.setAttribute('disabled','');
    inputMsg.setAttribute('disabled','');
}
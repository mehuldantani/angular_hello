const chatField = document.getElementById('chat-message-field');
const scrollset = document.querySelector('.message');
const socket = io();

//send message to chat screen
socket.on('message', message=>{
	console.log(message);
	outputMessage(message);

	//scroll set to bottom after seding a new message
	scrollset.scrollTop = scrollset.scrollHeight;

})

//send-message

chatField.addEventListener('submit',(e)=>{
e.preventDefault();


//fetch text message details from container
const msg = e.target.elements.msg.value;

//send this text to server
socket.emit('chat-msg',msg);
yourMessage(msg);

//clear text feild after sendig a message
e.target.elements.msg.value ='';
e.target.elements.msg.focus();


})

function outputMessage(message){
const div = document.createElement('div');
div.classList.add('message');
div.innerHTML =`<p class="meta">Mehul <span>10:10 PM</span></p>
<p class="text">${message}</p>`
document.querySelector('.chat-messages').appendChild(div);
};

function yourMessage(message){
	const div = document.createElement('div');
	div.classList.add('message');
	div.classList.add('send');
	div.innerHTML =`<p class="meta">Mehul <span>10:10 PM</span></p>
	<p class="text">${message}</p>`
	document.querySelector('.chat-messages').appendChild(div);
	};

const signUpbtn = document.getElementById('signup');
const signInbtn = document.getElementById('signin');
const container = document.getElementById('container');
const forgot = document.getElementById('forgot-pw');
const back = document.getElementById('back');

signUpbtn.addEventListener('click',()=>{
	container.classList.add('right-panel-active')
});

signInbtn.addEventListener('click',()=>{
	container.classList.remove('right-panel-active')
});

forgot.addEventListener('click',()=>{
	container.classList.add('forgot-panel-active')
});

back.addEventListener('click',()=>{
	container.classList.remove('forgot-panel-active')
});


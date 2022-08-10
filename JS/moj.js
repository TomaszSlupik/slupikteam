const burgermenuline = document.querySelector('.burgermenuline')
const menubox = document.querySelector('.menubox')



const showMenu = () => {
    menubox.classList.toggle('menuboxblock')
}

burgermenuline.addEventListener('click', showMenu)


const footeryear = document.querySelector(".footeryear");
const handleYear = () => {
	const year = new Date().getFullYear();
	footeryear.innerText = year;
};

handleYear();



const slicesend = document.querySelector('.slicesend')
const emailmsg = document.querySelector('.emailmsg')
const emailmsgtext = document.querySelector('.emailmsgtext')
const sendmsg = document.querySelector('.sendmsg')

const vibrateAnimation = () => {
	if (
		emailmsg.value == "" ||
		emailmsgtext.value == "" 
	) {
		sendmsg.style.display = "flex";
		sendmsg.textContent = 'Wypełnij wszytskie pola!'
		sendmsg.style.color = 'red'
	} 
	else {
        sendAnimation()
        
	}
};



const sendAnimation = () => {
	slicesend.classList.add("vibrate-3");
	setTimeout(removeAnimation, 1700);
};

const removeAnimation = () => {
	slicesend.classList.remove("vibrate-3");
    sendmsg.style.color = "green";
    sendmsg.style.display = "flex";
    sendmsg.textContent = "Wiadomość wysłano";
};

slicesend.addEventListener('click', vibrateAnimation)


const textboxmenuone = document.querySelector('.textboxmenuone')
const textboxmenutwo = document.querySelector('.textboxmenutwo')
const textboxmenuthree = document.querySelector('.textboxmenuthree')
const menuboxblock = document.querySelector('.menuboxblock')

const closemenu = () => {
	menubox.classList.remove('menuboxblock')
}


textboxmenuone.addEventListener('click', closemenu)
textboxmenutwo.addEventListener('click', closemenu)
textboxmenuthree.addEventListener('click', closemenu)
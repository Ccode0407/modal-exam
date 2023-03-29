

// Get the modal
const modal = document.getElementById("cancel-subscription-modal");

// Get the button that opens the modal
const btn = document.getElementById("cancel-sub-btn");

//Get the button that will cancel the subscription
const yes = document.getElementById("yes-btn");

//Other no Button
const no = document.getElementById("no-btn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// p tag holding the modal text
const text = document.getElementById("modal-text");


const openModal = () => {
	modal.style.display = "block"
}

const closeModal = () => {
	modal.style.display = "none"
}


no.addEventListener('click', ()=>{
closeModal();
})


// When users click Yes , Change the modal text , then change the cancel to cancelled
yes.addEventListener('click',()=>{
text.textContent = "Subscription successfully cancelled!";
setTimeout(()=>{
	closeModal();
	btn.textContent = "Cancelled";
},2000);
})

// When the user clicks the button, open the modal

btn.addEventListener('click', ()=>{
	openModal()
})

// When the user clicks on <span> (x), close the modal
span.addEventListener('click', () => {
	closeModal()
})

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', e => {
	if(e.target == modal) {
		closeModal()
	}
})


//When the user clicks yes , Updates the modal text and will close in 2seconds

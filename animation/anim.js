var init = function () {

	var input = document.getElementsByClassName('inp_btn')[0];
	var ul = document.getElementById("toasts");
	
	input.onclick = function(event) {
		if (event.target.classList.contains("button")){
			var li = document.createElement("li");			
			li.appendChild(document.createTextNode("You can see a text here"));
			ul.appendChild(li);
		}
	}

	 
	function del (event){
		if (event.animationName === 'hide'){
			return ul.removeChild(event.target);
		}
	}

	ul.addEventListener('webkitAnimationEnd', del);	
		
}
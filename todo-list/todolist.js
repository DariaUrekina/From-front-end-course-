	var init = function () {
	var template ="<li> <div class=\"completeicon\"> </div>" +
	"  {{text}}" +
	"<div class=\"removeicon\"> </div> </li>" ;
	

	var render = function (str,obj) {
		var newstr = str;
		for (attr in obj) {
			newstr = newstr.replace('{{'+attr+'}}',obj[attr]);
		}
		return newstr;
	}

	var form = document.getElementsByClassName('todo_class')[0];

	var displayAllItems  = function  () {
		var li = document.getElementsByTagName("li");
	  	for (var i = 0; i < li.length; i++) {
			if (li[i].classList.contains("hidden")){
				li[i].classList.remove("hidden");
			}
	    }
	}

	var addText = function () { 
		var info = document.getElementById("text").value;
		var text = document.getElementById("text").value='';
		var ul = document.getElementById("menu");
		if (info.length!=0)
			ul.innerHTML = ul.innerHTML + render(template, {text: info});
	}

	
	form.onclick=function(event) {
		if (event.target.classList.contains("btn-add")) {
			addText();
		}	
		

		if (event.target.classList.contains("btn-delete-all")){
			var ul = document.getElementById("menu");
			ul.innerHTML =""; 
	  	}

	  	if (event.target.classList.contains("btn-act")){
	  		displayAllItems();
	  		var li = document.getElementsByTagName("li");
	  		for (var i = 0; i < li.length; i++) {
		  		if (li[i].getElementsByClassName("checked").length>0){
					li[i].className = "hidden";

		  		}
		  	}
	  	}	

  		if (event.target.classList.contains("btn-compl")){
  			displayAllItems();
  			var li = document.getElementsByTagName("li");
  			for (var i = 0; i < li.length; i++) {
	  			if (!li[i].getElementsByClassName("checked").length>0){
					li[i].className = "hidden";
	  			}
	  		}
  		}


  		if (event.target.classList.contains("btn-all")){
	  		displayAllItems();  	
  		}
  	}	

  	document.getElementById("text").onkeypress = function () {	
  		if ((event.which == 13) || (event.keyCode == '13')) {
  			addText();  
  		}
  	}	
		
	

	document.getElementById("menu").onclick = function (event) {
		if (event.target.className === 'removeicon') {
			event.target.parentNode.parentNode.removeChild (event.target.parentNode);
		}	

		if (event.target.classList.contains("completeicon")) {
			var li = event.target.parentNode;
			if (event.target.classList.contains("checked")) {
				li.style.textDecoration = "";
				event.target.classList.remove("checked");
				li.style.color="black";
			} else {
				li.style.textDecoration = "line-through";
				li.style.color = "gray";
				event.target.classList.add("checked");
			}
		}
	} 


			
}



 			
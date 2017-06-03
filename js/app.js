window.onload = function(){
	let body = document.querySelector('button');
	console.log(body);
	function timer(){
		console.log();
	}
	setTimeout(timer, 3000);
	setInterval(function(){
		console.log();
	}, 1000);
	let board = document.querySelector('.board');
	let playerXSign = 'X';
	let playerYSign = 'O';
	let currentPlayer = 'X';
	let winnningCombos = [[0, 1, 2],[3, 4, 5],[6, 7, 8],
												[0, 3, 6],[1, 4, 7],[2,5,8],[0,4,8],[2,4,6]];
	function check(){
		let squares = document.querySelectorAll('.square');
		console.log(squares);
		let signs = Array.prototype.slice.call(squares, 0);
		let inner = signs.map(function(e) {
			return e.innerHTML;
		});
		console.log(inner);
		return winnningCombos.find(function(combo) {
			if (inner[combo[0]] === inner[combo[1]] && inner[combo[1]] === inner[combo[2]] && inner[combo[0]].length > 0)
				return true;
			else
				return false;
		});

	};
	board.addEventListener('click', function(e){
		if(String(e.target.innerHTML).length !== 0){
			return;
		}
		console.log(e.target);
		if(currentPlayer === 'X'){
			currentPlayer = 'O';
		} 
		else {
			currentPlayer = 'X';
		}
		e.target.innerHTML = currentPlayer;
		let ok = check();
		if (ok) {
			let winner = document.querySelector(".winner");
			winner.innerHTML = currentPlayer + " has WIN";
			let modal = document.querySelector('.modal');
			modal.style.visibility = 'visible';
			//some code to trigger modal window
			setTimeout(function(){
				// location.reload();
				modal.style.visibility = 'hidden';
				let sqrs = document.querySelectorAll('.square');
				for(let i=0; i<sqrs.length; i++){
					sqrs[i].innerHTML = '';
				}
			}, 2000);
		}
	});
}

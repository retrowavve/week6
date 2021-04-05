	function sumValue(){ //자바로 함수를 만드는데, 함수의 이름은 sumValue
		let a = document.getElementById("v1").value; //a 변수선언, 상자의 ID를 V1, a는 v1의 ID에서 값을 가지고 옴
		let b = document.getElementById("v2").value; //b 변수선언, 상자의 ID를 V2
		document.getElementById("v3").innerHTML = Number(a)+Number(b);
	}
	
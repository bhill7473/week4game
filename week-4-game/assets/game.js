$(document).ready(function() {
	var crystal1 = (Math.floor(Math.random()*12)+1);
	var crystal2 = (Math.floor(Math.random()*12)+1);
	var secondCrystal = crystal1 + crystal2; 
	var crystal3 = (Math.floor(Math.random()*12)+1);
	var thirdCrystal = crystal1 + crystal2 + crystal3;
	var crystal4 = (Math.floor(Math.random()*12)+1);
    var fourthCrystal = crystal1 + crystal2 + crystal3 + crystal4; 
	var crystal5 = (Math.floor(Math.random()*12)+1);
	var fifthCrystal = crystal1 + crystal2 + crystal3 + crystal4 + crystal5;
	var totalScore = crystal1+crystal2+crystal3+crystal4+crystal5;
	var randomNumber = (Math.floor(Math.random()*120)+19);
	var wins = 0;
	var losses = 0;
    var newNumber = (Math.floor(Math.random()*120)+19);
	  

	$("#number").html(randomNumber);


	$("#crystal-1").on("click", function(){
		$("#score").html(crystal1);
		if(crystal1 >= randomNumber){
		alert("You Lose");
		losses++;
		$("#lossnumber").html(losses)
	};

			$("#crystal-2").on("click", function(){
		$("#score").html(secondCrystal);
         if(secondCrystal >= randomNumber){
		alert("You Lose");
		losses++;
		$("#lossnumber").html(losses)
	};
		$("#crystal-3").on("click", function(){
		$("#score").html(thirdCrystal);
         if(thirdCrystal >= randomNumber){
		alert("You Lose");
		losses++;
		$("#lossnumber").html(losses)
	};
		$("#crystal-4").on("click", function(){
		$("#score").html(fourthCrystal);
        if(fourthCrystal >= randomNumber){
		alert("You Lose");
		losses++;
		$("#lossnumber").html(losses)
	};
		$("#crystal-5").on("click", function(){
		$("#score").html(fifthCrystal);
		if(randomNumber >= totalScore){
		alert("You Win");
		wins++;
		$("#winnumber").html(wins);
		$("#number").reset(newNumber);
	};
		if(totalScore >= randomNumber){
		alert("You Lose");
		losses++;
		$("#lossnumber").html(losses);
		
	};
	   
	
});
});		
});
});
});

});
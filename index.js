window.onload = function() {
	document.getElementById("leftBtn").onclick = leftBtnClick;
	document.getElementById("centerBtn").onclick = centerBtnClick;
	document.getElementById("rightBtn").onclick = rightBtnClick;
}

function leftBtnClick(){
	document.getElementById("leftPanel").className="leftPanelLeftScene";
	document.getElementById("rightPanel").className="rightPanelLeftScene";
}

function centerBtnClick(){
	document.getElementById("leftPanel").className="leftPanelBothScene";
	document.getElementById("rightPanel").className="rightPanelBothScene";
}

function rightBtnClick(){
	document.getElementById("leftPanel").className="leftPanelRightScene";
	document.getElementById("rightPanel").className="rightPanelRightScene";
}





var InputData = ''
var DetachData = [];
function submit(value){    
    InputData = value;
    DetachData = InputData.split(' ');    
    errorCheck();
};

function errorCheck(){
    var error = document.getElementById("error");
    if(DetachData.length != 3 || DetachData[2] === ""){                
        error.innerHTML = "입력값을 잘못 입력하셨습니다.";
        DetachData = [];
    } else {
        error.innerHTML = "";
    };

    if(isNaN(DetachData[1])){
        error.innerHTML = "입력값을 잘못 입력하셨습니다.";
        DetachData = [];
    } else {
        error.innerHTML = "";
    };

    if(DetachData[2] !== 'r' && DetachData[2] !== 'l' && DetachData[2] !== 'R' && DetachData[2] !== 'L'){
        error.innerHTML = "입력값을 잘못 입력하셨습니다.";
        DetachData = [];
    } else{
        error.innerHTML = "";
    };
}

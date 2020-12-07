var InputData = ''
var DetachData = [];
var text = [];
function submit(value){    
    InputData = value;
    DetachData = InputData.split(' ');    
    errorCheck();
    dataSet();
    if(DetachData[2].toLowerCase() == 'r') {
        pushRData()
    } else {
        pushLData()
    }
};

function dataSet(){
    // DetachData[0]에 입력 받은 문자를 1개씩 잘라서 배열에 넣음
    text = DetachData[0].split('')
    // DetachData[1]에 입력 받은 문자를 숫자로 변환 
    DetachData[1] = parseInt(DetachData[1]);
    
    if(DetachData[1] < 0 ){
        console.log("!23")            
        if(DetachData[2].toLowerCase() == 'r'){
            DetachData[2] = 'l';
        } else {
            DetachData[2] = 'r'
        }
        DetachData[1] = Math.abs(DetachData[1]);        
    }    
};

function pushLData(){
    for(var i = 0; i < DetachData[1]; i++){
        var temporary = [];
        for(var k = 0; k < text.length; k++){
            if(k != text.length - 1){
                    temporary[k] = text[k+1];
                } else {
                    temporary[k] = text[0];
                };  
            };
        text = temporary;
    }
};

function pushRData(){
    for(var i = 0; i < DetachData[1]; i++){
        var temporary = []
            for(var a = 1; a < text.length+1; a++){
                if(a != text.length){
                    temporary[text.length-a] = text[text.length-a-1];
                } else {
                    temporary[0] = text[text.length-1];
                }; 
            }                 
        text = temporary;
    }
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

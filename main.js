//랜덤번호 지정
//유저가 번호 입력 -> Go 라는 버튼 누름 
//맞추면 정답입니다.
// 랜덤번호 < 유저번호 -> Down!
// 랜덤번호 > 유저번호 -> UP!
// Reset을 누르면 게임 리셋
// 5번의 기회를 다쓰면 게임끝 -> 버튼 disabled
// 유저가 1~100 범위 밖 숫자를 입력 -> 알려주고,공지,기회를 깎지 않는다
// 유저가 이미 입력한 숫자를 다시 입력 -> 알려주고,기회를 깎지않는다

let computerNo = 0;
let playButton = document.getElementById("play-button")
let userInput = document.getElementById("play-input")
let resultArea = document.getElementById("result-area")
let resetButton = document.getElementById("reset-button")
let chances = 5
let resetChances = 5
let gameOver = false
let chanceArea = document.getElementById("chance-area")
let history=[]

playButton.addEventListener("click", play)
// click할때 play라는 함수를 불러온다.
userInput.addEventListener("focus",
function(){
    userInput.value=""})
resetButton.addEventListener("click",reset)

function pickRandomNo(){
    computerNo = Math.floor(Math.random()*100)+1;
    console.log("정답", computerNo);
}

function play(){
    let userValue = userInput.value;
    resultArea.style.display = "block"

    if(userValue<1 || userValue>100){
        resultArea.textContent = "숫자는 1이상 100이하값만 허용합니다!"
        return;
    }

    if(history.includes(userValue)){
        resultArea.textContent = "이미 입력한 숫자입니다 다른 숫자를 입력해주세요!"
        return;
    }

    chances --;
    chanceArea.textContent=`남은기회:${chances}번`;


    if(userValue < computerNo){
        resultArea.textContent = "UP!"
    } else if(userValue > computerNo){
        resultArea.textContent = "DOWN!"
    } else{
        resultArea.textContent = "정답입니다!"
        gameOver = true;
    }

    history.push(userValue)

    if(chances < 1){
        gameOver=true
    }

    if(gameOver == true){
        playButton.disabled = true
    }
}


function reset(){
    if ( window.location == 'http://172.30.1.18:5500/index.html' ) {
    window.location.href='http://172.30.1.18:5500/index.html';
  }
    //redirect 리다이렉트로 리셋
}
    
pickRandomNo();
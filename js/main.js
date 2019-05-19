'use strict';
{
  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const result = document.getElementById('result');
  let startTime;
  let isStarted = false;

  start.addEventListener('click', function(){
    if(isStarted === true){
      return;
    }
    isStarted = true;
    startTime = Date.now();
    this.className = 'pushed';
    stop.className = '';
    result.textContent = '0.000';
  });

  stop.addEventListener('click', function(){
    if(isStarted === false){
      return;
    }
    isStarted = false;
    let elapsedTime = (Date.now() - startTime) / 1000;
    result.textContent = elapsedTime.toFixed(3);
    this.className = 'pushed';
    start.className = '';
    // toFixed(3)で小数点第3位まで表示するよう設定
    let diff = elapsedTime - 5;
    if(Math.abs(diff) < 1.0){
      result.className = 'perfect';
    };
  });
}

'use strict';
{
  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const result = document.getElementById('result');
  let startTime;

  start.addEventListener('click', function(){
    startTime = Date.now();
  });

  stop.addEventListener('click', function(){
    let elapsedTime = (Date.now() - startTime) / 1000;
    result.textContent = elapsedTime.toFixed(3);
    // toFixed(3)で小数点第3位まで表示するよう設定
  });
}

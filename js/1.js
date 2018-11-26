var block = document.getElementById('btn-no');
var yes1 = document.getElementById('yes');

block.onmouseenter = function (){
//    console.log('enter');
    this.style.top = Math.floor(Math.random() * (320 - 30 + 1)) + 30 + 'px';
    this.style.right = Math.floor(Math.random() * (420 - 10 + 1)) + 10 + 'px';
}

yes1.onclick = function(){
    alert('Спасибо за обратную связь :)');
}
    
//    
//    function getRandomInt(min, max)
//
//{
//
//  return Math.floor(Math.random() * (max - min + 1)) + min;
//
//}

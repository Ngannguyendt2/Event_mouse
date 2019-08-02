let imgobj=document.getElementById('ball');
function init() {
    let imgobj=document.getElementById('ball');
    imgobj.style.position='relative';
   imgobj.style.left='0px';

}
function move() {
    imgobj.style.left=parseInt(imgobj.style.left)+10+'px';

}
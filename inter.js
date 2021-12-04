
function mufunc(elem,elem2){
    if (document.getElementById(elem).style.display=="inline"){
        $('#'+elem).fadeToggle(100,function(){
            $('#'+elem2).fadeToggle(100);
        })
    }
    else{
        $('#' +elem2).fadeToggle(100,function(){
            $('#' +elem).fadeToggle(100);
        })
    }
}

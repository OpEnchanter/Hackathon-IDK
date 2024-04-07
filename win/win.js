colors=["red","green","blue","purple","orange","grey", "gold"]
idx=0;
setInterval(function(){
    if (idx>=6) {
        idx=0;
    }
    else{
        idx++;
    }
    document.body.style="background-color: "+colors[idx]+";"

}, 300)
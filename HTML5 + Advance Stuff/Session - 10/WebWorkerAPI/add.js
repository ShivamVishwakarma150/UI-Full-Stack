this.onmessage = function(e){
    if(e.data!=undefined){
        this.postMessage({"addResult":e.data.arg1+e.data.arg2})
    }
}
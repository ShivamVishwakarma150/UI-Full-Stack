this.onmessage = function(e){
    const {data} =e;
    console.log(data);
    // Hello
    // ['H','e','l','l','o']
    let arr = Array.from(data); // Hello -> ['H','e','l','l','o']
    arr=arr.reverse(); // ['o','l','l','e','H']
    
    let revStr = arr.join(""); // ['o','l','l','e','H'] -> olleH 
    this.postMessage({"revAns":revStr});


}
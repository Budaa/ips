var test = function(len, number) {

  Array.prototype.fullLength = function() {
    var i = 0;
    this.forEach(function(element) {
      i += element.length;
    })
    return i;
  }

  var proccessIp = function(address) {
    var ip = address;
    //check if position can be moved
    var moveable = function(position) {
      //if string length is 1 or smaller the position isn't moveable
      if(ip[position].length <= 1) {
        return false;
      }
      //numbers from 1st position arent moveable
      if(position === 0) {
        return false;
      }
      //if moved number will create number over 255
      if(parseInt(ip[position-1]+ip[position].charAt(0)) > 255){
        return false;
      }
      return true;
    }

    var move = function(position) {
      ip[position-1] = ip[position-1] + ip[position].charAt(0);
      ip[position] = ip[position].substr(1);
      return true;
    }
    console.log("Starting ip: ", ip)
    //counter of unmoveable positions
    var falseCounter = 0;

    //main core
    while(falseCounter < 4) {
      //for evry position
      for(var i = 3; i>=0; i--) {
        if(moveable(i)){
          falseCounter = 0;
          move(i);
          i=3;
          console.log(ip);
        }else{
          falseCounter++;
        }
      }
    }
  }

  var nextIp = function(address, i) {
    if ( i === 'undefined' ){
      var i = 3;
    }
    for (i; i>0; i--) {
      if(address[i].length === address[i-1].length){
        nextIp(address, i-1)
      }else if (address[i-1].length === 3){
        nextIp(address, i-1)
      }else if (address[i].length > address[i-1].length) {
        address[i-1] += address[i].charAt(0);
        address[i] = address[i].substr(1);
        address[i] += number.charAt(address.fullLength());
        return;
      }
    }

    if(address[3].length != 3) {
      address[3] += address.fullLength();
      return address;
    }else {
      return false;
    }
  }
  //basic ip
  var ip = [number.charAt(0),number.charAt(1),number.charAt(2),number.charAt(3)];
  var loop = function(ip) {
    proccessIp(ip);
    if(ip = nextIp(ip)){
      console.log(ip);
      loop(ip);
    }
    return;
  }
  loop(ip);


}
// main(10, '8736076697');
test(6, '112451');

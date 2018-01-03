
String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

function convertToRoman() {
    
  var num = document.querySelector('#input').value;
  var answer = document.querySelector('#answer');
    
  var numStr =  "";
  var romanNumerals = ['M','D','C','L','X','V','I'];
  var romanNumeralsArr = [1000,500,100,50,10,5,1];
  var quotient = [];
  var step2;
    
  for(var i=0; i< romanNumeralsArr.length; i++) {
    quotient.push(Math.floor(num/romanNumeralsArr[i]));
    num = num%romanNumeralsArr[i];
  }
  
  step2 = quotient.slice();
  
  for(var j = 1; j< step2.length; j++){
    if(step2[j]>3) {
      step2[j-1]++;
      step2[j]-=3;
      if(j>1) {
        if(step2[j-1]*romanNumeralsArr[j-1] == romanNumeralsArr[j-2]) {
          step2[j-2]++;
          step2[j-1] = 0;
        }
      }
    }
  }
    
  for(var x = 0; x<step2.length; x++) {
      for(var z = 0; z<step2[x]; z++) {
          numStr += romanNumerals[x];
      }
  }
    var temp = "";
    var tempIndex;
    for(i = 0; i<quotient.length; i++) {
        if(quotient[i] == 4) {
            tempIndex = numStr.indexOf(romanNumerals[i]);
            temp = numStr.charAt(tempIndex-1);
            numStr = numStr.replaceAt(tempIndex-1,numStr.charAt(tempIndex));
            numStr = numStr.replaceAt(tempIndex,temp);
        }
    }
 
    answer.innerHTML = numStr;
    
}
    






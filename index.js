var n = 0
function takeANumber(katzDeliLine) {n++
    katzDeliLine.push(n)
    
  return `Welcome. You are number ${n} in line.`
}
function nowServing(katzDeliLine) { var i=0; 
if (katzDeliLine.length===0) {return "There is nobody waiting to be served!"}
else {return `Currently serving ${katzDeliLine.shift()}.`}
}
function currentLine(katzDeliLine) {var line = []; var i=0;
 while(katzDeliLine.length>i){line.push(` `+[i+1]+`. `  +katzDeliLine[i])
   i++
 } 
 if(katzDeliLine.length ===0){return "The line is currently empty."}
else {return "The line is currently:" + line}
 }
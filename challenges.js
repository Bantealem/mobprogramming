function birthdayCakeCandles(candles) {
    // Write your code here
    let highest = -Infinity;
  for(let i of candles) 
    if(i > highest)  highest = i;   
    return candles.filter(v => v === highest).length;
}

module.exports = function toReadable (number) {
  let out = '';


  let ones = number % 10;
  let tens = Math.floor(number / 10) % 10;
  let hundreds = Math.floor(number / 100);


  // HUNDREDS
  switch(hundreds){
    case 0:
      out += '';
      break;
    case 1:
      out += 'one hundred';
      break;
    case 2:
      out += 'two hundred'
      break;
    case 3:
      out += 'three hundred';
      break;
    case 4:
      out += 'four hundred';
      break;
    case 5:
      out += 'five hundred';
      break;
    case 6:
      out += 'six hundred';
      break;
    case 7:
      out += 'seven hundred';
      break;
    case 8:
      out += 'eight hundred';
      break;
    case 9:
      out += 'nine hundred';
      break;
}
  if ((hundreds != 0) && ((tens != 0) || (ones != 0))) {
    out += ' ';
  }

// TENS
  if (tens != 1) {
      switch(tens){
    case 0:
      out += '';
      break;
    case 2:
      out += 'twenty'
      break;
    case 3:
      out += 'thirty';
      break;
    case 4:
      out += 'forty';
      break;
    case 5:
      out += 'fifty';
      break;
    case 6:
      out += 'sixty';
      break;
    case 7:
      out += 'seventy';
      break;
    case 8:
      out += 'eighty';
      break;
    case 9:
      out += 'ninety';
      break;
    }
  }


  if ((ones != 0) && (tens > 1) ) {
    out += ' ';
  }
  // ONES
  if (tens != 1) {
    switch(ones){
      case 0:
        out += '';
        break;
      case 1:
        out += 'one';
        break;
      case 2:
        out += 'two'
        break;
      case 3:
        out += 'three';
        break;
      case 4:
        out += 'four';
        break;
      case 5:
        out += 'five';
        break;
      case 6:
        out += 'six';
        break;
      case 7:
        out += 'seven';
        break;
      case 8:
        out += 'eight';
        break;
      case 9:
        out += 'nine';
        break;
    }
  }

  if (tens == 1) {
    switch(ones){
      case 0:
        out += 'ten';
        break;
      case 1:
        out += 'eleven';
        break;
      case 2:
        out += 'twelve'
        break;
      case 3:
        out += 'thirteen';
        break;
      case 4:
        out += 'fourteen';
        break;
      case 5:
        out += 'fifteen';
        break;
      case 6:
        out += 'sixteen';
        break;
      case 7:
        out += 'seventeen';
        break;
      case 8:
        out += 'eighteen';
        break;
      case 9:
        out += 'nineteen';
        break;
    }
  }
  
//ZERO

  if (number == 0) {
    out = 'zero';
  }

  return out;
}

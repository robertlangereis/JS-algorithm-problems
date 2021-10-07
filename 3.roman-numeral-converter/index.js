function convertToRoman(num) {
    let summaryNumber = num
    const romanArray = []
    // loop thousands
    for(var i = 0; summaryNumber >= 1000; i++) {
        const remainder = summaryNumber % 1000
        const divideThousands = (summaryNumber - remainder) / 1000
        summaryNumber -= (divideThousands * 1000)
        for (var i = 0; i < divideThousands; i++) {
            romanArray.push('M');
        }
    }
    // loop hundreds
    for(var i = 0; summaryNumber > 100; i++) {
        const remainder = summaryNumber % 100
        const divideHundreds = (summaryNumber - remainder) / 100
        summaryNumber -= (divideHundreds * 100)
        switch (divideHundreds) {
            case 1:
            romanArray.push('C');
            break;
            case 2:
            romanArray.push('CC');
            break;
            case 3:
            romanArray.push('CCC');
            break;
            case 4:
            romanArray.push('CD');
            break;
            case 5:
            romanArray.push('D');
            break;
            case 6:
            romanArray.push('DC');
            break;
            case 7:
            romanArray.push('DCC');
            break;
            case 8:
            romanArray.push('DCCC');
            break;
            case 9:
            romanArray.push('CM');
            break;
            default:
            break;
        }
       }
       // loop tens
       for(var i = 0; summaryNumber > 10; i++) {
        const remainder = summaryNumber % 10 
        const divideTens = (summaryNumber - remainder) / 10
        summaryNumber -= (divideTens * 10)
        switch (divideTens) {
            case 1:
            romanArray.push('X');
            break;
            case 2:
            romanArray.push('XX');
            break;
            case 3:
            romanArray.push('XXX');
            break;
            case 4:
            romanArray.push('XL');
            break;
            case 5:
            romanArray.push('L');
            break;
            case 6:
            romanArray.push('LX');
            break;
            case 7:
            romanArray.push('LXX');
            break;
            case 8:
            romanArray.push('LXXX');
            break;
            case 9:
            romanArray.push('XC');
            break;
            default:
            break;
        }
       }
       // loop ones
       for(var i = 0; summaryNumber > 0; i++) {
        const divideOnes = summaryNumber / 1
        summaryNumber -= divideOnes
        switch (divideOnes) {
            case 1:
            romanArray.push('I');
            break;
            case 2:
            romanArray.push('II');
            break;
            case 3:
            romanArray.push('III');
            break;
            case 4:
            romanArray.push('IV');
            break;
            case 5:
            romanArray.push('V');
            break;
            case 6:
            romanArray.push('VI');
            break;
            case 7:
            romanArray.push('VII');
            break;
            case 8:
            romanArray.push('VIII');
            break;
            case 9:
            romanArray.push('IX');
            break;
            default:
            break;
        }
       }
    return romanArray.join('');
   }
   
   convertToRoman(1000);
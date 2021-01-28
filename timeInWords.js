function timeInWords(h, m) {
    let mins_dict = {
        13: 'thirteen', 14: 'fourteen', 15: 'quarter', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen', 20: 'twenty', 21: 'twenty one', 22: 'twenty two', 23: 'twenty three', 24: 'twenty four', 25: 'twenty five', 26: 'twenty six', 27 : 'twenty seven', 28: 'twenty eight', 29: 'twenty nine', 30: 'half'  }
    let hours_dict = {0: 'o\' clock',1: 'one', 2:'two', 3:'three', 4:'four', 5:'five', 6:'six', 7: 'seven', 8:'eight', 9:'nine', 10:'ten', 11:'eleven', 12: 'twelve'}
    let output_str = '';
    if(m===0)output_str = hours_dict[h] + ' '+hours_dict[0]
    else if(m>30)output_str = (60-m<=12?hours_dict[60-m]:mins_dict[60-m])  + (60-m===1?' minute ': ((60-m)%15===0?' ': ' minutes ')) + 'to '+ hours_dict[h+1];
    else{
        output_str = (m<=12?hours_dict[m]:mins_dict[m]) + (m===1?' minute ': (m%15===0?' ': ' minutes ')) + 'past '+ hours_dict[h];
    }
    return(output_str);

}
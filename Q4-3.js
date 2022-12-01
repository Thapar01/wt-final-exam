const reversedNumber = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);
console.log(reversedNumber(321));

//normal function

function reversedNum(num)
{
    return (
        parseFloat(
            num
                .toString()
                .split('')
                .reverse()
                .join('')
        ) * Math.sign(num)
    )
}
console.log(reversedNum(-321));
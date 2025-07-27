
function handleNum(num, evenCb, oddCb) {

    if (num % 2 === 0) {
        evenCb();
    } else {
        oddCb();
    }
}

function handleEven() {
    console.log(`Number is even`);
}

function handleOdd() {
    console.log(`Number is odd`);
}

handleNum(7, handleEven, handleOdd);
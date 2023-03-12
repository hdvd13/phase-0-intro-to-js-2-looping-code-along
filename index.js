// Code your solutions in this file
function writeCards(array, event) {
    const messages = [];
    for (let i = 0; i < array.length; i++) {
        messages[i] = `Thank you, ${array[i]}, for the wonderful ${event} gift!`;
    }
    return messages;
};

function countDown(number) {
    while (number > -1) {
        console.log(number--);
    }
}
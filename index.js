function handelTicket(ticket, isIncrease) {
    const ticketInput = document.getElementById(ticket + '-ticket-count');
    const ticketCount = parseInt(ticketInput.value);
    let newticketCount = ticketCount;
    if (isIncrease == true) {
        newticketCount = ticketCount + 1;
    } if (isIncrease == false && ticketCount > 0) {
        newticketCount = ticketCount - 1;
    }
    ticketInput.value = newticketCount;
    let ticketTotalValue = newticketCount;
    if (ticket == 'firstClass') {
        ticketTotalValue = newticketCount * 150;
    }
    if (ticket == 'economy') {
        ticketTotalValue = newticketCount * 100;
    }
    document.getElementById(ticket + '-ticket-total-value').innerText = ticketTotalValue;
    calculateSubtotal();
}

function calculateSubtotal() {
    const subTotalPirce = getInputValue('firstClass') * 150 + getInputValue('economy') * 100;
    document.getElementById('sub-total-price').innerText = subTotalPirce;
    document.getElementById('modal-sub-total-price').innerText = subTotalPirce;
    const vat = Math.round(subTotalPirce * 0.1);
    document.getElementById('vat-amount').innerText = vat;
    document.getElementById('modal-vat-amount').innerText = vat;
    const grandTotal = subTotalPirce + vat;
    document.getElementById('grand-total').innerText = grandTotal;
    document.getElementById('modal-grand-total').innerText = grandTotal;
}

function getInputValue(ticket) {
    const ticketInput = document.getElementById(ticket + '-ticket-count');
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}

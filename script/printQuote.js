const list = document.querySelectorAll('[data-list]');

function selectQuote(name, value) {
    list.forEach((chosenList) => {
        if (chosenList.id == name) {
            printQuote(chosenList, name, value);
        }
    })
}

function printQuote(list, name, value) {
    list.innerHTML = '';
    const plurals = {
        "dollar": "dollars",
        "yen": "yen"
    }
    for (let multiplier = 1; multiplier <= 1000; multiplier *= 10) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${multiplier} ${multiplier == 1 ? name : plurals[name]}: R$${(value * multiplier).toFixed(2)}`
        list.appendChild(listItem)
    }
}

export default selectQuote;

const totalScoreElement = document.querySelector('.total-score');
const summeryItemsElement = document.querySelector('.summery-items');

async function loadData() {
    const response = await fetch('data.json');
    const results = await response.json();
    renderResults(results);
}

function renderResults(data) {
    String.prototype.toLowerCase();

    let sum = 0;
    data.forEach(element => {
        const summeryItemElement = `
        <div class="summary-item summary-${element.category.toLowerCase()}">
        <h4>${element.category}</h4>
        <p class="summary-score"><span>${element.score}</span> / 100</p>
        </div>
        `;

        summeryItemsElement.innerHTML += summeryItemElement;
        sum += Number.parseInt(element.score);
    });

    const totalScore = Math.floor(sum / data.length);

    totalScoreElement.innerText = totalScore;

}

loadData();
const divisas = [
    { name: "EUR/USD" },
    { name: "GBP/USD" },
    { name: "AUD/CAD" },
    { name: "EUR/AUD" },
    { name: "GBP/JPY" },
    { name: "NZD/CAD" },
    { name: "EUR/GBP" },
    { name: "USD/JPY" },
    { name: "EUR/JPY" },
    { name: "AUD/JPY" },
    { name: "NZD/USD" },
    { name: "NZD/JPY" },
    { name: "GBP/CAD" },
    { name: "AUD/USD" },
    { name: "USD/CAD" },
    { name: "GBP/CHF" },
    { name: "USD/CHF" },
    { name: "CAD/JPY" },
    { name: "XAU/USD" },
];

const tableBody = document.getElementById('table-body');

divisas.forEach((divisa, index) => {
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${divisa.name}
            <button class="toggle-btn" onclick="toggleRow(this)">Ocultar</button>
        </td>
        <td class="details">
            <select onchange="updateTotal(${index})">
                <option value="" disabled selected>Seleccionar</option>
                <option value="bullish">Alcista</option>
                <option value="bearish">Bajista</option>
            </select>
            <ul class="checklist">
                <li><input type="checkbox" id="check-1-${index}"><label for="check-1-${index}">Toca ZDI</label><input type="number" class="percentage-input" oninput="updateTotal(${index})"></li>
                <li><input type="checkbox" id="check-2-${index}"><label for="check-2-${index}">Toca EMA</label><input type="number" class="percentage-input" oninput="updateTotal(${index})"></li>
                <li><input type="checkbox" id="check-3-${index}"><label for="check-3-${index}">Vela de rechazo</label><input type="number" class="percentage-input" oninput="updateTotal(${index})"></li>
                <li><input type="checkbox" id="check-4-${index}"><label for="check-4-${index}">Rechazo UPE</label><input type="number" class="percentage-input" oninput="updateTotal(${index})"></li>
                <li><input type="checkbox" id="check-5-${index}"><label for="check-5-${index}">N° Psicológico</label><input type="number" class="percentage-input" oninput="updateTotal(${index})"></li>
            </ul>
        </td>
        <td class="details">
            <select onchange="updateTotal(${index})">
                <option value="" disabled selected>Seleccionar</option>
                <option value="bullish">Alcista</option>
                <option value="bearish">Bajista</option>
            </select>
            <ul class="checklist">
                <li><input type="checkbox" id="check-6-${index}"><label for="check-6-${index}">Toca ZDI</label><input type="number" class="percentage-input" oninput="updateTotal(${index})"></li>
                <li><input type="checkbox" id="check-7-${index}"><label for="check-7-${index}">Toca EMA</label><input type="number" class="percentage-input" oninput="updateTotal(${index})"></li>
                <li><input type="checkbox" id="check-8-${index}"><label for="check-8-${index}">Vela de rechazo</label><input type="number" class="percentage-input" oninput="updateTotal(${index})"></li>
                <li><input type="checkbox" id="check-9-${index}"><label for="check-9-${index}">Rechazo UPE</label><input type="number" class="percentage-input" oninput="updateTotal(${index})"></li>
                <li><input type="checkbox" id="check-10-${index}"><label for="check-10-${index}">N° Psicológico</label><input type="number" class="percentage-input" oninput="updateTotal(${index})"></li>
            </ul>
        </td>
        <td class="details">
            <select onchange="updateTotal(${index})">
                <option value="" disabled selected>Seleccionar</option>
                <option value="bullish">Alcista</option>
                <option value="bearish">Bajista</option>
            </select>
            <ul class="checklist">
                <li><input type="checkbox" id="check-11-${index}"><label for="check-11-${index}">Toca ZDI</label><input type="number" class="percentage-input" oninput="updateTotal(${index})"></li>
                <li><input type="checkbox" id="check-12-${index}"><label for="check-12-${index}">Toca EMA</label><input type="number" class="percentage-input" oninput="updateTotal(${index})"></li>
                <li><input type="checkbox" id="check-13-${index}"><label for="check-13-${index}">Vela de rechazo</label><input type="number" class="percentage-input" oninput="updateTotal(${index})"></li>
                <li><input type="checkbox" id="check-14-${index}"><label for="check-14-${index}">Rechazo UPE</label><input type="number" class="percentage-input" oninput="updateTotal(${index})"></li>
                <li><input type="checkbox" id="check-15-${index}"><label for="check-15-${index}">N° Psicológico</label><input type="number" class="percentage-input" oninput="updateTotal(${index})"></li>
            </ul>
        </td>
        <td class='percentage' id="total-${index}">0%</td>
    `;

    tableBody.appendChild(row);
});

function toggleRow(element) {
    const row = element.closest('tr');
    const details = row.querySelectorAll('.details');
    const isVisible = details[0].style.display === 'table-cell' || details[0].style.display === '';

    details.forEach(detail => {
        if (isVisible) {
            detail.style.display = 'none';
            element.textContent = 'Mostrar';
        } else {
            detail.style.display = 'table-cell';
            element.textContent = 'Ocultar';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const selects = document.querySelectorAll('select');

    selects.forEach(select => {
        updateSelectColor(select);

        select.addEventListener('change', () => {
            updateSelectColor(select);
        });
    });

    function updateSelectColor(select) {
        const selectedOption = select.options[select.selectedIndex];
        if (selectedOption.value === 'bullish') {
            select.style.backgroundColor = 'lightgreen';
            select.style.color = 'black';
        } else if (selectedOption.value === 'bearish') {
            select.style.backgroundColor = 'lightcoral';
            select.style.color = 'white';
        } else {
            select.style.backgroundColor = '';
            select.style.color = '';
        }
    }
});

function updateTotal(rowIndex) {
    const row = document.querySelectorAll(`#table-body tr`)[rowIndex];
    const selectWeekly = row.querySelectorAll('td.details select')[0];
    const selectDaily = row.querySelectorAll('td.details select')[1];
    const select4h = row.querySelectorAll('td.details select')[2];

    const options = [selectWeekly.value, selectDaily.value, select4h.value];
    let total = 0;

    if (options[0] === options[1] && options[1] === options[2]) {
        total += 30;
    } else {
        if (options[0] === options[1]) total += 20;
        if (options[1] === options[2]) total += 20;
    }

    row.querySelectorAll('.percentage-input').forEach(input => {
        total += Number(input.value) || 0;
    });

    document.getElementById(`total-${rowIndex}`).textContent = `${total}%`;
}
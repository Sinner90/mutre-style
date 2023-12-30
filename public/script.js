document.addEventListener('DOMContentLoaded', function () {





  async function deleteAll() {

    const totalNull = 0;
    document.getElementById('resultDetails').textContent = `Preis: ${totalNull.toFixed(2)} € / Pfand: ${totalNull.toFixed(2)} €`;
    document.getElementById('result').textContent = `Summe: ${totalNull.toFixed(2)} €`;

    resetTableSelectValues('productsTable1');
    resetTableSelectValues('productsTable2');
    resetTableSelectValues('productsTable3');
    resetTableSelectValues('productsTable4');

    function resetTableSelectValues(tableId) {
      const rows = document.getElementById(tableId).rows;
  
      for (let i = 1; i < rows.length; i++) {
          const selectElementPrice = rows[i].cells[3].querySelector('select');
          selectElementPrice.value = totalNull;
  
          const selectElementDeposit = rows[i].cells[4].querySelector('select');
          selectElementDeposit.value = totalNull;
      }
  }
  

  }

  // Füge einen Event-Handler zum Button hinzu
  document.getElementById('deleteButton').addEventListener('click', deleteAll);


});

//  ==================================
//  Nav Bar
//  ----------------------------------

document.addEventListener('DOMContentLoaded', function () {
  // ... Ihr anderer Code ...

  // Elemente aus dem DOM abrufen
  const navLinks = document.querySelectorAll('.nav-link');

  // Funktion zum Umschalten des Inhalts und Markieren der aktiven Seite
  function switchContent(contentId) {
    // Verstecke alle Hauptinhalte
    const mainContent = document.querySelector('.main-content');
    const allMainContent = document.querySelectorAll('.main-content');
    allMainContent.forEach(content => {
      content.style.display = 'none';
    });

    // Zeige den ausgewählten Hauptinhalt
    const selectedContent = document.getElementById(contentId);
    if (selectedContent) {
      selectedContent.style.display = 'block';
    }

    // Markiere die aktive Seite in der Navbar
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('data-content') === contentId) {
        link.classList.add('active');
        document.getElementById("gridConfigContainer").style.display = "none";
      }
    });
  }

  // Initialisiere das Umschalten des Inhalts
  switchContent('content1'); // Standardinhalt anzeigen

  

  // Füge Klickereignisse für die Navbar-Elemente hinzu
  navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault(); // Verhindere das Standardverhalten des Links
      const contentId = this.getAttribute('data-content'); // Hole den Wert des data-content-Attributs
      switchContent(contentId); // Umschalten des Inhalts
    });
  });
});



//  ==================================
//  Login
//  ----------------------------------

function checkPasswordAndShowGrid() {
  const enteredPassword = prompt("Bitte geben Sie das Passwort ein:");

  // Wenn du das liest "FICK DICH!!!"

  // Hatte keine Lust einen komplexen LOGIN zu erstellen ;)

  const correctPassword = "4545"; 

  if (enteredPassword === correctPassword) {
    document.getElementById("gridConfigContainer").style.display = "grid";
  } else {
    alert("Falsches Passwort. Zugriff verweigert.");
  }
}

function updatePrice() {
  const drinkId = document.getElementById('drinkId').value;
  const newPrice = document.getElementById('newPrice').value;

  // Beispiel: Hier würde normalerweise eine API-Anfrage an den Server gesendet werden
  // Für die Einfachheit des Beispiels verwenden wir eine Dummy-Funktion
  updatePriceOnServer(drinkId, newPrice);

  updateProduct(1, 1, 7.0, 7.0);
}

function updatePriceOnServer(id, price) {
  // Beispiel: Hier würde normalerweise eine AJAX-Anfrage an den Server gesendet werden
  // Für die Einfachheit des Beispiels verwenden wir fetch
  fetch('/updatePrice', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: id,
      price: price,
    }),
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      alert('Preis erfolgreich aktualisiert!');
    } else {
      alert('Fehler beim Aktualisieren des Preises.');
    }
  })
  .catch(error => {
    console.error('Fehler:', error);
    alert('Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.');
  });
}










// Beispiel für eine POST-Anfrage an die API zum Aktualisieren von Preisen und Pfand
const updateProduct = async (table, id, price, deposit) => {
  const url = '/updateProduct';

  const requestBody = {
    table,
    id,
    price,
    deposit,
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Request failed with status ${response.status}: ${errorMessage}`);
    }

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
};










document.addEventListener('DOMContentLoaded', function () {

const routePath1 = '/getPrices/products1'; // Beispiel-Pfad, ersetze ihn durch den gewünschten Pfad
const tableId1 = 'productsTable1'; // Beispiel-Tabellen-ID, ersetze sie durch die gewünschte ID
fetchData(routePath1, tableId1);

const routePath2 = '/getPrices/products2'; // Beispiel-Pfad, ersetze ihn durch den gewünschten Pfad
const tableId2 = 'productsTable2'; // Beispiel-Tabellen-ID, ersetze sie durch die gewünschte ID
fetchData(routePath2, tableId2);

const routePath3 = '/getPrices/products3'; // Beispiel-Pfad, ersetze ihn durch den gewünschten Pfad
const tableId3 = 'productsTable3'; // Beispiel-Tabellen-ID, ersetze sie durch die gewünschte ID
fetchData(routePath3, tableId3);

const routePath4 = '/getPrices/products4'; // Beispiel-Pfad, ersetze ihn durch den gewünschten Pfad
const tableId4 = 'productsTable4'; // Beispiel-Tabellen-ID, ersetze sie durch die gewünschte ID
fetchData(routePath4, tableId4);

function fetchData(route, tableId) {
    fetch(route)
        .then(response => response.json())
        .then(data => displayData(data, tableId));
}

function displayData(data, tableId) {
    const table = document.getElementById(tableId);

      // Lösche vorhandene Zeilen
      while (table.rows.length > 1) {
          table.deleteRow(1);
      }

      // Füge neue Daten ein
      data.forEach(product => {
          const row = table.insertRow(-1);
          const nameCell = row.insertCell(0);
          const priceCell = row.insertCell(1);
          const depositPriceCell = row.insertCell(2);
          const amountCell = row.insertCell(3);
          const depositCell = row.insertCell(4);

          nameCell.textContent = product.name;
          priceCell.textContent = product.price.toFixed(1) + ' €';
          depositPriceCell.textContent = product.deposit.toFixed(1) + ' €';;

          const selectAmount = document.createElement('select');
          for (let i = 0; i <= 10; i++) {
              const option = document.createElement('option');
              option.value = i;
              option.textContent = i;
              selectAmount.appendChild(option);
          }
          amountCell.value = 0;
          amountCell.appendChild(selectAmount);

          const selectDeposit = document.createElement('select');
          for (let i = -10; i <= 10; i++) {
              const option = document.createElement('option');
              option.value = i;
              option.textContent = i;
              selectDeposit.appendChild(option);
          }
          selectDeposit.value = 0;
          depositCell.appendChild(selectDeposit);
      });
}

  document.getElementById('calculateButton').addEventListener('click', function () {
    const total1 = calculateAndDisplayTotal('productsTable1');
    const total2 = calculateAndDisplayTotal('productsTable2');
    const total3 = calculateAndDisplayTotal('productsTable3');
    const total4 = calculateAndDisplayTotal('productsTable4');

    const globalTotalSum = total1.totalSum + total2.totalSum + total3.totalSum + total4.totalSum;
    const globalTotalPrice = total1.totalPrice + total2.totalPrice + total3.totalPrice + total4.totalPrice;
    const globalTotalDeposit = total1.totalDeposit + total2.totalDeposit + total3.totalDeposit + total4.totalDeposit;

    document.getElementById('resultDetails').textContent = `Preis: ${globalTotalPrice.toFixed(2)} € / Pfand: ${globalTotalDeposit.toFixed(2)} €`;
    document.getElementById('result').textContent = `Summe: ${globalTotalSum.toFixed(2)} €`;
  });

  function calculateAndDisplayTotal(tableId) {
    const rows = document.getElementById(tableId).rows;
    let totalPrice = 0;
    let totalDeposit = 0;

    for (let i = 1; i < rows.length; i++) {
        const select = rows[i].cells[3].querySelector('select');
        const selectedValue = parseInt(select.value);
        const calculatedPrice = parseFloat(rows[i].cells[1].textContent) * selectedValue;
        totalPrice += calculatedPrice;

        const selectDeposit = rows[i].cells[4].querySelector('select');
        const selectedValueDeposit = parseInt(selectDeposit.value);
        const calculatedDepositPrice = parseFloat(rows[i].cells[2].textContent) * selectedValueDeposit;
        totalDeposit += calculatedDepositPrice;
    }

    const totalSum = totalPrice + totalDeposit;

    return { totalPrice, totalDeposit, totalSum };
  }

});
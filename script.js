// SAMPLE DATA (PHH)


const rationData = [
  {
    mukhiya: 'Radha Devi',
    card: '2143-XXXX-3987',
    units: 4,
    category: 'PHH',
    village: 'Shivnagar',
  },
  {
    mukhiya: 'Geeta Sharma',
    card: '2143-XXXX-3990',
    units: 3,
    category: 'BPL',
    village: 'Shivnagar',
  },
  
  {
    mukhiya: 'Geeta Sharma',
    card: '2143-XXXX-3990',
    units: 3,
    category: 'BPL',
    village: 'Shivnagar',
  },

];

// SAMPLE DATA (AAY)
const aayData = [
  {
    mukhiya: 'Sita Devi',
    card: '5533-2200-1122',
    units: 1,
    category: 'AAY',
    village: 'Rampur',
  },
  {
    mukhiya: 'Sita Devi',
    card: '5533-2200-1122',
    units: 1,
    category: 'AAY',
    village: 'Rampur',
  },
  {
    mukhiya: 'Sita Devi',
    card: '5533-2200-1122',
    units: 1,
    category: 'AAY',
    village: 'Rampur',
  },
];

// FILL TABLE 1
function loadPHHTable () {
  const body = document.getElementById ('resultBody');
  body.innerHTML = '';

  rationData.forEach ((item, index) => {
    body.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${item.mukhiya}</td>
        <td>${item.card}</td>
        <td>${item.units}</td>
        <td>${item.category}</td>
        <td>${item.village}</td>
        <td><span class="download-btn" onclick="downloadCard('${item.card}')">⬇</span></td>
      </tr>
    `;
  });
}

// FILL TABLE 2
function loadAAYTable () {
  const body = document.getElementById ('secondTableBody');
  body.innerHTML = '';

  aayData.forEach ((item, index) => {
    body.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${item.mukhiya}</td>
        <td>${item.card}</td>
        <td>${item.units}</td>
        <td>${item.category}</td>
        <td>${item.village}</td>
        <td><span class="download-btn" onclick="downloadCard('${item.card}')">⬇</span></td>
      </tr>
    `;
  });
}

// SEARCH
function searchByName () {
  const value = document.getElementById ('searchInput').value.toLowerCase ();

  const filtered = rationData.filter (item =>
    item.mukhiya.toLowerCase ().includes (value)
  );

  const body = document.getElementById ('resultBody');
  body.innerHTML = '';

  filtered.forEach ((item, index) => {
    body.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${item.mukhiya}</td>
        <td>${item.card}</td>
        <td>${item.units}</td>
        <td>${item.category}</td>
        <td>${item.village}</td>
        <td><span class="download-btn" onclick="downloadCard('${item.card}')">⬇</span></td>
      </tr>
    `;
  });
}

// DOWNLOAD
function downloadCard (cardNo) {
  alert ('Downloading Ration Card: ' + cardNo);
}



// INIT
window.onload = function () {
  loadPHHTable ();
  loadAAYTable ();
};

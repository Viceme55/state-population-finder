const searchInput = document.querySelector('#search');
const sortSelect = document.querySelector('#sort');
const results = document.querySelector('#results');
const status = document.querySelector('#status');
let states = [];

function parseCSV(text) {
  const lines = text.trim().split(/\r?\n/);
  const headers = lines.shift().split(',');
  const nameIndex = headers.indexOf('NAME');
  const populationIndex = headers.indexOf('POPESTIMATE2024');
  if (nameIndex === -1 || populationIndex === -1) throw new Error('Required CSV columns missing');
  return lines.map(line => {
    const fields = line.split(',');
    return { name: fields[nameIndex].trim(), population: Number(fields[populationIndex]) };
  }).filter(state => state.name && Number.isFinite(state.population));
}

function render() {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = states.filter(state => state.name.toLowerCase().includes(query));
  if (sortSelect.value === 'high') filtered.sort((a,b) => b.population - a.population);
  else if (sortSelect.value === 'low') filtered.sort((a,b) => a.population - b.population);
  else filtered.sort((a,b) => a.name.localeCompare(b.name));
  results.replaceChildren();
  for (const state of filtered) {
    const item = document.createElement('li');
    const name = document.createElement('strong');
    const population = document.createElement('span');
    name.textContent = state.name;
    population.textContent = state.population.toLocaleString('en-US');
    item.append(name, population);
    results.append(item);
  }
  status.textContent = `${filtered.length} of ${states.length} states shown`;
}

searchInput.addEventListener('input', render);
sortSelect.addEventListener('change', render);
fetch('data/states.csv')
  .then(response => { if (!response.ok) throw new Error('Could not load CSV'); return response.text(); })
  .then(text => { states = parseCSV(text); render(); })
  .catch(error => { status.textContent = `Error: ${error.message}. Run the project using a local web server.`; });

let gameRunning = false;
let mapWidth = 10;
let mapHeight = 10;
let tileSize = 64;
let tiles = [];

function startGame() {
  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = mapWidth * tileSize;
  canvas.height = mapHeight * tileSize;

  generateMap();
  renderMap(ctx);
  gameRunning = true;

  // Add basic player unit
  ctx.fillStyle = 'red';
  ctx.beginPath();
  ctx.arc(3 * tileSize + 32, 3 * tileSize + 32, 20, 0, Math.PI * 2);
  ctx.fill();
}

function generateMap() {
  tiles = [];
  for (let y = 0; y < mapHeight; y++) {
    const row = [];
    for (let x = 0; x < mapWidth; x++) {
      row.push({ type: 'grass' });
    }
    tiles.push(row);
  }
}

function renderMap(ctx) {
  for (let y = 0; y < mapHeight; y++) {
    for (let x = 0; x < mapWidth; x++) {
      let tile = tiles[y][x];
      ctx.fillStyle = tile.type === 'grass' ? '#228B22' : '#777';
      ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
      ctx.strokeStyle = '#444';
      ctx.strokeRect(x * tileSize, y * tileSize, tileSize, tileSize);
    }
  }
}

function saveGame() {
  alert('Save functionality coming soon!');
}

function loadGame() {
  alert('Load functionality coming soon!');
}
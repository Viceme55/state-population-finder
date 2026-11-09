# State Population Finder

A mobile-friendly web app showing 2024 U.S. Census population estimates for 20 states. Search by state name and sort by population or alphabetically.

## Files
- `index.html`: app screen
- `css/style.css`: mobile layout
- `js/app.js`: CSV loading, searching, sorting
- `data/states.csv`: cleaned 20-state dataset
- `screenshots/`: place your **real** emulator screenshot here

## Run locally
Open the project folder in Visual Studio Code. In a terminal, run `python -m http.server 8000` (or `py -m http.server 8000` on Windows). Open `http://localhost:8000` in a browser. Do not double-click `index.html` because browsers can block `fetch()` for local files.

## Mobile testing and screenshot
In Chrome, open Developer Tools (F12), toggle Device Toolbar (Ctrl+Shift+M), select a phone size, refresh, and capture a screenshot. This is **browser mobile emulation**, not a native Android emulator. If your instructor requires an Android emulator, open the site in an Android Studio virtual device browser, using `http://10.0.2.2:8000` for the host computer's local server.

## Suggested real GitHub commit sequence
Make these commits **as you complete each step**, rather than uploading everything and claiming historical progress:
1. `Initial project structure and mobile page` — add README, index.html and css/style.css.
2. `Add cleaned Census population CSV` — add data/states.csv.
3. `Implement population search and sorting` — add js/app.js.
4. `Add real mobile emulator screenshot` — after testing, add screenshots/emulator.png.

## Dataset
Original: https://www2.census.gov/programs-surveys/popest/datasets/2020-2024/state/totals/NST-EST2024-ALLDATA.csv

The small CSV has plain state names and unformatted integer populations, so the lightweight CSV parser is suitable for this dataset; a general-purpose CSV with quoted commas would need a more robust parser.

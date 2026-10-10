# GoldenMind frontend

Black-and-gold responsive daily quiz UI. Language selector supports English and Urdu. The frontend connects to the backend API.

## Run
1. Start the backend (see `quiz-backend/README.md`).
2. Serve this folder with any static server, e.g. `python -m http.server 5500` from this folder.
3. Open `http://localhost:5500`.

The API defaults to `http://localhost:3000/api`. To change it, run this in the browser console before reloading:
`localStorage.setItem("gm_api", "https://your-api.example.com/api")`

For deployment, configure the frontend API URL to your deployed backend URL. Do not use `file://` to open the page because browsers block API requests from local files.

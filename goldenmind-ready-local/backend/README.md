# GoldenMind backend

Node.js + Express API with SQLite accounts, password hashing, JWT login, daily quiz selection and score saving.

## Requirements
- Node.js 18+
- npm

## Run locally
1. Copy `.env.example` to `.env`.
2. Set `JWT_SECRET` to a long random secret (required for real deployment).
3. Optional: set `OPENAI_API_KEY` to enable fresh AI-generated daily questions. Without it, the app rotates a local question bank each UTC day.
4. Install and start:
   ```bash
   npm install
   npm start
   ```
5. API health check: `http://localhost:3000/api/health`
6. Serve the frontend at `http://localhost:5500` (or update `FRONTEND_ORIGIN`).

## Main endpoints
- `POST /api/auth/register` body `{ "username": "player_01", "password": "at-least-8-characters" }`
- `POST /api/auth/login` same body
- `GET /api/quiz/today?lang=en` or `?lang=ur`
- `POST /api/quiz/score` with Bearer token, body `{ "score": 8, "total": 10, "date": "YYYY-MM-DD" }`
- `GET /api/me` with Bearer token

## Important production notes
- The browser receives the correct answer as part of the quiz payload for this demo, so this is not cheat-proof. For a public competitive quiz, move answer checking to the backend.
- Add rate limiting, HTTPS, backups and monitoring before a public launch. Restrict `FRONTEND_ORIGIN` to your actual frontend domain.
- AI generation uses the OpenAI Chat Completions API. Keep the key only in backend `.env`, never in frontend files.
- Current daily date boundary is UTC. Adjust `today()` if you want Pakistan-local daily rollover.

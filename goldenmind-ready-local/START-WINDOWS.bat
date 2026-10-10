@echo off
cd /d "%~dp0backend"
if not exist node_modules (
  echo Installing backend dependencies for first run...
  call npm install
  if errorlevel 1 pause & exit /b 1
)
start "GoldenMind Backend" cmd /k "cd /d ""%~dp0backend"" && npm start"
timeout /t 3 /nobreak >nul
cd /d "%~dp0frontend"
start "GoldenMind Frontend" cmd /k "cd /d ""%~dp0frontend"" && python -m http.server 5500"
timeout /t 2 /nobreak >nul
start "" http://localhost:5500

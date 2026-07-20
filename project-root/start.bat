@echo off
echo Starting Backend Services...
cd backend
start cmd /k "docker-compose up --build"
echo Waiting for backend to initialize...
timeout /t 10
cd ../frontend
echo Starting Flutter Frontend...
start cmd /k "flutter run -d chrome"
cd ..
echo Done!

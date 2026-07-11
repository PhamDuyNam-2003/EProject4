@echo off
echo ===================================================
echo   KHOI DONG HA TANG DATABASE CHO MICROSERVICES
echo ===================================================
echo.

cd infrastructure
docker-compose up -d

echo.
echo ===================================================
echo   HA TANG DA CHAY THANH CONG NEN BACKGROUND!
echo ===================================================
echo De tat ha tang, hay chay lenh: cd infrastructure ^& docker-compose down
echo.
pause

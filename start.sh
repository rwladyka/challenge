./build.sh
cd wiremock
./start.sh
cd ../backend
gradle bootRun &
cd ../frontend
npm run dev
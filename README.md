## Fitness Sense

To build and run the package run:
```
docker compose up --build
```
from the root of the package and it will start serving on http://localhost:8080/

If you just want to run the frontend for development then you can run:
```
npm install
npm run dev
```
from the frontend/ directory

---
The LLM is not included in the docker container and must be run separately from LM studio on http://localhost:1234/
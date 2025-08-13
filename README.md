.env.local
```
AUTH_SECRET=secret
GOOGLE_GENERATIVE_AI_API_KEY=
BLOB_READ_WRITE_TOKEN=
POSTGRES_URL=postgresql://postgres:postgres@localhost:5432/my_database
REDIS_URL=redis://localhost:6379
```

```bash
docker run -e POSTGRES_PASSWORD=postgres -e POSTGRES_USER=postgres -e POSTGRES_DB=my_database -p 5432:5432 -d postgres:latest
docker run -p 6379:6379 -d redis:latest

node lib/db/migrate.ts 

pnpm install
pnpm dev
```

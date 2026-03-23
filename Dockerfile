FROM oven/bun:latest

WORKDIR /app

COPY package.json bun.lock ./
RUN bun install

COPY . .

RUN bun run build --verbose

EXPOSE 3000

CMD ["bun", "index.ts"]

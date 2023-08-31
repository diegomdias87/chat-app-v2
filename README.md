# Chat App

## ENV Configuration

App need `.env` file in the root directory to run. The `.env` file should contain the following variables:

- `VITE_API_URL`: API URL - url to the backend API.
  - e.g. `http://localhost:3000/prompt-endpoint`
- `VITE_API_KEY`: API Key - key to access the backend API

## Run the development server

**Requires [node](https://nodejs.org/en/) and [pnpm](https://pnpm.io) to be installed**

Run the development server:

```bash
pnpm install
pnpm dev
```

## Deployment

- build command: `pnpm build`
- output directory: `dist`

## References

- [Vite](https://vitejs.dev)
- [Chakra UI](https://chakra-ui.com/)
- [TypeScript](https://www.typescriptlang.org)

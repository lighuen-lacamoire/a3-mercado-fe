/// <reference types="vite/client" />

/**
 * Tipado para las variables de ambiente de ViteJS
 */
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_ROUTER_BASE_URL: string;
  readonly VITE_BACKEND_API_BASEURL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

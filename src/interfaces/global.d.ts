/**
 * Tipado global para el process.env
 */
declare global {
  namespace NodeJS {
    interface ProcessEnv extends ImportMetaEnv {}
  }
}

export {};

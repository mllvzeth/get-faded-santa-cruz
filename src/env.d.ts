/// <reference types="astro/client" />

type Env = {
  SESSION?: KVNamespace;
  KEYSTATIC_SECRET?: string;
};

type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

declare namespace App {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface Locals extends Runtime {}
}

import { api } from "encore.dev/api";

export const get = api(
  { expose: true, method: "GET", path: "/heyo/:word" },
  async ({ word }: { word: string }): Promise<Response> => {
    const msg = `Heyo... ${word}!`;
    return { message: msg };
  }
);

interface Response {
  message: string;
}

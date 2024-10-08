import { api } from "encore.dev/api";

export const get = api(
  { expose: true, method: "GET", path: "/heyo/:word" },
  async ({ word }: { word: string }): Promise<Response> => {
    const val = await getNutrition(word);
    console.log("VAL::", val);
    return { message: JSON.stringify(val) };
  }
);

interface Response {
  message: string;
}

const getNutrition = async (item: string) => {
  const apiKey = process.env.API_KEY;
  const query = item;
  const url = `https://api.calorieninjas.com/v1/nutrition?query=${query}`;

  fetch(url, {
    headers: {
      "X-Api-Key": apiKey,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("DATA::", data);
      return data;
    });
};

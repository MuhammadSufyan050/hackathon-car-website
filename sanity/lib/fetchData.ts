import { client } from "./client";
import { getCarsQuery } from "./queries";

export async function getCars() {
  const cars = await client.fetch(getCarsQuery);
  return cars;
}

/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import type { VercelRequest, VercelResponse } from "@vercel/node";

interface ReqBody {
  id?: string;
}

function POST(request: VercelRequest, response: VercelResponse) {
  /*
  const { name = 'World' } = request.query;
  response.send(`Hello ${name}!`);
  */

  let numericalId: number;
  try {
    const body = request.body as ReqBody;
    if (!body.id) {
      return response.status(400).send("Invalid id");
    }

    numericalId = Number.parseInt(body.id);
  } catch (error) {
    return response.status(400).json({ error });
  }

  if (numericalId < 1 || numericalId > 6) {
    return new Response("Invalid id");
  }

  const API_KEY = process.env.API_KEY;
  const API_URL = process.env.API_URL;

  if (!API_KEY || !API_URL) {
    return response.status(500);
  }

  const headers = new Headers();
  headers.append("x-api-key", API_KEY);

  const requestOptions = {
    method: "POST",
    headers: headers,
  };

  return fetch(`${API_URL}/${numericalId}`, requestOptions);
}

export default POST;

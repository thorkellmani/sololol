/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { waitUntil } from "@vercel/functions";
import type { VercelRequest, VercelResponse } from "@vercel/node";

interface ReqBody {
  id?: string;
}

function POST(request: VercelRequest, response: VercelResponse) {
  let numericalId: number;
  try {
    const body = JSON.parse(request.body) as ReqBody;
    if (!body.id) {
      return response.status(400).send("Invalid id");
    }

    numericalId = Number.parseInt(body.id);
  } catch (error) {
    return response.status(400).json({ error });
  }

  if (numericalId < 1 || numericalId > 6) {
    return response.status(400).send("Invalid id");
  }

  const API_KEY = process.env.API_KEY;
  const API_URL = process.env.API_URL;

  if (!API_KEY || !API_URL) {
    return response.status(500).send("unspecified error");
  }

  const headers = new Headers();
  headers.append("x-api-key", API_KEY);

  const requestOptions = {
    method: "POST",
    headers: headers,
  };
  waitUntil(fetch(`${API_URL}/${numericalId}`, requestOptions));
  return response.status(200).send("request received");
}

export default POST;

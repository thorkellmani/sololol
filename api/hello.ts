export function POST(request: Request) {
  return postRequest(request);
}

async function postRequest(request: Request) {
  const formData = await request.formData();
  const id = formData.get("starId")?.valueOf();

  if (!id || typeof id !== "string") {
    return new Response("Invalid id");
  }

  let numericalId: number;
  try {
    numericalId = Number.parseInt(id);
  } catch {
    return new Response("Malformed id");
  }

  if (numericalId < 1 || numericalId > 6) {
    return new Response("Invalid id");
  }

  const API_KEY = process.env.API_KEY;
  const API_URL = process.env.API_URL;

  if (!API_KEY || !API_URL) {
    return;
  }

  const headers = new Headers();
  headers.append("x-api-key", API_KEY);

  const requestOptions = {
    method: "POST",
    headers: headers,
  };

  return fetch(`${API_URL}/${numericalId}`, requestOptions)
    .catch((err) => {
      console.warn(err);
      return "failure";
    })
    .then(() => "success");
}

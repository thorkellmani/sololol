export const apiQuery = async (id: string): Promise<"success" | "failure"> => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = import.meta.env.VITE_API_URL;

  const headers = new Headers();
  headers.append("x-api-key", API_KEY);

  const requestOptions = {
    method: "POST",
    headers: headers,
  };

  return fetch(`${API_URL}/${id}`, requestOptions)
    .catch((err) => {
      console.warn(err);
      return "failure";
    })
    .then(() => "success");
};

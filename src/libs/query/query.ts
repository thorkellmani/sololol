export const apiQuery = async (id: string): Promise<"success" | "failure"> => {
  const host = import.meta.env.DEV
    ? "http://localhost:3000/"
    : "https://sololol.vercel.app/";

  const url = host + "api/sendRequest";

  const requestOptions = {
    method: "POST",
    body: JSON.stringify({
      id: id,
    }),
  };

  return fetch(url, requestOptions)
    .catch((err) => {
      console.warn(err);
      return "failure";
    })
    .then(() => "success");
};

import Session from "../../components/Session";

export default async function Page(request: any) {
  const response = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      client_id: "8431437eb66386492a8c",
      client_secret: "1bcdbfa3243a37522ae883335e7fa4b7cd95516d",
      code: request.searchParams.code,
    }),
  });
  const data = await response.json();

  return <Session access_token={data.access_token} />;
}

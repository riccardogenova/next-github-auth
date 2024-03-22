import { redirect } from "next/navigation";

export default function Page() {
  redirect(
    "https://github.com/login/oauth/authorize?client_id=8431437eb66386492a8c"
  );
}

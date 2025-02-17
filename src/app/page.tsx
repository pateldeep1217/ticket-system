

import { Login } from "./Login";

type SearchParams = {
  magicLink?: string;  
};


type LoginPageProps = {
  searchParams: SearchParams;
};

export default async function LoginPage({searchParams}: LoginPageProps) {
  const resolvedSearchParams = await searchParams;
  
  const wantsMagicLink = resolvedSearchParams.magicLink === "yes";


  return (
    <Login isPasswordLogin={!wantsMagicLink}/>
  );
}

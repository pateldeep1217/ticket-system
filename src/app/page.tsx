"use client"

import { Login } from "./Login";

type SearchParams = {
  magicLink?: string;  
};


type LoginPageProps = {
  searchParams: SearchParams;
};

export default function LoginPage({searchParams}: LoginPageProps) {
  
  return (
    <Login/>
  );
}

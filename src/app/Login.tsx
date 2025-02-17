"use client";

import { useRef } from "react";
import Link from "next/link";

// Define props interface for Login component
interface LoginProps {
  isPasswordLogin: boolean;
}



export const Login = ({ isPasswordLogin }: LoginProps) => {
  // Specify that these refs are for input elements
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  return (
    <form>
      <article style={{ maxWidth: "480px", margin: "auto" }}>
        <header>Login</header>
        
        <fieldset>
          <label htmlFor="email">
            Email
            <input 
              ref={emailInputRef}
              type="email"
              id="email"
              name="email"
              required 
            />
          </label>

          {isPasswordLogin && (
            <label htmlFor="password">
              Password
              <input
                ref={passwordInputRef}
                type="password"
                id="password"
                name="password"
              />
            </label>
          )}
        </fieldset>

        <p>
          {isPasswordLogin ? (
            <Link
              href={{
                pathname: "/",
                query: { magicLink: "yes" },
              }}
            >
              Go to Magic Link Login
            </Link>
          ) : (
            <Link
              href={{
                pathname: "/",
                query: { magicLink: "no" },
              }}
            >
              Go to Password Login
            </Link>
          )}
        </p>

        <button type="submit">
          Sign in with {isPasswordLogin ? " Password" : " Magic Link"}
        </button>
      </article>
    </form>
  );
};
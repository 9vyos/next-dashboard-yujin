import Link from "next/link";

export default async function SignUp() {
  return (
    <main>
      <h1 className="text-4xl mb-8">Sign Up</h1>
      <div>
        <form className="flex flex-col">
          <label htmlFor="email" className="font-light">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="rounded outline outline-1 outline-gray-400 mb-1"
          />
          <label htmlFor="password" className="font-light">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="rounded outline outline-1 outline-gray-400"
          />
          <button
            type="submit"
            className="mt-4 p-4 rounded bg-blue-400 text-slate-50 font-extrabold"
          >
            Login
          </button>
          <Link href="/signup" className="text-sm text-right font-extralight">
            Not a member yet?
          </Link>
        </form>
      </div>
    </main>
  );
}

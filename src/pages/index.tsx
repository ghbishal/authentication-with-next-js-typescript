import { Inter } from "next/font/google";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import { NextPageContext } from "next";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <h1 className="bg-orange-300 w-full">{session.user?.name}</h1>
        <button onClick={() => signIn()}>Sing Out</button>
      </>
    );
  }

  return (
    <>
      <h1>Welocome </h1>
      <button onClick={() => signIn()}>Sign In</button>
    </>
  );
}

export async function getServerSideProps(ctx: NextPageContext) {
  const session = await getSession(ctx);
  console.log(session);
  return {
    props: {
      session,
    },
  };
}

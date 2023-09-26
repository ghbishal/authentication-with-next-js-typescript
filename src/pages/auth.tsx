import Background from "@/component/Backgrounds/Background";
import Login from "@/component/forms/Login";
import Register from "@/component/forms/Register";
import { NextPageContext } from "next";
import React from "react";

export default function auth({ tab }: { tab: string }) {
  console.log(tab);
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full h-100 flex items-center justify-center">
        {/*------- FORM ---------- */}
        <div className="w-full sm:w5/6 md:w-2/3 lg:w1/2 xl:w-1/3 2xl:w-1/3 h-full bg-white flex flex-col items-center justify-center">
          {/* -------- SIGN UP FORM ---------- */}
          {tab == "signin" ? <Login /> : <Register />}
        </div>
      </div>
      {/* ---------- BACKGROUND -------- */}
      <Background
        image={`"../../auth/${tab == "signup" ? "register" : "login"}.jpg"`}
      />
    </div>
  );
}

export async function getServerSideProps(ctx: NextPageContext) {
  const { req, query } = ctx;
  const tab = query.tab ? query.tab : "signin";

  return {
    props: { tab: JSON.parse(JSON.stringify(tab)) },
  };
}

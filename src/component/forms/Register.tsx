import * as React from "react";
import Input from "@/component/inputs/Input";
import { CiUser } from "react-icons/ci";

type Props = {};

export default function Register(props: Props) {
  return (
    <form className="my-8 text-sm">
      <div className="gap-2 md:flex">
        <Input
          name="first_name"
          label="First_name"
          type="text"
          icon={<CiUser />}
          placeholder="example"
        />
      </div>
    </form>
  );
}

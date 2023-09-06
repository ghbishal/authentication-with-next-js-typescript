import * as React from "react";
import Input from "@/component/inputs/Input";
import { CiUser } from "react-icons/ci";
import { useForm } from "react-hook-form";

type Props = {};

export default function Register(props: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);
  console.log(watch);

  return (
    <form className="my-8 text-sm" onSubmit={handleSubmit(onSubmit)}>
      <div className="gap-2 md:flex">
        <Input
          name="first_name"
          label="First name"
          type="text"
          icon={<CiUser />}
          placeholder="example"
          register={register}
          error={errors?.first_name?.message}
          disabled={isSubmitting}
        />
      </div>
    </form>
  );
}

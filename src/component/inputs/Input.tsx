import React from "react";
import { IoAlertCircle } from "react-icons/io5";

type Props = {
  name: string;
  label: string;
  type: string;
  icon: JSX.Element;
  placeholder: string;
  register: any;
  error: any;
  disabled: boolean;
};

export default function Input({
  name,
  label,
  type,
  icon,
  placeholder,
  register,
  error,
  disabled,
}: Props) {
  const calculateTranslate = () => {
    if (name == "first_name" || name == "last_name") return "translateY(-22px)";
  };
  return (
    <div className="mt-3 w-[100%]">
      <label htmlFor={name} className="text-gray-700">
        {label}
      </label>
      <div className="relative mt-1 rounded-md ">
        <div
          className="pointer-event-none absolute left-0 top-0.5 inset-y-0 flex items-center pl-3"
          style={{
            transform: `${error ? calculateTranslate() : ""}`,
          }}
        >
          <span className="text-gray-500 text-sm">{icon}</span>
        </div>
        <input
          type={type}
          className="w-full py-2 pr-7 pl-8 block rounded-md border border-gray-300 outline-offset-2 outline-transparent focus:border-blue-500 focus:ring-blue-700 focus:ring-2 text-sm"
          placeholder={placeholder}
          {...register(name)}
          style={{
            borderColor: `${error ? "#ED4337" : ""}`,
          }}
        />
        {error && (
          <div className="fill-red-500 absolute right-2 top-2.5 text-xl">
            <IoAlertCircle fill="#ED4337" />
          </div>
        )}
        {error && <p className="text-sm text-[#ED4337] mt-1">{error}</p>}
      </div>
    </div>
  );
}

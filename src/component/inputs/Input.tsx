import React from "react";

type Props = {
  name: string;
  label: string;
  type: string;
  icon: JSX.Element;
  placeholder: string;
};

export default function Input({ name, label, type, icon, placeholder }: Props) {
  return (
    <div className="relative rounded-md shadow-sm mt-1">
      <div className="pointer-event-none absolute left-0 top-0.5 inset-y-0 flex items-center pl-3">
        <span className="text-gray-500 text-sm">{icon}</span>
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full py-2 pr-7 pl-8 block rounded-md border border-gray-300 outline-offset-2 outline-transparent focus:border-blue-500 focus:ring-blue-700 focus:ring-2 text-sm"
      />
    </div>
  );
}

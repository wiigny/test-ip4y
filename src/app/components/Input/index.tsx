import { InputHTMLAttributes, ReactNode } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  errorText?: string | undefined;
  labelChildren?: ReactNode;
  register?: UseFormRegisterReturn;
}

export default function Input({
  errorText,
  labelChildren,
  register,
  ...rest
}: IInput) {
  return (
    <fieldset className="flex flex-col mb-5">
      <div className="flex flex-col-reverse gap-1">
        <input
          {...rest}
          {...register}
          className="outline-none border-b-blue-200 border-b-2 text-sm text-gray-700 focus:border-b-blue-500 duration-200 px-2 py-1"
        />
        <label className="text-gray-700 text-xs">{labelChildren}</label>
      </div>
      {errorText && <p className="text-xs text-red-500">{errorText}</p>}
    </fieldset>
  );
}

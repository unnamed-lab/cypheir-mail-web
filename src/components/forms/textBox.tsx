import { twMerge } from "tailwind-merge";

export default function SingleTextBox({
  label,
  labelClass,
  type = "text",
  name = "",
  value,
  placeholder = "",
  className = "",
}: {
  label?: string;
  labelClass?: string;
  type?: "email" | "text" | "url" | "password";
  name?: string;
  value?: string;
  placeholder?: string;
  className?: string;
}) {
  const identfiler = `${name}ID`;
  return (
    <div className="flex flex-wrap flex-col gap-1">
      <label
        className={twMerge("font-semibold capitalize ", labelClass)}
        htmlFor={identfiler}
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={identfiler}
        value={value}
        placeholder={placeholder}
        aria-placeholder={placeholder}
        className={twMerge(
          "focus:outline py-3 px-2 h-[40px] rounded-[4px] outline-1 outline outline-slate-300 duration-500 ease-in-out transition-colors text-base focus-within:outline-[#1ca7ec] focus:outline-[#1ca7ec] hover:outline-[#1ca7ec] ",
          className,
        )}
      />
    </div>
  );
}

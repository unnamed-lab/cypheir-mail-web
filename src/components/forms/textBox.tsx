export default function SingleTextBox({
  type = "text",
  name = "",
  value = "",
  placeholder = "",
  className = "",
}: {
  type?: "email" | "text" | "url";
  name?: string;
  value?: string;
  placeholder?: string;
  className?: string;
}) {
  return (
    <input
      type={type}
      name={name}
      id={`${name}ID`}
      value={value}
      placeholder={placeholder}
      aria-placeholder={placeholder}
      className={"focus:outline p-3 h-[40px] rounded-[4px] " + className}
    />
  );
}

"use client";

export default function button({
  className,
  type = "button",
  children,
}: {
  className: any;
  type: "submit" | "reset" | "button";
  children: any;
}) {
  return (
    <button type={type} className={`btn  ${className}`}>
      {children}
    </button>
  );
}

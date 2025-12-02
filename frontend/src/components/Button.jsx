import React from "react";

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const baseStyle = `px-4 py-2 cursor-pointer rounded-lg font-medium transition-all duration-200`;
  const variants = {
    primary: `bg-[var(--color-primary)]
      text-white
      hover:bg-[var(--color-secondary)]`,
    outline: `
      border 
      border-[var(--color-primary)]
      text-[var(--color-primary)]
      hover:bg-[var(--color-primary)]
      hover:text-white
    `,
    danger: `
      bg-[var(--color-accent)]
      text-white
      hover:opacity-90
    `,
  };
  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

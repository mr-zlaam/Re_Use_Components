import {} from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  className?: string;
  varient?: "default" | "primary" | "destructive" | "outline" | "success" | "";
  size?: "sm" | "md" | "lg" | "normal" | "";
}

const ButtonVarients = {
  Varients: {
    default:
      "bg-white text-[1.2rem] font-semibold text-black px-5 py-2 rounded-md shadow-black shadow-md duration-200 hover:bg-white/80 active:scale-95",
    primary:
      "bg-blue-600 text-[1.2rem] text-white font-semibold text-black px-5 py-2 rounded-md shadow-black shadow-md duration-200 hover:bg-blue-700 active:scale-95",
    destructive:
      "bg-red-600 text-[1.2rem] font-semibold text-black px-5 py-2 rounded-md shadow-black shadow-md duration-200 hover:bg-red-700 active:scale-95",
    outline:
      "text-white bg-transparent border-gray-600 border-[1px] text-[1.2rem] font-semibold text-black px-5 py-2 rounded-md shadow-black shadow-md duration-200 hover:bg-black/20 active:scale-95",
    success:
      "bg-green-500 text-[1.2rem] font-semibold text-black px-5 py-2 rounded-md shadow-black shadow-md duration-200 hover:bg-green-600 active:scale-95",
  },
  size: {
    normal: "text-[1rem] px-3 py-2 shadow-md shadow-black",
    sm: "text-sm px-3 py-2 shadow-sm shadow-black/50",
    md: "text-[1rem] px-4 py-3 shadow-md shadow-black",
    lg: "text-[1.4rem] px-6 py-4 shadow-lg shadow-black",
  },
};
const Button = function ({
  varient,
  size,
  className,
  children,
  ...rest
}: ButtonProps) {
  const btn_color_variants = `${
    (varient?.trim() === "default" && ButtonVarients.Varients.default) ||
    (varient?.trim() === "primary" && ButtonVarients.Varients.primary) ||
    (varient?.trim() === "destructive" &&
      ButtonVarients.Varients.destructive) ||
    (varient?.trim() === "outline" && ButtonVarients.Varients.outline) ||
    (varient?.trim() === "success" && ButtonVarients.Varients.success) ||
    (!varient && ButtonVarients.Varients.default)
  } `;
  const btn_size_variants = `${
    (size?.trim() === "sm" && ButtonVarients.size.sm) ||
    (size?.trim() === "md" && ButtonVarients.size.md) ||
    (size?.trim() === "lg" && ButtonVarients.size.lg) ||
    (size?.trim() === "normal" && ButtonVarients.size.normal) ||
    !size ||
    (size.trim() === "" && ButtonVarients.size.normal)
  } `;
  return (
    <>
      <button
        {...rest}
        className={`${btn_color_variants} ${className} ${btn_size_variants} bg-blue-500 `}
      >
        {children}
      </button>
    </>
  );
};
export { Button };

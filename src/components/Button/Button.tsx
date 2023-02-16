import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  rest: ButtonHTMLAttributes<HTMLButtonElement>;
}

function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { children, ...rest } = props;

  return <button {...rest}>{children}</button>;
}

export default Button;

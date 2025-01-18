import React from "react";
import { Link } from "react-router";

type Props = {
  children: React.ReactNode;
  className?: string;
  route: string;
};

function ButtonLink(props: Props) {
  const { children, className = "", route } = props;

  return (
    <Link
      to={route}
      className={`${className} px-4 h-8 font-semibold text-sm flex items-center rounded-md `}
    >
      {children}
    </Link>
  );
}

export default ButtonLink;

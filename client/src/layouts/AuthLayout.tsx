import ButtonLink from "@/components/ButtonLink";
import { Outlet } from "react-router";
import Logo from "../components/Logo";

function AuthLayout() {
  return (
    <div>
      <div className="wrapper h-16 flex justify-between items-center">
        <Logo />
        <ButtonLink
          className="bg-black text-white dark:bg-white dark:text-black"
          route="/login"
        >
          Login
        </ButtonLink>
      </div>

      <div className=" h-[calc(100vh-4rem)] flex justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;

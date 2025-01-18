import Button from "@/components/Button";
import { loginSchema, LoginSchema } from "@/utils/validation/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router";

function Login() {
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: { password: "", email: "" },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form;

  const onSubmitForm: SubmitHandler<LoginSchema> = async (data) => {
    console.log(data);
  };

  return (
    <form
      className="wrapper max-w-[300px]"
      onSubmit={handleSubmit(onSubmitForm)}
    >
      <header className="pb-4">
        <h1 className="text-lg font-semibold">Login</h1>
        <p className="text-xs font-light">
          Welcome back! Login to your account and start organizing your tasks.
        </p>
      </header>

      <>
        <div className="flex flex-col py-2">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            className="form-input"
            placeholder="Email"
          />
          <p className="input-error">{errors.email && errors.email.message}</p>
        </div>

        <div className="flex flex-col py-2">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            {...register("password")}
            type="password"
            className="form-input"
            placeholder="Password"
          />
          <p className="input-error">
            {errors.password && errors.password.message}
          </p>
        </div>
      </>

      <div>
        <Button
          disabled={isSubmitting}
          type="submit"
          className="bg-black text-white w-full mt-4"
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </Button>
        <p className="text-xs font-light text-center mt-2">
          Don't have an account?{" "}
          <Link to="/signup" className="font-semibold">
            Create Account
          </Link>
        </p>
      </div>
    </form>
  );
}

export default Login;

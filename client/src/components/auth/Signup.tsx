import Button from "@/components/Button";
import { SignupSchema, signupSchema } from "@/utils/validation/signup";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router";

function Signup() {
  // initialize the useForm hook with the Zod resolver and default values
  const form = useForm<SignupSchema>({
    resolver: zodResolver(signupSchema),
    defaultValues: { name: "", password: "", email: "" },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form;

  const onSubmitForm: SubmitHandler<SignupSchema> = async (data) => {
    console.log(data);
  };

  return (
    <form
      className="wrapper max-w-[300px]"
      onSubmit={handleSubmit(onSubmitForm)}
    >
      <header className="pb-4">
        <h1 className="text-lg font-semibold">Create Account</h1>
        <p className="text-xs font-light">
          Create an account to get start with Notch.
        </p>
      </header>

      <div>
        <div className="flex flex-col py-2">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            {...register("name")}
            type="text"
            className="form-input"
            placeholder="Name"
          />
          <p className="input-error">{errors.name && errors.name.message}</p>
        </div>

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
      </div>

      <div>
        <Button
          disabled={isSubmitting}
          type="submit"
          className="bg-black text-white w-full mt-4"
        >
          Sign Up
        </Button>
        <p className="text-xs font-light text-center mt-2">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold">
            Login
          </Link>
        </p>
      </div>
    </form>
  );
}

export default Signup;

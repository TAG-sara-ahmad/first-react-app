import React from "react";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  console.log(errors);

  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input
        className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
        {...register("example")}
      />

      {/* include validation with required or other standard HTML validation rules */}
      <input
        className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
        {...register("exampleRequired", { required: true })}
      />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && (
        <span className="text-red-500">This field is required</span>
      )}

      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
  );
}

export default Login;

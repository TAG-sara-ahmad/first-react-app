import { useEffect, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

// uncotrolled from
export default function ControlledSignUp() {
  const [displayPasswords, setDisplayPasswords] = useState({
    password: false,
    confirmPassword: false,
  });

  const nameRef = useRef();
  const phoneRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name: nameRef.current.value,
      phone: phoneRef.current.value,
      password: passwordRef.current.value,
      confirmPassword: confirmPasswordRef.current.value,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md space-y-4 mt-10"
    >
      <h2 className="text-2xl font-bold text-center text-gray-700">
        create new account
      </h2>

      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          name
        </label>
        <input
          type="text"
          role="button"
          name="name"
          ref={nameRef}
          className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          phone number
        </label>
        <input
          type="tel"
          ref={phoneRef}
          name="phone"
          className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
        />
      </div>

      {/* Password */}
      <div className="relative">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          password
        </label>
        <input
          type={displayPasswords.password ? "text" : "password"}
          ref={passwordRef}
          name="password"
          className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
        />
        <button
          type="button"
          className="absolute right-3 top-[36px]"
          onClick={() => {
            setDisplayPasswords((prev) => {
              return { ...prev, password: !prev.password };
            });
          }}
        >
          {displayPasswords.password ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>

      {/* Confirm Password */}
      <div className="relative">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          confirm password{" "}
        </label>
        <input
          type={displayPasswords.confirmPassword ? "text" : "password"}
          ref={confirmPasswordRef}
          name="confirmPassword"
          className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
        />
        <button
          type="button"
          className="absolute right-3 top-[36px]"
          onClick={() => {
            setDisplayPasswords((prev) => {
              return { ...prev, confirmPassword: !prev.confirmPassword };
            });
          }}
        >
          {displayPasswords.confirmPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
      >
        create account
      </button>
    </form>
  );
}

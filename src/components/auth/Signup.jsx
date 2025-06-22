import { useEffect, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

//controlled form vs. uncotrolled from
export default function SignupForm() {
  const [displayPasswords, setDisplayPasswords] = useState({
    password: false,
    confirmPassword: false,
  });

  // 1- create form state
  const [form, setForm] = useState({
    name: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErros] = useState({
    nameErr: "",
    phoneErr: "",
    passErr: "",
    confirmPassErr: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name) {
      setErros((prev) => {
        return {
          ...prev,
          nameErr: "Name is required",
        };
      });
    } else {
      setErros((prev) => {
        return {
          ...prev,
          nameErr: "",
        };
      });
    }
    if (!form.phoneNumber) {
      setErros((prev) => {
        return {
          ...prev,
          phoneErr: "Phone is required",
        };
      });
    }
    if (!form.password) {
      setErros((prev) => {
        return {
          ...prev,
          passErr: "password is required",
        };
      });
    }
    if (!form.confirmPassword) {
      setErros((prev) => {
        return {
          ...prev,
          confirmPassErr: "confirmPassword is required",
        };
      });
    }
    console.log(form);
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
          name="name"
          value={form.name}
          //2- event to access new value of input field
          onChange={(event) => {
            setForm((prev) => {
              return {
                ...prev,
                name: event.target.value,
              };
            });
          }}
          className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
        />
        {errors.nameErr && (
          <small className="text-red-500">{errors.nameErr}</small>
        )}
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          phone number
        </label>
        <input
          type="tel"
          value={form.phoneNumber}
          //2- event to access new value of input field
          onChange={(event) => {
            setForm((prev) => {
              return {
                ...prev,
                phoneNumber: event.target.value,
              };
            });
          }}
          name="phone"
          className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
        />
        {errors.phoneErr && (
          <small className="text-red-500">{errors.phoneErr}</small>
        )}
      </div>

      {/* Password */}
      <div className="relative">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          password
        </label>
        <input
          type={displayPasswords.password ? "text" : "password"}
          value={form.password}
          //2- event to access new value of input field
          onChange={(event) => {
            setForm((prev) => {
              return {
                ...prev,
                password: event.target.value,
              };
            });
          }}
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
        {errors.passErr && (
          <small className="text-red-500">{errors.passErr}</small>
        )}
      </div>

      {/* Confirm Password */}
      <div className="relative">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          confirm password{" "}
        </label>
        <input
          type={displayPasswords.confirmPassword ? "text" : "password"}
          value={form.confirmPassword}
          //2- event to access new value of input field
          onChange={(event) => {
            setForm((prev) => {
              return {
                ...prev,
                confirmPassword: event.target.value,
              };
            });
          }}
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
        {errors.confirmPassErr && (
          <small className="text-red-500">{errors.confirmPassErr}</small>
        )}
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

// uncontrolled form => form connected by ref to the input fields
// ref => reference ex: input , button from the dom
//

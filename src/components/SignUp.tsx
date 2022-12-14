import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../config/firebase";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmitHandler = async () => {
    const { name, email, password } = formData;
    if (!name || !email || !password) {
      alert("Please fill all fields!");
      return;
    }

    try {
      const auth = getAuth(app);
      const user = await createUserWithEmailAndPassword(auth, email, password);
      dispatch(setUser({ user: user.user }));
      navigate('/');
    } catch (e: any) {
      console.log(e);
      alert(e.message);
    }
  };

  return (
    <div className="flex flex-col w-full max-w-sm mx-auto p-4 border border-gray-200 bg-white shadow">
      <div className="flex flex-col mb-4">
        <label htmlFor="name" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600 text-left">
          Name
        </label>

        <div className="relative">
          <div className="absolute flex border border-transparent left-0 top-0 h-full w-10">
            <div className="flex items-center justify-center rounded-tl rounded-bl z-10 bg-gray-100 text-gray-600 text-lg h-full w-full">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-5 w-5"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
          </div>

          <input
            required
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e) => onChangeHandler(e)}
            className="text-sm sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-12"
          />
        </div>
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="name" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600 text-left">
          Email
        </label>

        <div className="relative">
          <div className="absolute flex border border-transparent left-0 top-0 h-full w-10">
            <div className="flex items-center justify-center rounded-tl rounded-bl z-10 bg-gray-100 text-gray-600 text-lg h-full w-full">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-5 w-5"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
          </div>

          <input
            required
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => onChangeHandler(e)}
            className="text-sm sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-12 border-red-500"
          />
        </div>
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="name" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600 text-left">
          Password
        </label>

        <div className="relative">
          <div className="absolute flex border border-transparent left-0 top-0 h-full w-10">
            <div className="flex items-center justify-center rounded-tl rounded-bl z-10 bg-gray-100 text-gray-600 text-lg h-full w-full">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-5 w-5"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
          </div>

          <input
            required
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={(e) => onChangeHandler(e)}
            className="text-sm sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-12 border-red-500"
          />
        </div>
      </div>
      <p className="text-sm font-semibold mt-2 pt-1 my-3">
        Already have an account?
        <Link
          to="/login"
          className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out ml-2"
        >
          Login
        </Link>
      </p>
      <button
        type="button"
        onClick={() => onSubmitHandler()}
        className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      >
        SignUp
      </button>
    </div>
  );
}

export default SignUp;

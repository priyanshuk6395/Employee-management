import React, { useState } from "react";

const Login = ({handleLogin}) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email,password);
    setemail('');
    setpassword('');
  };

  return (
    <div className="flex h-screen bg-zinc-900 w-screen items-center justify-center">
      <div className="border-2 rounded-lg border-emerald-400 p-20">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            required
            value={email}
            onChange={(e)=>{
                setemail(e.target.value);
                
            }}
            className="border-2 border-emerald-500 rounded-full py-4 px-5 text-xl text-white outline-none bg-transparent placeholder:text-gray-400"
            type="email"
            placeholder="Enter e-mail"
          />
          <input
            required
            value={password}
            onChange={(e)=>{
                setpassword(e.target.value);
            }}
            className="mt-3 border-2 border-emerald-500 rounded-full py-4 px-5 text-xl text-white outline-none bg-transparent placeholder:text-gray-400"
            type="password"
            placeholder="Enter password"
          />
          <button className="bg-emerald-500 hover:bg-emerald-600 text-black text-xl rounded-full px-5 py-3 mt-5">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

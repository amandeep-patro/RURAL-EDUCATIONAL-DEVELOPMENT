import React from "react";
import ButtonDefault from "../components/ButtonDefault";
const RegistartionForm = () => {
  return (
    <div className="h-[100vh] items-center flex justify-center px-10 lg:px-0">
      <div className="max-w-screen-sm bg-white border shadow sm:rounded-lg flex justify-center flex-1">
        {/* <div className="flex-1 text-center hidden md:flex">
          <div
            className="w-full bg-fit bg-center bg-no-repeat"
            style={{
              backgroundImage:`url(${bgImage})`,
            }}
          ></div>
        </div> */}
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:px-4 sm:py-10">
          <div className=" flex flex-col items-center">
            <div className="text-center">
              <h1 className="text-2xl xl:text-4xl font-extrabold text-blue-900">
                Student Sign In
              </h1>
              <p className="text-[12px] text-gray-500">
                Enter Your Account Details to Sign In
              </p>
            </div>
            <div className="w-full flex-1 mt-8">
              <div className="mx-auto max-w-xs flex flex-col gap-4">
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Enter your email or name"
                />
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="password"
                  placeholder="Password"
                />
                <ButtonDefault title={"Sign In"}></ButtonDefault>
                <p className="mt-6 text-xs text-gray-600 text-center">
                  Forgot Your Password?{" "}
                  <a href="">
                    <span className="text-blue-900 font-semibold">Forgot</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegistartionForm;
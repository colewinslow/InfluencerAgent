import React from "react";
import SignInFormElements from "../Components/SignIn/SignInFormElements";

function SignIn() {
  return (
    <div className="flex absolute left-0 w-full md:max-w-[550px]  md:left-[45%] top-[70px] md:md:top-[10vh]">
      <SignInFormElements />
    </div>
  );
}

export default SignIn;

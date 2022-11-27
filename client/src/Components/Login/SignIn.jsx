import React from "react";

const SignIn = () => {
  return (
    <div>
      <form action="" className="flex-col space-y-5">
        <div className="flex gap-4">
          <label htmlFor="userName">Enter your userName</label>
          <input type="text" name="userName" id="userName" />
        </div>
        <div className="flex gap-4">
          <label htmlFor="passWord">Enter your passWord</label>
          <input type="text" name="passWord" id="passWord" />
        </div>
        <div>
          <button type="submit" className="bg-yellow-400 px-3 py-1">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;

import React from "react";

const SignUp = () => {
  return (
    <div>
      <form action="" className="flex-col space-y-5">
        <div className="flex gap-4">
          <label htmlFor="cNumber">Enter citizenShip number</label>
          <input type="text" name="cNumber" id="cNumber" />
        </div>

        <div className="flex gap-4">
          <label htmlFor="userName">Enter your userName</label>
          <input type="text" name="userName" id="userName" />
        </div>
        <div className="flex gap-4">
          <label htmlFor="passWord">Enter your passWord</label>
          <input type="text" name="passWord" id="passWord" />
        </div>

        <div className="flex gap-4">
          <label htmlFor="cPassWord">confirm passWord</label>
          <input type="text" name="cPassWord" id="cPassWord" />
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

export default SignUp;

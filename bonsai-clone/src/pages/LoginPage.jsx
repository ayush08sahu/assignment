import React, { useState } from "react";

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! (This is just a demo)");
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl w-full">
        <div className="flex flex-col md:flex-row">
          {/* Left Image Section */}
          <div className="md:w-1/2 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-8">
            <img
              src="https://pngimg.com/uploads/doge_meme/doge_meme_PNG16.png"
              className="w-full max-w-sm h-auto object-contain"
              alt="Meme"
            />
          </div>

          {/* Right Form Section */}
          <div className="md:w-1/2 p-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Sign up</h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* First Name */}
              <div className="relative">
                <i className="fas fa-user absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
                <i className="fas fa-user absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              </div>

              {/* Password */}
              <div className="relative">
                <i className="fas fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Password"
                  className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
                <i
                  className={`fas ${passwordVisible ? "fa-eye-slash" : "fa-eye"} absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer`}
                  onClick={togglePasswordVisibility}
                ></i>
              </div>

              {/* Remember Me */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                  Remember me
                </label>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors font-medium"
              >
                Log in
              </button>
            </form>

            {/* Divider & Socials */}
            <div className="mt-8">
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm text-gray-500 underline cursor-pointer">Create an account</span>
                <span className="text-sm text-gray-500">Or login with</span>
              </div>

              <div className="flex justify-center space-x-3">
                <button className="w-10 h-10 bg-blue-600 text-white rounded flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <i className="fab fa-facebook-f"></i>
                </button>
                <button className="w-10 h-10 bg-blue-400 text-white rounded flex items-center justify-center hover:bg-blue-500 transition-colors">
                  <i className="fab fa-twitter"></i>
                </button>
                <button className="w-10 h-10 bg-red-500 text-white rounded flex items-center justify-center hover:bg-red-600 transition-colors">
                  <i className="fab fa-google"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

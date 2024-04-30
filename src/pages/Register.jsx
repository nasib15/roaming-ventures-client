import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, updateProfileName } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState(null);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.pass.value;
    const name = form.name.value;
    const photo = form.url.value;

    if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(pass)) {
      setRegisterError(
        "Password must contain at least 6 characters, including uppercase and lowercase letters."
      );
      toast.error(registerError);
      return;
    }

    createUser(email, pass)
      .then(() => {
        updateProfileName(name, photo);
        toast.success("User registered successfully");
      })
      .catch((error) => {
        setRegisterError(error.message);
        toast.error(registerError);
        return;
      });
  };
  return (
    <div>
      <div className="mt-4">
        <section className=" dark:bg-gray-900">
          <div className=" flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Register your account
                </h1>
                <form
                  onSubmit={handleRegister}
                  className="space-y-4 md:space-y-6"
                >
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Your Name"
                      required={true}
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@gmail.com"
                      required={true}
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      PhotoURL
                    </label>
                    <input
                      type="text"
                      name="url"
                      placeholder="https://www.example.com/15.jpg"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required={true}
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Password
                    </label>
                    <input
                      type="password"
                      name="pass"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required={true}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white hover:bg-[#1e3799] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center  bg-[#4a69bd]"
                  >
                    Register
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account?{" "}
                    <Link
                      to={"/login"}
                      className="font-medium text-[#4a69bd] text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Login
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Register;

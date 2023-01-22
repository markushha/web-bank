import Link from "next/link";
import { Meta } from "../../app/utils/Meta";
import { useState } from "react";
import client from "../../app/clients/client";

function signin() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const clearForm = () => {
    setForm({
      username: "",
      password: "",
    });
  }

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // сделать валидность длины пароля и логина до отправления запроса

  const handleLogin = async ({ username, password }) => {
    try {
      setLoading(true);
      setError("");

      if (!username.trim() || !password.trim()) {
        setLoading(false);
        setError("Please fill all the fields");
        clearForm();
        return;
      }

      const response = await client.post("/auth/login", {
        username,
        password,
      });

      console.log('1');

      localStorage.setItem("token", response.data.token);
      window.location.replace("/");
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err.response.data.message);
      clearForm();
    }
  };

  return (
    <>
      <Meta title="Sign In" />
      <section className="bg-[#F4F7FF] h-[100vh] py-20 lg:py-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="relative mt-[7%] mx-auto max-w-[32.813rem] overflow-hidden rounded-lg bg-white py-16 px-10 text-center sm:px-12 md:px-[60px]">
                <label className="text-2xl font-semibold">Sign In</label>
                <div className="mt-6">
                  <div className="mb-6">
                    <input
                      type="text"
                      name="username"
                      value={form.username}
                      onChange={(e) => changeHandler(e)}
                      placeholder="Username"
                      className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="password"
                      name="password"
                      value={form.password}
                      onChange={(e) => changeHandler(e)}
                      placeholder="Password"
                      className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                    />
                  </div>
                  <div className="mb-8">
                    <button
                      type="submit"
                      onClick={() => handleLogin(form)}
                      className="bordder-primary w-full cursor-pointer rounded-md border bg-primary py-3 px-5 text-base text-white transition hover:bg-gray-100"
                    >
                      <p className="text-black text-xl font-semibold opacity-80">
                        {loading ? "Loading..." : "Sign In"}
                      </p>
                    </button>
                    {error && (
                      <div className="mt-6 mx-auto">
                        <p className="text-red-700 text-center text-xl py-2">
                          {error}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                <p className="text-base text-[#adadad]">
                  Not a member yet?{" "}
                  <Link
                    href="/auth/signup"
                    className="text-primary hover:underline"
                  >
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default signin;

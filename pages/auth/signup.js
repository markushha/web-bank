import Link from "next/link";
import { Meta } from "../../app/utils/Meta";
import { useState } from "react";
import client from "../../app/clients/client";

function signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async ({ username, password }) => {
    try {
      const response = await client.post("/auth/registration", {
        username,
        password,
      });
      window.location.replace("/auth/signin");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <Meta title="Sign Up" />
      <section className="bg-[#F4F7FF] h-[100vh] py-20 lg:py-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white py-16 px-10 text-center sm:px-12 md:px-[60px]">
                <label className="text-2xl font-semibold">Kaspi.kz</label>
                <div className="mt-6">
                  <div className="mb-6">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="email"
                      placeholder="Email"
                      className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                    />
                  </div>
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
                  <div className="mb-10">
                    <button
                      type="submit"
                      onClick={() => handleRegister(form)}
                      className="bordder-primary w-full cursor-pointer rounded-md border bg-primary py-3 px-5 text-base text-white transition hover:bg-gray-100"
                    >
                      <p className="text-black text-xl font-semibold opacity-80">
                        Sign Up
                      </p>
                    </button>
                  </div>
                </div>
                <p className="text-base text-[#adadad]">
                  Already a member?{" "}
                  <Link
                    href="/auth/signin"
                    className="text-primary hover:underline"
                  >
                    Sign In
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

export default signup;

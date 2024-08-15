import { useState } from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { Checkbox } from "../components/ui/checkbox";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  EyeClosedIcon,
  EyeOpenIcon,
} from "@radix-ui/react-icons";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../services/schemas";
import { loginUsers } from "../services/queryFunctions";
import { LoginType } from "../services/types";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { cn } from "../lib/utils";
import { motion } from "framer-motion";
const Login = () => {
  const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];
  const [showPassword, setShowPassword] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const heroContent = [
    {
      name: "Amelie Laurent",
      role: "Lead Designer, Zilly Cloud",
      companyType: "Web Development Agency",
      text: "Weve been using ZillyCloud to kickstart every new project and cant imagine working without it",
    },
    {
      name: "Jean Ducane",
      role: "Senior Engineer, Microsoft",
      companyType: "Big Data Enterprise",
      text: "Starting projects with ZillyCloud has become second nature to us. It's hard to imagine managing our work without this incredible tool.",
    },
    {
      name: "Tade Adegboye",
      role: "Frontend Engineer, Raenest",
      companyType: "Fintech",
      text: "We rely on ZillyCloud to jumpstart every project, and it's impossible to picture our workflow without it. It's simply essential.",
    },
    {
      name: "Daniel Bolude",
      role: "Backend Engineer, Google",
      companyType: "Web Development Agency",
      text: "ZillyCloud has become our secret weapon for project launches. It's hard to think about how we managed before—we wouldn't work without it now.",
    },
    {
      name: "Yves Lagrange",
      role: "Product Designer, Zilly Cloud",
      companyType: "Web Development Agency",
      text: "Every project we start begins with ZillyCloud, and we wouldn’t have it any other way. It’s integral to our success, and we can't work without it.",
    },
  ];
  const { register, handleSubmit, getValues, formState } = useForm<LoginType>({
    resolver: zodResolver(loginSchema),
  });

  const { errors } = formState;

  const registerMutation = useMutation({
    mutationFn: (data: LoginType) => {
      return loginUsers(data);
    },
    onSuccess: () => {
      // Handle success
      toast.success("Pin Confirmed", {
        position: "top-right",
        className: "font-jakarta",
      });
    },
    onError: (error: AxiosError) => {
      // Handle error
      toast.error("Pin Confirmation Failed", {
        position: "top-right",
        className: "font-jakarta",
      });
      console.error("Pin Confirmation Failed:", error.response);
    },
  });

  const onSubmitLogin: SubmitHandler<LoginType> = () => {
    const data: FieldValues = getValues();
    return registerMutation.mutate(data as LoginType);
  };

  // Handle the "Next" button click
  const handleNextClick = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
    }, 700);
  };

  // Handle the "Previous" button click
  const handlePreviousClick = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsAnimating(true);
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + heroContent.length) % heroContent.length
      );
    }, 700);
  };

  return (
    <div className="w-screen  flex items-center justify-center h-screen">
      <div className="flex basis-full flex-col items-center h-full  sm:basis-1/2">
        <div className="p-8 w-full flex items-start ">
          <p className="font-semibold text-2xl  text-[#7F56D9] font-jakarta ">
            Zilly Cloud
          </p>
        </div>
        <div className=" mt-16 xl:mt-0 xl:h-[80%] w-full flex items-center justify-center">
          <form
            onSubmit={handleSubmit(onSubmitLogin)}
            className="flex flex-col self-center gap-6 w-full xl:w-8/12  font-jakarta items-center xl:items-start"
          >
            <div className="flex flex-col gap-2 xl:gap-4">
              <h3 className="text-3xl font-semibold ">Welcome Back</h3>
              <p className="font-inter font-light text-sm text-slate-400">
                {" "}
                Please Enter Your Details
              </p>
            </div>
            <div className="flex font-inter  w-10/12 xl:w-9/12 flex-col gap-2 xl:gap-4">
              <div className="flex flex-col gap-2">
                <Label>Email</Label>
                <Input placeholder="Email" />
                {errors && (
                  <div className="text-red-500 text-sm">
                    {errors.email?.message}
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <Label>Password</Label>
                <div className="w-full relative items-start flex">
                  <Input
                    id="passsword"
                    {...register("password")}
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                  />

                  <div className=" right-0 absolute">
                    <Button
                      type="submit"
                      variant={"ghost"}
                      onClick={() => {
                        setShowPassword(!showPassword);
                      }}
                    >
                      {showPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
                    </Button>
                  </div>
                </div>
              </div>

              {errors && (
                <div className="text-red-500 text-sm">
                  {errors.password?.message}
                </div>
              )}
              <div className="w-full flex py-2 items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Checkbox />
                  <p className="text-sm font-inter">Remember For 30 days</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <p className="text-sm font-inter text-[#7F56D9] font-semibold">
                    Forgot Password
                  </p>
                </div>
              </div>
            </div>
            <Button
              size={"lg"}
              className=" bg-[#7F56D9] hover:bg-[#7F56D9]/80 w-9/12 text-lg "
            >
              Sign In
            </Button>

            <div className="text-sm w-9/12 items-center justify-center flex gap-1 font-semibold">
              <p className="font-medium">Dont have an account?</p>
              <Link className="text-[#7F56D9]" to="register">
                Signup
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className="sm:flex h-full  font-DM_Sans relative  bg-slate-400  items-center justify-center  hidden sm:basis-1/2">
        <img
          src={`/assets/${images[currentIndex]}`}
          className="w-full object-cover h-full"
        />
        <div className="absolute gap-4 h-full bg-black/40 text-white    flex-col bg flex items-center justify-end">
          <div className="flex h-[45%] px-4 lg:px-8 xl:px-16 flex-col gap-4 items-start justify-center">
            <motion.h2
              animate={
                isAnimating ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }
              }
              transition={{ type: "spring" }}
              className={cn(`  text-3xl xl:text-4xl  leading-[2.5rem]`)}
            >
              {heroContent[currentIndex].text}
            </motion.h2>

            <motion.h3
              animate={
                isAnimating ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
              }
              transition={{ type: "spring" }}
            >
              {heroContent[currentIndex].name}
            </motion.h3>

            <div className="flex w-full items-center justify-between gap-1">
              <div className="flex flex-col gap-1">
                <motion.p
                  animate={
                    isAnimating ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }
                  }
                  transition={{ type: "spring" }}
                >
                  {" "}
                  {heroContent[currentIndex].role}
                </motion.p>
                <motion.p
                  animate={
                    isAnimating ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }
                  }
                  transition={{ type: "spring" }}
                >
                  {heroContent[currentIndex].companyType}
                </motion.p>
              </div>

              <div className="flex gap-4">
                <Button
                  onClick={() => {
                    handlePreviousClick();
                  }}
                  variant="ghost"
                  className=" rounded-full w-12 h-12 xl:h-14 xl:w-14 border border-white"
                >
                  <ArrowLeftIcon className=" h-6 w-6" />
                </Button>
                <Button
                  onClick={() => {
                    handleNextClick();
                  }}
                  variant="ghost"
                  className=" rounded-full w-12 h-12 xl:h-14 xl:w-14 border border-white"
                >
                  <ArrowRightIcon className=" h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

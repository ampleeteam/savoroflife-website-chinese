"use client";
import { createSupabaseFrontendClient } from "@/lib/supabase/frontend";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

type FormData = {
  email: string;
};

const SubscribeNewsletter = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful, isDirty },
    reset,
    setError,
    clearErrors,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    const supabase = createSupabaseFrontendClient();

    try {
      const { data: resdata, error } = await supabase
        .from("newsletter_subscriber")
        .insert([{ email: data.email }])
        .select();

      if (error) {
        setError("root", {
          type: "manual",
          message: "An error occurred. Please try again later.",
        });
      } else {
        reset();
      }
    } catch (error) {
      setError("root", {
        type: "manual",
        message: "An unexpected error occurred.",
      });
    }
  };

  const handleInputChange = () => {
    if (isDirty) {
      clearErrors();
    }
  };

  return (
    <div className="lg:px-[200px] bg-[#D9D9D9]">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center gap-y-3 px-10 py-[100px]">
          <h2 className="font-semibold text-2xl">订阅我们的电子报</h2>
          <p>
            订阅我们的电子报，
            让您第一时间获取最新优惠、产品更新，以及我们的使命项目资讯！
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              placeholder="Email"
              type="email"
              disabled={isSubmitting}
              {...register("email", {
                required: true,
                onChange: handleInputChange,
              })}
            />
            {errors.email && (
              <p className="text-xs mt-1">This field is required</p>
            )}
            {errors.root && (
              <p className="text-xs mt-1">{errors.root.message}</p>
            )}
            {isSubmitSuccessful && isDirty && (
              <p className="text-xs mt-1">订阅成功!</p>
            )}
            <Button
              className="bg-[#99A799] rounded-full w-[150px] text-[#223733] font-bold mt-3"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </Button>
          </form>
        </div>
        <div className="">
          <Image
            src="/storefront.png"
            alt="Savor Restaurant"
            width={720}
            height={540}
            className="grow w-full h-full aspect-[1.33] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default SubscribeNewsletter;

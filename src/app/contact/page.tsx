"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MessageSchema } from '@/components/validationSchema';

export default function Contact() {
    const { register, handleSubmit, formState } = useForm({
        resolver: zodResolver(MessageSchema)
    });

    const submitHandler = (data: any) => {
        console.log(data);
    };

    return (
        <div className="flex w-full h-full items-center justify-center flex-col gap-4">
            <h1 className="font-bold text-2xl">Contact information</h1>
            <form className="flex justify-center items-center flex-col gap-4" onSubmit={handleSubmit(submitHandler)}>
            <input
                    className={`text-black ${formState.errors.firstname ? "border-red-500" : ""}`}
                    placeholder="Firstname"
                    {...register("firstname")}
                />
                <input
                    className={`text-black ${formState.errors.lastname ? "border-red-500" : ""}`}
                    placeholder="Lastname"
                    {...register("lastname")}
                />
                <input
                    className={`text-black ${formState.errors.email ? "border-red-500" : ""}`}
                    type="email"
                    placeholder="Email"
                    {...register("email")}
                />
                <input
                    className={`text-black ${formState.errors.phone ? "border-red-500" : ""}`}
                    type="phone"
                    placeholder="Phone"
                    {...register("phone")}
                />
                <textarea
                    className="text-black resize-y w-full"
                    placeholder="Message"
                    {...register("message")}
                />
                <button type="submit" className="bg-blue-600 p-2 rounded-md w-1/2">Submit</button>
            </form>
        </div>
    );
}

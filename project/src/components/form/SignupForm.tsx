"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import bcrypt from "bcryptjs";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Mail, Lock, User, Phone, FolderPen, Calendar } from 'lucide-react';
import { getRandomValues } from "crypto";

const schema = z.object({
  studentID: z.string().min(8,  "Invalid Student ID").max(8, "Invalid Student ID"),
    firstName: z.string().min(4,"First name is required"),
    lastName: z.string().min(4,  "Last name is required"),  
    otherName: z.string(), 
    phoneNumber: z.string(),  
    date: z.string().transform((str) => new Date(str)),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(8, "Password must be at least 8 characters"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type FormData = z.infer<typeof schema>;

const SignUpForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    
    const userData = {
      ...data,
      
    };
    // console.log(data);

    try {
      const response = await axios.post(
        "http://localhost:5050/student/add",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201 || response.status === 200) {
        console.error("Login successful");
        window.location.href = "/";
      } else {
        console.error("Error creating account");
      }
    } catch (e) {
      console.error("Error:", e);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-200">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-xl font-semibold text-center text-blue-500 mb-2">University of Ghana</h1>
        <h2 className="text-2xl font-bold mb-2 text-center">Sign Up</h2>
        <p className="text-center text-gray-600 mb-6">Let's create your account</p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          
          <div className="relative">
            <FolderPen className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              {...register("studentID")}
              type="text"
              placeholder="Student ID"
              className="w-full pl-10 pr-3 py-2 border rounded-md"
            />
          </div>
          {errors.studentID && <p className="text-red-500 text-sm">{errors.studentID.message}</p>}
          <div className="relative">
            <User className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              {...register("firstName")}
              type="text"
              placeholder="First name"
              className="w-full pl-10 pr-3 py-2 border rounded-md"
            />
          </div>
          {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
          <div className="relative">
            <User className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              {...register("lastName")}
              type="text"
              placeholder="Last name"
              className="w-full pl-10 pr-3 py-2 border rounded-md"
            />
          </div>
          {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
          <div className="relative">
            <User className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              {...register("otherName")}
              type="text"
              placeholder="Other name"
              className="w-full pl-10 pr-3 py-2 border rounded-md"
            />
          </div>
          {errors.otherName && <p className="text-red-500 text-sm">{errors.otherName.message}</p>}
          <div className="relative">
            <Phone className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              {...register("phoneNumber")}
              type="text"
              placeholder="Phone Numer"
              className="w-full pl-10 pr-3 py-2 border rounded-md"
            />
          </div>
          {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>}
          <div className="relative">
            <Calendar  className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              {...register("date")}
              type="date"
              placeholder="Date of Birth"
              className="w-full pl-10 pr-3 py-2 border rounded-md text-black"
            />
          </div>
          {errors.date && <p className="text-red-500 text-sm">{errors.date.message}</p>}
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              {...register("email")}
              type="email"
              placeholder="Johndoe@gmail.com"
              className="w-full pl-10 pr-3 py-2 border rounded-md"
            />
          </div>
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              placeholder="********"
              className="w-full pl-10 pr-10 py-2 border rounded-md text-black"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2.5 text-gray-400"
            >
              {!showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
            </button>
          </div>
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              {...register("confirmPassword")}
              type={showConfirmPassword ? "text" : "password"}
              placeholder="********"
              className="w-full pl-10 pr-10 py-2 border rounded-md text-black"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-2.5 text-gray-400"
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-pink-600 transition duration-300"
            disabled={!!errors.password || !!errors.confirmPassword}
          >
            Sign Up
          </button>
        </form>
        <p className="text-xs text-center text-gray-500">
          Already have an account? <a href="/" className="text-blue-500 font-semibold">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
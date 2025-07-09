import LoginForm from "@/auth/LoginForm";
import { Diamond } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-100 via-indigo-100 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Logo + Title */}
        <div className="flex flex-col items-center gap-2">
          <Diamond className="w-8 h-8 text-indigo-500" />
          <h1 className="text-3xl font-bold tracking-tight text-slate-800">
            CryptoAuth
          </h1>
        </div>

        {/* Form Card */}
        <LoginForm />

        {/* Footer */}
        <footer className="text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} CryptoAuth. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default page;

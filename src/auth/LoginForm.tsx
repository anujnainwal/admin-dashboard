"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Lock, Eye, EyeOff, Loader2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
  rememberMe: z.boolean().default(false).optional(),
});

export default function LoginForm() {
  const [showPassword, setShowPassword] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const { isSubmitting } = form.formState;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(values);

      toast.success("Login Successful", {
        description: "Welcome back, Admin!",
      });
    } catch (error) {
      toast.error("Login Failed", {
        description: "Invalid credentials. Please try again.",
      });
    }
  }

  return (
    <Card className="w-full bg-white/80 backdrop-blur-lg border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-2xl">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-slate-800">
          Welcome back, Admin!
        </CardTitle>
        <CardDescription className="text-slate-500 pt-2">
          Enter your credentials to access the dashboard.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel className="text-slate-700">Email</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <Input
                        placeholder="admin@example.com"
                        className="pl-10 bg-white text-slate-800 border border-slate-300 focus:border-indigo-500 focus:ring-indigo-500"
                        {...field}
                        aria-invalid={fieldState.invalid}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel className="text-slate-700">Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="pl-10 pr-12 bg-white text-slate-800 border border-slate-300 focus:border-indigo-500 focus:ring-indigo-500"
                        {...field}
                        aria-invalid={fieldState.invalid}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-1 cursor-pointer top-1/2 -translate-y-1/2 h-8 w-8 hover:bg-slate-200"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5 text-slate-400" />
                        ) : (
                          <Eye className="h-5 w-5 text-slate-400" />
                        )}
                        <span className="sr-only">
                          Toggle password visibility
                        </span>
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Checkbox + Link */}
            <div className="flex items-center justify-between">
              <FormField
                control={form.control}
                name="rememberMe"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="border-slate-400 data-[state=checked]:bg-indigo-500 data-[state=checked]:border-indigo-500"
                      />
                    </FormControl>
                    <FormLabel className="text-sm font-normal text-slate-600">
                      Remember me
                    </FormLabel>
                  </FormItem>
                )}
              />
              <Button
                variant="link"
                className="p-0 h-auto text-sm text-indigo-600 hover:text-indigo-500"
              >
                Forgot Password?
              </Button>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              className="w-full font-semibold text-base bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white transition-all duration-300 ease-in-out transform hover:scale-105 rounded-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              ) : (
                "Login"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

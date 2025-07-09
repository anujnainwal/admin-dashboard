"use client";

import * as React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { User, Settings, LogOut } from "lucide-react";

export function ProfileDropdown({
  user,
}: {
  user: { name: string; email: string; role: string; avatarUrl?: string };
}) {
  const [logoutDialog, setLogoutDialog] = React.useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="w-8 h-8 cursor-pointer">
            <AvatarImage src={user.avatarUrl} alt={user.name} />
            <AvatarFallback>{user.name.slice(0, 2)}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-64">
          {/* Profile Info */}
          <div className="px-4 py-3 flex items-center space-x-4">
            <Avatar className="w-12 h-12 ring-2 ring-indigo-500">
              <AvatarImage src={user.avatarUrl} alt={user.name} />
              <AvatarFallback>{user.name.slice(0, 2)}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col justify-center">
              <span className="text-base font-semibold text-slate-900 leading-tight">
                {user.name}
              </span>
              <span className="text-sm uppercase text-indigo-500">
                {user.role}
              </span>
            </div>
          </div>

          <DropdownMenuSeparator />

          {/* Actions */}
          <DropdownMenuItem
            onSelect={() => {
              /* go to profile */
            }}
          >
            <User className="mr-2 h-4 w-4" /> My Profile
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={() => {
              /* go to settings */
            }}
          >
            <Settings className="mr-2 h-4 w-4" /> Settings
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          {/* Logout */}
          <DropdownMenuItem
            className="text-red-600 focus:text-red-600"
            onSelect={() => setLogoutDialog(true)}
          >
            <LogOut className="mr-2 h-4 w-4" /> Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Logout Confirmation */}
      <Dialog open={logoutDialog} onOpenChange={setLogoutDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Logout</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            Are you sure you want to sign out?
          </DialogDescription>
          <DialogFooter className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setLogoutDialog(false)}>
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={() => {
                setLogoutDialog(false);
                // trigger logout action
              }}
            >
              Sign Out
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

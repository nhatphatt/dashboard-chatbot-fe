"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Home,
  Building2,
  GraduationCap,
  MapPin,
  BookOpen,
  DollarSign,
  LogOut,
  Menu,
  X,
  Users,
  BarChart3,
  Settings,
  HelpCircle,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { authService } from "@/lib/auth";

const navigationGroups = [
  {
    name: "Tổng Quan",
    items: [
      { name: "Dashboard", href: "/dashboard", icon: Home },
    ],
  },
  {
    name: "Quản Lý Dữ Liệu",
    items: [
      { name: "Khoa", href: "/dashboard/departments", icon: Building2 },
      {
        name: "Chương Trình",
        href: "/dashboard/programs",
        icon: GraduationCap,
      },
      { name: "Cơ Sở", href: "/dashboard/campuses", icon: MapPin },
      { name: "Học Phí", href: "/dashboard/tuition", icon: DollarSign },
    ],
  },
  {
    name: "Hỗ Trợ",
    items: [
      { name: "Tài Liệu", href: "/dashboard/knowledge", icon: BookOpen },
      { name: "Người Dùng", href: "/dashboard/users", icon: Users },
    ],
  },
  {
    name: "Hệ Thống",
    items: [
      { name: "Cài Đặt", href: "/dashboard/settings", icon: Settings },
      { name: "Trợ Giúp", href: "/dashboard/help", icon: HelpCircle },
    ],
  },
];

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [collapsedGroups, setCollapsedGroups] = useState<Set<string>>(
    new Set()
  );

  const handleLogout = () => {
    authService.logout();
    router.push("/login");
  };

  const toggleGroup = (groupName: string) => {
    const newCollapsedGroups = new Set(collapsedGroups);
    if (newCollapsedGroups.has(groupName)) {
      newCollapsedGroups.delete(groupName);
    } else {
      newCollapsedGroups.add(groupName);
    }
    setCollapsedGroups(newCollapsedGroups);
  };

  return (
    <div
      className={cn(
        "flex h-full flex-col bg-white border-r border-gray-200 transition-all duration-300 ease-in-out shadow-sm",
        isCollapsed ? "w-16" : "w-64",
        className
      )}
    >
      <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-blue-600 to-blue-700">
        {!isCollapsed && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <GraduationCap className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">FPT University</h1>
              <p className="text-xs text-blue-100">Admin Dashboard</p>
            </div>
          </div>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="h-8 w-8 p-0 text-white hover:bg-blue-500"
        >
          {isCollapsed ? (
            <Menu className="h-4 w-4" />
          ) : (
            <X className="h-4 w-4" />
          )}
        </Button>
      </div>

      <ScrollArea className="flex-1 px-3 py-4">
        <nav className="space-y-6">
          {navigationGroups.map((group) => (
            <div key={group.name} className="space-y-2">
              {!isCollapsed && (
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-2">
                    {group.name}
                  </h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleGroup(group.name)}
                    className="h-6 w-6 p-0 text-gray-400 hover:text-gray-600"
                  >
                    {collapsedGroups.has(group.name) ? (
                      <ChevronRight className="h-3 w-3" />
                    ) : (
                      <ChevronDown className="h-3 w-3" />
                    )}
                  </Button>
                </div>
              )}

              {(!collapsedGroups.has(group.name) || isCollapsed) && (
                <div className="space-y-1">
                  {group.items.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link key={item.name} href={item.href}>
                        <Button
                          variant={isActive ? "default" : "ghost"}
                          className={cn(
                            "w-full justify-start transition-all duration-200",
                            isCollapsed ? "px-2 h-10" : "px-3 h-9",
                            isActive
                              ? "bg-blue-600 hover:bg-blue-700 text-white shadow-sm"
                              : "hover:bg-gray-100 text-gray-700",
                            !isCollapsed && "text-sm"
                          )}
                          title={isCollapsed ? item.name : undefined}
                        >
                          <item.icon
                            className={cn(
                              "h-4 w-4 flex-shrink-0",
                              !isCollapsed && "mr-3",
                              isActive ? "text-white" : "text-gray-500"
                            )}
                          />
                          {!isCollapsed && (
                            <span className="truncate">{item.name}</span>
                          )}
                        </Button>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </nav>
      </ScrollArea>

      <div className="p-3 border-t bg-gray-50">
        {!isCollapsed && (
          <div className="mb-3 px-2">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="h-4 w-4 text-blue-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  Admin User
                </p>
                <p className="text-xs text-gray-500 truncate">
                  admin@fpt.edu.vn
                </p>
              </div>
            </div>
          </div>
        )}

        <Button
          variant="ghost"
          onClick={handleLogout}
          className={cn(
            "w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50 transition-colors",
            isCollapsed ? "px-2 h-10" : "px-3 h-9"
          )}
          title={isCollapsed ? "Đăng Xuất" : undefined}
        >
          <LogOut className={cn("h-4 w-4", !isCollapsed && "mr-3")} />
          {!isCollapsed && "Đăng Xuất"}
        </Button>
      </div>
    </div>
  );
}

"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Construction, Clock, Wrench } from "lucide-react";

export default function UsersPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-2">
          <Users className="h-6 w-6 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-900">Quản Lý Người Dùng</h1>
        </div>
        <p className="text-gray-600">
          Quản lý tài khoản người dùng và phân quyền hệ thống
        </p>
      </div>

      <div className="flex items-center justify-center min-h-[60vh]">
        <Card className="w-full max-w-2xl">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="relative">
                <Construction className="h-16 w-16 text-orange-500" />
                <div className="absolute -top-1 -right-1">
                  <Clock className="h-6 w-6 text-blue-500 animate-pulse" />
                </div>
              </div>
            </div>
            <CardTitle className="text-2xl text-gray-800">
              Chức Năng Đang Được Phát Triển
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-gray-600 text-lg">
              Tính năng quản lý người dùng hiện đang trong quá trình phát triển.
            </p>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Wrench className="h-5 w-5 text-blue-600" />
                <span className="font-semibold text-blue-800">Các tính năng sắp có:</span>
              </div>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Quản lý tài khoản người dùng</li>
                <li>• Phân quyền và vai trò</li>
                <li>• Theo dõi hoạt động người dùng</li>
                <li>• Cài đặt bảo mật</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg">
              <p className="text-orange-800 font-medium">
                🚧 Vui lòng quay lại sau để sử dụng tính năng này
              </p>
              <p className="text-orange-600 text-sm mt-1">
                Chúng tôi đang nỗ lực hoàn thiện để mang đến trải nghiệm tốt nhất
              </p>
            </div>

            <div className="pt-4">
              <div className="flex items-center justify-center space-x-2 text-gray-500">
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
              <p className="text-sm text-gray-500 mt-2">Đang phát triển...</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

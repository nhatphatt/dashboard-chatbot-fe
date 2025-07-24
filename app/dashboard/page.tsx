"use client";

import { useState, useEffect } from "react";
import { API_ENDPOINTS, ACTIVITY_COLORS } from "@/lib/constants";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import {
  Building2,
  GraduationCap,
  MapPin,
  BookOpen,
  DollarSign,
  Activity,
  RefreshCw,
  Clock,
} from "lucide-react";

// API Response Interfaces
interface DashboardStats {
  totalDepartments: number;
  totalPrograms: number;
  totalCampuses: number;
  totalStudents: number;
  totalTuitionPrograms: number;
  totalKnowledgeDocs: number;
}

interface RecentActivity {
  id: string;
  type: string;
  title: string;
  description: string;
  timestamp: string;
  entityId: string;
  entityName: string;
}

interface QuickAction {
  id: string;
  title: string;
  description: string;
  icon: string;
  route: string;
  color: string;
}

interface DashboardData {
  stats: DashboardStats;
  recentActivities: RecentActivity[];
  quickActions: QuickAction[];
}

// Empty stats template for when no data is available
const createEmptyStatsArray = () => [
  {
    title: "Tổng Số Khoa",
    value: "0",
    description: "Khoa đang hoạt động",
    icon: Building2,
    color: "text-blue-600",
  },
  {
    title: "Chương Trình",
    value: "0",
    description: "Chương trình có sẵn",
    icon: GraduationCap,
    color: "text-green-600",
  },
  {
    title: "Cơ Sở",
    value: "0",
    description: "Địa điểm cơ sở",
    icon: MapPin,
    color: "text-purple-600",
  },

  {
    title: "Học Phí Chương Trình",
    value: "0",
    description: "Chương trình có học phí",
    icon: DollarSign,
    color: "text-yellow-600",
  },
  {
    title: "Tài Liệu",
    value: "0",
    description: "Tài liệu hướng dẫn",
    icon: BookOpen,
    color: "text-indigo-600",
  },
];

export default function DashboardPage() {
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(
    null
  );

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch dashboard data
  const fetchDashboardData = async () => {
    try {
      setError(null);
      const response = await fetch(API_ENDPOINTS.DASHBOARD);

      if (!response.ok) {
        throw new Error(
          `HTTP ${response.status}: Failed to fetch dashboard data`
        );
      }

      const data = await response.json();
      setDashboardData(data);
    } catch (error) {
      console.error("Dashboard API Error:", error);
      setError(
        error instanceof Error ? error.message : "Failed to load dashboard data"
      );
    }
  };

  // Load data on component mount
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      await fetchDashboardData();
      setIsLoading(false);
    };

    loadData();
  }, []);

  // Refresh data
  const handleRefresh = async () => {
    await fetchDashboardData();
  };

  // Format timestamp
  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60)
    );

    if (diffInHours < 1) return "Vừa xong";
    if (diffInHours < 24) return `${diffInHours} giờ trước`;
    return date.toLocaleDateString("vi-VN");
  };

  // Get activity color based on type
  const getActivityColor = (type: string) => {
    return (
      ACTIVITY_COLORS[type as keyof typeof ACTIVITY_COLORS] || "bg-gray-600"
    );
  };

  // Create stats array from API data
  const createStatsArray = (stats: DashboardStats) => [
    {
      title: "Tổng Số Khoa",
      value: stats.totalDepartments.toString(),
      description: "Khoa đang hoạt động",
      icon: Building2,
      color: "text-blue-600",
    },
    {
      title: "Chương Trình",
      value: stats.totalPrograms.toString(),
      description: "Chương trình có sẵn",
      icon: GraduationCap,
      color: "text-green-600",
    },
    {
      title: "Cơ Sở",
      value: stats.totalCampuses.toString(),
      description: "Địa điểm cơ sở",
      icon: MapPin,
      color: "text-purple-600",
    },

    {
      title: "Học Phí Chương Trình",
      value: stats.totalTuitionPrograms.toString(),
      description: "Chương trình có học phí",
      icon: DollarSign,
      color: "text-yellow-600",
    },
    {
      title: "Tài Liệu",
      value: stats.totalKnowledgeDocs.toString(),
      description: "Tài liệu hướng dẫn",
      icon: BookOpen,
      color: "text-indigo-600",
    },
  ];

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">
            Chào mừng đến với bảng điều khiển quản trị
          </p>
        </div>

        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Đang tải dữ liệu dashboard...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error && !dashboardData) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">
            Chào mừng đến với bảng điều khiển quản trị
          </p>
        </div>

        <Card className="border-red-200">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-red-600 mb-2">⚠️</div>
              <h3 className="text-lg font-semibold text-red-800 mb-2">
                Lỗi tải dữ liệu
              </h3>
              <p className="text-red-600 mb-4">{error}</p>
              <Button onClick={handleRefresh} variant="outline">
                <RefreshCw className="h-4 w-4 mr-2" />
                Thử lại
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const stats = dashboardData
    ? createStatsArray(dashboardData.stats)
    : createEmptyStatsArray();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">
            Chào mừng đến với bảng điều khiển quản trị
          </p>
        </div>
        <Button onClick={handleRefresh} variant="outline" size="sm">
          <RefreshCw className="h-4 w-4 mr-2" />
          Làm mới
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activities - Full Width */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Activity className="h-5 w-5" />
            <span>Hoạt Động Gần Đây</span>
          </CardTitle>
          <CardDescription>
            Cập nhật mới nhất từ bảng điều khiển của bạn
          </CardDescription>
        </CardHeader>
        <CardContent>
          {dashboardData?.recentActivities &&
          dashboardData.recentActivities.length > 0 ? (
            <div className="space-y-4">
              {dashboardData.recentActivities.slice(0, 5).map((activity) => (
                <div key={activity.id} className="flex items-start space-x-4">
                  <div
                    className={`w-2 h-2 ${getActivityColor(
                      activity.type
                    )} rounded-full mt-2`}
                  ></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">
                      {activity.title}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {activity.description}
                    </p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Clock className="h-3 w-3 text-muted-foreground" />
                      <p className="text-xs text-muted-foreground">
                        {formatTimestamp(activity.timestamp)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <Activity className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">Chưa có hoạt động nào</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

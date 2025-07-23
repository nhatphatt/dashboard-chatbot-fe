import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Building2,
  GraduationCap,
  MapPin,
  Users,
  BookOpen,
  DollarSign,
} from "lucide-react";

const stats = [
  {
    title: "Tổng Số Khoa",
    value: "12",
    description: "Khoa đang hoạt động",
    icon: Building2,
    color: "text-blue-600",
  },
  {
    title: "Chương Trình",
    value: "48",
    description: "Chương trình có sẵn",
    icon: GraduationCap,
    color: "text-green-600",
  },
  {
    title: "Cơ Sở",
    value: "5",
    description: "Địa điểm cơ sở",
    icon: MapPin,
    color: "text-purple-600",
  },
  {
    title: "Tổng Sinh Viên",
    value: "2,547",
    description: "Sinh viên đã đăng ký",
    icon: Users,
    color: "text-orange-600",
  },
  {
    title: "Học Phí Chương Trình",
    value: "245",
    description: "Chương trình có học phí",
    icon: DollarSign,
    color: "text-green-600",
  },
  {
    title: "Tài Liệu Kiến Thức",
    value: "3",
    description: "Tài liệu trong cơ sở dữ liệu",
    icon: BookOpen,
    color: "text-indigo-600",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">
          Chào mừng đến với bảng điều khiển quản trị
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Hoạt Động Gần Đây</CardTitle>
            <CardDescription>
              Cập nhật mới nhất từ bảng điều khiển của bạn
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Khoa mới được tạo</p>
                  <p className="text-xs text-muted-foreground">2 giờ trước</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">
                    Chương trình được cập nhật
                  </p>
                  <p className="text-xs text-muted-foreground">4 giờ trước</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">
                    Thông tin cơ sở được chỉnh sửa
                  </p>
                  <p className="text-xs text-muted-foreground">1 ngày trước</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Thao Tác Nhanh</CardTitle>
            <CardDescription>Các tác vụ quản trị thông dụng</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 text-left border rounded-lg hover:bg-gray-50 transition-colors">
                <Building2 className="h-6 w-6 text-blue-600 mb-2" />
                <p className="font-medium">Thêm Khoa</p>
                <p className="text-xs text-muted-foreground">Tạo khoa mới</p>
              </button>
              <button className="p-4 text-left border rounded-lg hover:bg-gray-50 transition-colors">
                <GraduationCap className="h-6 w-6 text-green-600 mb-2" />
                <p className="font-medium">Thêm Chương Trình</p>
                <p className="text-xs text-muted-foreground">
                  Tạo chương trình mới
                </p>
              </button>
              <button className="p-4 text-left border rounded-lg hover:bg-gray-50 transition-colors">
                <MapPin className="h-6 w-6 text-purple-600 mb-2" />
                <p className="font-medium">Thêm Cơ Sở</p>
                <p className="text-xs text-muted-foreground">Tạo cơ sở mới</p>
              </button>
              <button className="p-4 text-left border rounded-lg hover:bg-gray-50 transition-colors">
                <DollarSign className="h-6 w-6 text-green-600 mb-2" />
                <p className="font-medium">Xem Học Phí</p>
                <p className="text-xs text-muted-foreground">
                  Tra cứu học phí chương trình
                </p>
              </button>
              <button className="p-4 text-left border rounded-lg hover:bg-gray-50 transition-colors">
                <BookOpen className="h-6 w-6 text-indigo-600 mb-2" />
                <p className="font-medium">Tải Lên Tài Liệu</p>
                <p className="text-xs text-muted-foreground">
                  Thêm tài liệu kiến thức
                </p>
              </button>
              <button className="p-4 text-left border rounded-lg hover:bg-gray-50 transition-colors">
                <Users className="h-6 w-6 text-orange-600 mb-2" />
                <p className="font-medium">Xem Báo Cáo</p>
                <p className="text-xs text-muted-foreground">Tạo báo cáo</p>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

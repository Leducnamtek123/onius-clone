import { ArrowRight } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "wouter";

const footerColumns = [
  {
    title: "Products",
    items: ["Accessories", "Ceiling Recessed", "Ceiling Surface", "Ceiling Suspended", "Drivers"],
  },
  {
    title: "Stories",
    items: ["Sustainability and Wellness", "Technology and Futurism", "Architecture and Design", "Diversity and Inclusion", "Standards and Guidelines"],
  },
  {
    title: "Brand",
    items: ["Vì sao nên lựa chọn Unios", "Giới thiệu về Unios", "Sustainability", "Văn hóa doanh nghiệp"],
  },
  {
    title: "Projects",
    items: ["Thể thao và giải trí", "Ngành công nghiệp", "Khu dân cư phức hợp", "Ngành dịch vụ", "Khách sạn"],
  },
  {
    title: "Resources",
    items: ["Tài liệu hướng dẫn", "Sách", "Catalogue", "Tạp chí", "Khác"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-black px-6 pb-8 pt-16 text-white md:px-12" data-testid="footer">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[320px_minmax(0,1fr)]">
          <div>
            <Link href="/" className="inline-flex items-center">
              <span className="text-[3rem] font-bold tracking-[-0.06em] leading-none">unios.</span>
            </Link>

            <div className="mt-14">
              <div className="flex items-center gap-2 text-sm text-white/70">
                <span>Ngôn ngữ:</span>
                <svg viewBox="0 0 24 16" className="h-3 w-4" aria-hidden="true">
                  <rect width="24" height="16" rx="1.5" fill="#da251d" />
                  <path
                    d="M12 3.4l1.4 2.9 3.2.5-2.3 2.2.5 3.1-2.8-1.5-2.8 1.5.5-3.1-2.3-2.2 3.2-.5L12 3.4z"
                    fill="#ffdf00"
                  />
                </svg>
                <span className="font-semibold text-white">Tiếng Việt</span>
                <span>▾</span>
              </div>

              <div className="mt-5 flex items-center gap-4 text-white/70">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 transition-colors hover:border-white hover:text-white"
                >
                  <FaFacebookF className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-semibold">Liên hệ với chúng tôi</h3>
                <div className="mt-6 space-y-2 text-sm leading-6 text-white/55">
                  <p>
                    Hà Nội: E2, Chelsea Residence, P. Trần Kim Xuyến,
                    <br />
                    Phường Yên Hoà, Hà Nội 100000
                  </p>
                  <p>
                    Hồ Chí Minh: B2 Tháp Canary, Đảo Kim Cương,
                    <br />
                    Phường Bình Trưng, Thành phố Hồ Chí Minh 700000
                  </p>
                </div>
                <div className="mt-6 space-y-1 text-sm font-semibold text-white">
                  <p>+84 901435485</p>
                  <p>vietnam@unios.com</p>
                </div>

                <div className="mt-8 space-y-3 text-sm font-semibold">
                  {["Vị trí cửa hàng", "Phòng trưng bày", "Warranty"].map((item) => (
                    <a key={item} href="#" className="flex items-center gap-2 transition-opacity hover:opacity-80">
                      <span>{item}</span>
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  ))}
                </div>

                <p className="mt-6 max-w-[220px] text-sm italic leading-6 text-white/45">
                  Chỉ có thể xem phòng trưng bày theo lịch hẹn
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="max-w-[720px]">
              <h2 className="text-[1.75rem] font-semibold tracking-[-0.03em] md:text-[2rem]">Nhận thông tin mới nhất</h2>
              <p className="mt-3 text-[15px] leading-7 text-white/55">
                Đăng ký nhận bản tin của chúng tôi để xem tin tức mới nhất, nội dung cập nhật sản phẩm, dữ liệu nghiên cứu điển hình về dự án và nhiều nội dung hấp dẫn khác.
                <a href="#" className="font-semibold text-white underline decoration-white/40 underline-offset-2">
                  Chính sách quyền riêng tư
                </a>
                .
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-[1fr_1fr_1fr_auto]">
                {["Tên", "Họ", "Email"].map((label) => (
                  <div key={label}>
                    <label className="mb-2 block text-sm font-semibold text-white">{label}</label>
                    <input
                      type="text"
                      className="h-12 w-full border border-white/20 bg-transparent px-3 text-white outline-none placeholder:text-white/20 focus:border-white/50"
                    />
                  </div>
                ))}
                <button className="mt-7 h-12 bg-white px-6 text-sm font-medium text-black transition-colors hover:bg-white/90 md:mt-7">
                  Gửi
                </button>
              </div>

              <label className="mt-4 flex items-center gap-3 text-sm text-white/70">
                <input type="checkbox" className="h-4 w-4 border-white/30 bg-transparent" />
                <span>Tôi đồng ý với của Unios điều khoản và điều kiện</span>
              </label>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-5">
              {footerColumns.map((column) => (
                <div key={column.title}>
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-white">{column.title}</h3>
                  <ul className="mt-6 space-y-4 text-sm text-white/55">
                    {column.items.map((item) => (
                      <li key={item}>
                        <a href="#" className="transition-colors hover:text-white">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
              <p>© 2023 Unios Pty Ltd</p>
              <div className="flex flex-wrap gap-5">
                <a href="#" className="transition-colors hover:text-white">
                  Chính sách quyền riêng tư
                </a>
                <a href="#" className="transition-colors hover:text-white">
                  Áp dụng Điều khoản dịch vụ
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

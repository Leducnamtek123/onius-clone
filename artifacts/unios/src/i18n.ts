import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export type Locale = "en" | "vi";

export const localeOptions: Array<{ code: Locale; label: string; shortLabel: string }> = [
  { code: "en", label: "English", shortLabel: "EN" },
  { code: "vi", label: "Tiếng Việt", shortLabel: "VI" },
];

export function getLocaleFromPath(path: string): Locale {
  return path === "/vi" || path.startsWith("/vi/") ? "vi" : "en";
}

export function stripLocale(path: string): string {
  const stripped = path.replace(/^\/vi(?=\/|$)/, "");
  return stripped || "/";
}

export function getLocalizedPath(path: string, locale: Locale): string {
  const cleanPath = stripLocale(path);
  if (locale === "en") return cleanPath;
  return cleanPath === "/" ? "/vi" : `/vi${cleanPath}`;
}

const resources = {
  en: {
    translation: {
      common: {
        language: "Language",
        english: "English",
        vietnamese: "Tiếng Việt",
        close: "Close",
        any: "Any",
        new: "NEW",
        search: "Search",
      },
      nav: {
        imageLibrary: "Image Library",
        whereToBuy: "Where to buy",
        contact: "Contact",
        login: "Login/Signup",
        products: "Products",
        projects: "Projects",
        stories: "Stories",
        resources: "Resources",
        brand: "Brand",
        toolbox: "My Toolbox",
        searchPlaceholder: "Search products, projects, stories...",
        brandSubnav: {
          whyUnios: "Why Unios",
          aboutUnios: "About Unios",
          sustainability: "Sustainability",
          ourCulture: "Our Culture",
        },
      },
      products: {
        detailsLabel: "View details for {{name}}",
        hideFilters: "Hide filters",
        showFilters: "Show filters",
        category: "Category",
        brightness: "Brightness (lumen output)",
        finish: "Finish",
        moreFinishes: "More finishes",
        colourTemperature: "Colour Temperature",
        moreFilters: "More filters",
        allProducts: "All products",
        count: "1 - 24 of 117 Products",
        productTab: "Product",
        onsiteTab: "On-site",
        sortBy: "Sort by:",
        recommended: "Recommended",
        compare: "Compare",
      },
      projects: {
        featured: {
          builtHeadOffice: "Legacy of the future",
          prestigeHomes: "A home of comfort, simplicity and calm",
          karrinyupShoppingCentre: "Illuminating Perth's leading mixed-use precinct",
          owstonHillVilla: "A refined union of architecture, craftsmanship and interiors",
          owstonHillLocation: "Owston Hill Villa Perth, Australia",
        },
        searchListing: "Search listing",
        title: "# Projects",
        sortBy: "Sort By:",
        recentlyAdded: "Recently added",
        productCategory: "Product Category",
        product: "Product",
        errorEyebrow: "Something went wrong. Please try again or contact us if the issue persists.",
        empty: "There are no projects with the selected filters.",
        reset: "Reset and try again",
      },
      home: {
        downloads: {
          productImages: "Product images",
          installationGuide: "Installation guide",
          sketchupObject: "SketchUp object",
          revitLibrary: "Revit library",
          cad: "2D CAD",
          ies: "All IES files",
        },
        collage: {
          changing: "Changing",
          heading: "how the world views lighting",
          pandiaStock:
            "Introducing the Pandia Glass Collection, the latest expression of Unios and Chris Connell's exploration of minimal glass, light and Australian design.",
          standard: "Standard",
          downloads: "Downloads",
          viewProductDetails: "View product details",
          configure: "Configure",
        },
        configurator: {
          line1: "Configure projects",
          line2: "and manage lighting",
          line3: "more easily than ever.",
        },
        brandPillars: {
          aiControl: "AI applications in lighting control...",
          architecturalBeauty: "Honouring original architectural beauty...",
          architecturalSolutions: "Architectural lighting solutions...",
          lightBeyondFunction: "When light is more than illumination...",
          heading: "Stories, ideas and insight",
        },
      },
      footer: {
        brandItems: ["Why choose Unios", "About Unios", "Sustainability", "Our Culture"],
        projectItems: ["Sports and Recreation", "Industrial", "Multi-Residential", "Hospitality", "Hotels"],
        resourceItems: ["Guides", "Books", "Catalogue", "Magazine", "Other"],
        contactTitle: "Contact us",
        hanoiAddress: "Hanoi: E2, Chelsea Residence, Tran Kim Xuyen Street,\nYen Hoa Ward, Hanoi 100000",
        hcmAddress: "Ho Chi Minh City: B2 Canary Tower, Diamond Island,\nBinh Trung Ward, Ho Chi Minh City 700000",
        quickLinks: ["Where to buy", "Showroom", "Warranty"],
        appointmentOnly: "Showroom visits are available by appointment only.",
        newsletterTitle: "Get the latest updates",
        newsletterCopy:
          "Subscribe to our newsletter for the latest news, product updates, project case studies and more.",
        privacyPolicy: "Privacy Policy",
        firstName: "First name",
        lastName: "Last name",
        email: "Email",
        submit: "Submit",
        consent: "I agree to Unios terms and conditions",
        terms: "Terms of Service apply",
      },
    },
  },
  vi: {
    translation: {
      common: {
        language: "Ngôn ngữ",
        english: "English",
        vietnamese: "Tiếng Việt",
        close: "Đóng",
        any: "Bất kỳ",
        new: "MỚI",
        search: "Tìm kiếm",
      },
      nav: {
        imageLibrary: "Thư viện hình ảnh",
        whereToBuy: "Điểm mua hàng",
        contact: "Liên hệ",
        login: "Đăng nhập/Đăng ký",
        products: "Sản phẩm",
        projects: "Dự án",
        stories: "Câu chuyện",
        resources: "Tài nguyên",
        brand: "Thương hiệu",
        toolbox: "Toolbox của tôi",
        searchPlaceholder: "Tìm sản phẩm, dự án, câu chuyện...",
        brandSubnav: {
          whyUnios: "Vì sao chọn Unios",
          aboutUnios: "Giới thiệu Unios",
          sustainability: "Phát triển bền vững",
          ourCulture: "Văn hóa của chúng tôi",
        },
      },
      products: {
        detailsLabel: "Xem chi tiết {{name}}",
        hideFilters: "Ẩn bộ lọc",
        showFilters: "Hiện bộ lọc",
        category: "Danh mục",
        brightness: "Độ sáng (quang thông)",
        finish: "Hoàn thiện",
        moreFinishes: "Thêm lớp hoàn thiện",
        colourTemperature: "Nhiệt độ màu",
        moreFilters: "Thêm bộ lọc",
        allProducts: "Tất cả sản phẩm",
        count: "1 - 24 trong 117 sản phẩm",
        productTab: "Sản phẩm",
        onsiteTab: "Tại công trình",
        sortBy: "Sắp xếp theo:",
        recommended: "Đề xuất",
        compare: "So sánh",
      },
      projects: {
        featured: {
          builtHeadOffice: "Di sản của tương lai",
          prestigeHomes: "Ngôi nhà của sự thoải mái, giản dị và thanh bình",
          karrinyupShoppingCentre: "Chiếu sáng khu phức hợp đa năng hàng đầu của Perth",
          owstonHillVilla: "Sự kết hợp tinh tế giữa kiến trúc, kỹ thuật chế tác và nội thất",
          owstonHillLocation: "Biệt thự Owston Hill Perth, Australia",
        },
        searchListing: "Tìm trong danh sách",
        title: "# Dự án",
        sortBy: "Sắp xếp:",
        recentlyAdded: "Mới thêm gần đây",
        productCategory: "Danh mục sản phẩm",
        product: "Sản phẩm",
        errorEyebrow: "Đã xảy ra lỗi. Vui lòng thử lại hoặc liên hệ với chúng tôi nếu lỗi tiếp diễn.",
        empty: "Không có dự án nào khớp với bộ lọc đã chọn.",
        reset: "Đặt lại và thử lại",
      },
      home: {
        downloads: {
          productImages: "Hình sản phẩm",
          installationGuide: "Hướng dẫn lắp đặt",
          sketchupObject: "Đối tượng SketchUp",
          revitLibrary: "Thư viện Revit",
          cad: "2D CAD",
          ies: "Tất cả tệp IES",
        },
        collage: {
          changing: "Thay đổi",
          heading: "cách thế giới nhìn về ánh sáng",
          pandiaStock:
            "Tự hào giới thiệu Bộ sưu tập Pandia Glass - tuyệt tác mới nhất, thể hiện hành trình của Unios và Chris Connell trong việc khám phá sự tối giản trong thủy tinh, ánh sáng và thiết kế đậm chất Úc.",
          standard: "Tiêu chuẩn",
          downloads: "Tải xuống",
          viewProductDetails: "Xem chi tiết sản phẩm",
          configure: "Cấu hình",
        },
        configurator: {
          line1: "Định cấu hình dự án",
          line2: "và quản lý chiếu sáng",
          line3: "dễ dàng hơn bao giờ hết.",
        },
        brandPillars: {
          aiControl: "Ứng dụng AI trong điều khiển...",
          architecturalBeauty: "Tri ân vẻ đẹp kiến trúc nguyên bản...",
          architecturalSolutions: "Giải pháp chiếu sáng kiến trúc...",
          lightBeyondFunction: "Khi ánh sáng không chỉ là chiếu sáng...",
          heading: "Câu chuyện, quan điểm và tri thức",
        },
      },
      footer: {
        brandItems: ["Vì sao chọn Unios", "Giới thiệu Unios", "Phát triển bền vững", "Văn hóa của chúng tôi"],
        projectItems: ["Thể thao và giải trí", "Công nghiệp", "Khu dân cư phức hợp", "Dịch vụ", "Khách sạn"],
        resourceItems: ["Tài liệu hướng dẫn", "Sách", "Catalogue", "Tạp chí", "Khác"],
        contactTitle: "Liên hệ với chúng tôi",
        hanoiAddress: "Hà Nội: E2, Chelsea Residence, P. Trần Kim Xuyến,\nPhường Yên Hoà, Hà Nội 100000",
        hcmAddress: "Hồ Chí Minh: B2 Tháp Canary, Đảo Kim Cương,\nPhường Bình Trưng, Thành phố Hồ Chí Minh 700000",
        quickLinks: ["Điểm mua hàng", "Phòng trưng bày", "Bảo hành"],
        appointmentOnly: "Chỉ có thể xem phòng trưng bày theo lịch hẹn.",
        newsletterTitle: "Nhận thông tin mới nhất",
        newsletterCopy:
          "Đăng ký nhận bản tin của chúng tôi để xem tin tức mới nhất, cập nhật sản phẩm, nghiên cứu điển hình về dự án và nhiều nội dung khác.",
        privacyPolicy: "Chính sách quyền riêng tư",
        firstName: "Tên",
        lastName: "Họ",
        email: "Email",
        submit: "Gửi",
        consent: "Tôi đồng ý với điều khoản và điều kiện của Unios",
        terms: "Áp dụng Điều khoản dịch vụ",
      },
    },
  },
} as const;

i18n.use(initReactI18next).init({
  resources,
  lng: getLocaleFromPath(window.location.pathname),
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

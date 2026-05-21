import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-black px-6 pb-8 pt-24 text-white md:px-12" data-testid="footer">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Link href="/" className="inline-block">
              <span className="text-4xl font-semibold tracking-tight">unios.</span>
            </Link>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/60">
              Architectural lighting for projects that want clarity, control and a stronger visual language.
            </p>

            <div className="mt-10">
              <h4 className="mb-4 text-[10px] uppercase tracking-[0.24em] text-white/40">Stay up to date</h4>
              <div className="flex border-b border-white/25 pb-2">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full border-none bg-transparent outline-none placeholder:text-white/25"
                />
                <button className="text-white/70 transition-colors hover:text-white">
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            {[
              {
                title: "Products",
                items: ["All Products", "Indoor", "Outdoor", "Linear", "New Releases"],
              },
              {
                title: "Projects",
                items: ["Commercial", "Residential", "Retail", "Hospitality", "Submit a project"],
              },
              {
                title: "Resources",
                items: ["Downloads", "Warranties", "Image Library", "IES Files", "Toolbox"],
              },
              {
                title: "Company",
                items: ["About Us", "Careers", "Sustainability", "Contact", "Where to buy"],
              },
            ].map((group) => (
              <div key={group.title}>
                <h4 className="mb-6 text-[10px] uppercase tracking-[0.24em] text-white/40">{group.title}</h4>
                <ul className="space-y-4 text-sm text-white/75">
                  {group.items.map((item) => (
                    <li key={item}>
                      <Link href="#" className="transition-opacity hover:opacity-100">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/45 md:flex-row">
          <p>&copy; {new Date().getFullYear()} Unios Pty Ltd. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            <Link href="#" className="transition-opacity hover:opacity-100">
              Privacy Policy
            </Link>
            <Link href="#" className="transition-opacity hover:opacity-100">
              Terms of Use
            </Link>
            <Link href="#" className="transition-opacity hover:opacity-100">
              LinkedIn
            </Link>
            <Link href="#" className="transition-opacity hover:opacity-100">
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

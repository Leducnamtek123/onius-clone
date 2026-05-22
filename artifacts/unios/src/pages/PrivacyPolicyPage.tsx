import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-32 pb-24 max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-16">
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="sticky top-32">
            <h2 className="text-sm font-semibold uppercase tracking-wider mb-6">Contents</h2>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#data-collection" className="hover:text-black">Data Collection</a></li>
              <li><a href="#use-of-data" className="hover:text-black">Use of Data</a></li>
              <li><a href="#cookies" className="hover:text-black">Cookies</a></li>
              <li><a href="#third-parties" className="hover:text-black">Third Parties</a></li>
              <li><a href="#contact" className="hover:text-black">Contact</a></li>
            </ul>
          </div>
        </aside>
        
        <main className="flex-1 prose prose-lg max-w-none">
          <h1 className="text-4xl font-semibold mb-2">Privacy Policy</h1>
          <p className="text-sm text-gray-400 mb-12">Last updated: October 2023</p>

          <section id="data-collection">
            <h2 className="text-2xl font-semibold mt-12 mb-4">Data Collection</h2>
            <p>
              We collect information to provide better services to all our users. The types of personal data we collect include:
            </p>
            <ul>
              <li>Contact information (such as name, email address, mailing address, and phone number)</li>
              <li>Account log-in credentials (such as passwords and other security information)</li>
              <li>Professional information (such as employer, job title, and professional credentials)</li>
            </ul>
          </section>

          <section id="use-of-data">
            <h2 className="text-2xl font-semibold mt-12 mb-4">Use of Data</h2>
            <p>
              Cosmos uses the collected data for various purposes:
            </p>
            <ul>
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features of our Service</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our Service</li>
            </ul>
          </section>

          <section id="cookies">
            <h2 className="text-2xl font-semibold mt-12 mb-4">Cookies</h2>
            <p>
              We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.
              Cookies are files with small amount of data which may include an anonymous unique identifier.
            </p>
          </section>

          <section id="third-parties">
            <h2 className="text-2xl font-semibold mt-12 mb-4">Third Parties</h2>
            <p>
              We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.
            </p>
          </section>

          <section id="contact">
            <h2 className="text-2xl font-semibold mt-12 mb-4">Contact</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <p>Email: privacy@Cosmos.com</p>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
}

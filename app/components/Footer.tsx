import { FacebookIcon, InstagramIcon, LinkedinIcon, } from "lucide-react";

 const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Newsletter */}
          <div>
            <h2 className="text-xl font-bold mb-4">Hekto</h2>
            <div className="flex items-center mb-4">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-full px-4 py-2 text-sm text-gray-600 bg-white border rounded-l-md focus:outline-none"
              />
              <button className="px-4 py-2 text-sm text-white w-[135px] h-[39px] bg-pink-500 rounded-r-md">
                Sign Up
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-2">Contact Info</p>
            <p className="text-sm text-gray-600">
              17 Princess Road, London, Greater London NW1 8JR, UK
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Laptops & Computers</li>
              <li>Cameras & Photography</li>
              <li>Smart Phones & Tablets</li>
              <li>Video Games & Consoles</li>
              <li>Waterproof Headphones</li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Care</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>My Account</li>
              <li>Discount</li>
              <li>Returns</li>
              <li>Orders History</li>
              <li>Order Tracking</li>
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Pages</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Blog</li>
              <li>Browse the Shop</li>
              <li>Category</li>
              <li>Pre-Built Pages</li>
              <li>Visual Composer Elements</li>
              <li>WooCommerce Pages</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">©Webecy - All Rights Reserved</p>
          <div className="flex items-center justify-evenly mr-96 space-x-4 mt-4 md:mt-0">
            <a href="https://web.facebook.com/varoon.kumar.1023?mibextid=ZbWKwL&_rdc=1&_rdr#" className="text-gray-500 hover:text-gray-700">
              <FacebookIcon/>
            </a>
            <a href="https://www.instagram.com/varoonkumarmalhi/profilecard/?igsh=N3R2dDIyN2sxdDRv" className="text-gray-500 hover:text-gray-700">
               <InstagramIcon/>
            </a>
            <a href="https://www.linkedin.com/in/varoon-kumar-274a512b7/" className="text-gray-500 hover:text-gray-700">
              <LinkedinIcon/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

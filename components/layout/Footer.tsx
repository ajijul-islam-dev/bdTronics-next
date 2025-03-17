import React from "react";
import {
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaClock,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 mt-10 border-t">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Address Section */}
        <div>
          <h3 className="font-bold mb-3">ADDRESS</h3>
          <p>77/1 Fakirapool, Motijheel</p>
          <p>Dhaka 1000, Bangladesh</p>
          <div className="flex items-center gap-2 mt-2">
            <FaEnvelope className="text-blue-500" />
            <a href="mailto:info@bdtronics.com" className="text-gray-700">
              info@bdtronics.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone className="text-green-500" />
            <p>01974 277 797, 09613 827 797</p>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <FaWhatsapp className="text-green-600 text-lg" />
            <span className="text-green-600 font-medium">WhatsApp</span>
          </div>
          <div className="flex items-center gap-2">
            <FaClock className="text-gray-500" />
            <p>10:00am - 7:00pm (Friday Off)</p>
          </div>
        </div>

        {/* Company Info */}
        <div>
          <h3 className="font-bold mb-3">COMPANY INFO</h3>
          <ul className="space-y-2 text-gray-700">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Training</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Affiliate Program</a>
            </li>
          </ul>
        </div>

        {/* Legal & Support */}
        <div>
          <h3 className="font-bold mb-3">LEGAL</h3>
          <ul className="space-y-2 text-gray-700">
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
          <h3 className="font-bold mb-3 mt-6">SUPPORT</h3>
          <ul className="space-y-2 text-gray-700">
            <li>
              <a href="#">How to Order</a>
            </li>
            <li>
              <a href="#">Refund Policy</a>
            </li>
            <li>
              <a href="#">Delivery Policy</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-bold mb-3">NEWSLETTER</h3>
          <input
            type="email"
            placeholder="Enter your email address"
            className="border p-2 w-full rounded-md"
          />
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-md w-full mt-2">
            SUBSCRIBE
          </button>
          <p className="text-xs text-gray-500 mt-2">
            This form is protected by reCAPTCHA - the{" "}
            <a href="#" className="text-blue-600">
              Google Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600">
              Terms of Service
            </a>{" "}
            apply.
          </p>
        </div>
      </div>

      {/* Social & Copyright */}
      <div className="container mx-auto text-center mt-8">
        <div className="flex justify-center gap-4">
          <a href="#" className="text-blue-600 text-2xl">
            <FaFacebook />
          </a>
          <a href="#" className="text-red-600 text-2xl">
            <FaYoutube />
          </a>
          <a href="#" className="text-blue-400 text-2xl">
            <FaTwitter />
          </a>
        </div>
        <p className="mt-4 font-bold">BDTronics.com</p>
        <p className="text-gray-500">
          Copyright © 2025 BDTronics.com. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import { FooterDataOne, FooterDataTwo } from "@/data/footerData";
import Link from "next/link";
import NewsLetter from "@/components/common/advertisement/NewsLetter";
import Favicon from "@/components/Logo/Favicon";
import useMode from "@/utils/hooks/themeMode";

/**
 * Footer Component
 *
 * This component serves as the footer of the website. It provides:
 * - An "About" section with a description and contact details (email, phone).
 * - Quick links and categories for easy navigation.
 * - A newsletter subscription section for user engagement.
 * - Legal links (Terms of Use, Privacy Policy, Cookie Policy).
 * - Branding and copyright information.
 *
 * Features:
 * - Responsive layout: Adjusts for different screen sizes using Tailwind CSS grid and flex utilities.
 * - Reusable data: Uses `FooterDataOne` and `FooterDataTwo` for quick links and categories.
 * - Integrates other components: Includes `NewsLetter` for subscriptions and `Favicon` for branding.
 *
 * @returns {JSX.Element} A footer component for the website.
 */

const Footer = () => {
  const { lightMode } = useMode();

  return (
    <footer className="bg-base-200 px-5 md:px-0 font-sans">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-12 gap-5 py-16">
          {/* About Section */}
          <div className="col-span-12 lg:col-span-3">
            <h5 className="text-lg font-semibold text-base-content font-sans">
              About
            </h5>
            <p className="mt-3 text-base text-base-content/70 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <div>
              <a
                href="mailto:info@jstemplate.net"
                className="font-semibold text-base-content text-base"
              >
                Email :{" "}
                <span className="text-base-content/70 font-normal hover:text-primary hover:duration-300 transition">
                  info@jstemplate.net
                </span>
              </a>
            </div>
            <div className="mt-1">
              <a
                href="tel:880123456789"
                className="font-semibold text-base-content text-base"
              >
                Phone :{" "}
                <span className="text-base-content/70 font-normal hover:text-primary hover:duration-300 transition">
                  880 123 456 789
                </span>
              </a>
            </div>
          </div>

          {/* Quick Links and Categories */}
          <div className="flex justify-between lg:justify-center lg:gap-20 col-span-12 lg:col-span-5">
            {/* Quick Links */}
            <div>
              <h5 className="text-base-content text-lg font-semibold font-sans">
                Quick Link
              </h5>
              <div className="flex flex-col gap-y-2 mt-6">
                {FooterDataOne.map((item, index) => (
                  <div key={index}>
                    <Link
                      href={item.link}
                      className="link link-hover text-base text-base-content/70 hover:text-primary transition hover:duration-300"
                    >
                      {item.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            {/* Categories */}
            <div>
              <h5 className="text-base-content text-lg font-semibold font-sans">
                Category
              </h5>
              <div className="flex flex-col gap-y-2 mt-6">
                {FooterDataTwo.map((item, index) => (
                  <div key={index}>
                    <Link
                      href={item.link}
                      className="link link-hover text-base text-base-content/70 hover:text-primary transition hover:duration-300"
                    >
                      {item.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="col-span-12 lg:col-span-4">
            <NewsLetter />
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col gap-4 md:gap-0 md:flex-row items-center justify-between py-8 bg-base-200 border-t border-base-content/10">
          {/* Branding and Copyright */}
          <div className="flex items-center gap-2.5">
            <Link href="/">
              <Favicon color={lightMode ? "#4b6bfb" : "#181a2a"} />
            </Link>
            <div>
              <h4 className="text-xl text-base-content font-sans">
                Meta<strong>Blog</strong>
              </h4>
              <p className="mt-0.5 text-base-content/70 text-base">
                © JS Template 2023. All Rights Reserved.
              </p>
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-4 text-base-content/70">
            <Link
              href="/"
              className="text-base border-r border-base-content/10 pr-4 hover:text-primary transition hover:duration-300"
            >
              Terms of Use
            </Link>
            <Link
              href="/"
              className="text-base border-r border-base-content/10 pr-4 hover:text-primary transition hover:duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/"
              className="text-base hover:text-primary transition hover:duration-300"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

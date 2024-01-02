import Image from "next/image";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import {
  FaDiscord,
  FaRegCopyright,
  FaTwitter,
} from "react-icons/fa";

export function Footer() {
  return (
    <div
      className="border-t border-[#cdcdcd9c]"
      style={{
        background: "linear-gradient(180deg, #00001C 0%, #001973 120.18%)",
      }}
    >
      <footer className="max-w-screen-xl mx-auto flex flex-col px-24 pb-8 pt-10 text-[#E0E0E0] sm:px-12">
        <Link href="/">
          <Image
            src={"/images/logo.png"}
            alt=""
            height={50}
            width={200}
            quality={100}
            priority
            className="h-16 w-auto translate-x-[-0.5rem] self-start pb-4"
          />
        </Link>
        <div className="flex flex-1 mt-4 gap-8 mr-24 flex-row justify-between ">
          <div className="flex max-w-md flex-col gap-1">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span className="font-prompt text-base font-bold">
                  Newsletter
                </span>
                <span className="text-sm ">
                  Stay informed about upcoming feature launches and trading
                  strategies by subscribing to our newsletter.
                </span>
              </div>
              <form
                action=""
                className="font-krona flex flex-col gap-5 text-xs lg:flex-row lg:gap-3"
              >
                <input
                  className="flex-1 rounded-lg bg-[#1F2937] px-4 py-3 outline outline-1 outline-[#E0E0E099]"
                  required
                  type="email"
                  placeholder="Enter your Email"
                  autoComplete="email"
                />
                <button className="flex items-center justify-center gap-1 rounded-lg bg-white px-5 py-3 align-middle text-xs text-[#292841] font-semibold">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-prompt text-base font-bold">
              Useful Links
            </span>
            <div className="flex flex-col gap-2 text-sm">
              <a href="" className="">
                Blogs
              </a>
              <a href="" className="">
                About us
              </a>
              <a href="" className="">
                Gallery
              </a>
              <a href="" className="">
                Rules & Regulations
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-prompt text-base font-bold">Contact us</span>
            <a className="text-sm " href="mailto:hacktvarit@gmail.com">
              hacktvarit@gmail.com
            </a>
            <div className="mt-3 flex items-center gap-3 text-x ">
              <a href="https://twitter.com/HackTvarit">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com/hacktvarit/">
                <AiFillInstagram />
              </a>
              <a href="https://discord.gg/Sb3FMt8m">
                <FaDiscord />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 text-center text-sm font-bold">
          © <span>Hacktvarit 2023 copyright</span>
        </div>
      </footer>
    </div>
  );
}

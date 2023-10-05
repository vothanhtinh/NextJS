"use client";
// Libraries
import Image from "next/image";
import Link from "next/link";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

// Styled
import { IconCartStyle, IconCartWrapper } from "./styled";
import { Button, Dropdown, Select, Space } from "antd";
import LocaleSwitcher from "@/_components/molecules/LocaleSwitcher";
export default function Header() {
  const navigation = [
    { title: "home", path: "/" },
    { title: "about", path: "/about" },
  ];

  //   const items = [
  //     {
  //       label: <Button onClick={() => signOut()}>{t('logout')}</Button>,
  //       key: '3',
  //     },
  //   ];

  return (
    <header>
      <nav className="items-center pt-3 px-2 mx-auto  sm:px-4 sm:flex sm:space-x-8 fixed top-0  z-50 bg-white w-full">
        <Link href="/">
          <div className="flex justify-center items-center">
            <Image
              src="/travel-blog-logo.webp"
              alt="logo"
              width={100}
              height={50}
              className="h-20"
            />
            <h2 className="font-bold text-xl text-secondary-500 ml-3 mt-2">
              My Starter Site
            </h2>
          </div>
        </Link>
        <ul className="py-4 flex-1 items-center flex space-x-3 sm:space-x-6 sm:justify-end">
          {navigation.map((item, idx) => (
            <li
              className="text-base p-2 leading-6 font-medium text-secondary-500 hover:text-primary-500 border-transparent border-b-2 hover:border-primary-500 hover:border-b-primary hover:border-b-2 focus:outline-none focus:text-primary-500 transition duration-300"
              key={idx}
            >
              <Link href={item.path}>{item.title}</Link>
            </li>
          ))}
          <IconCartWrapper>
            <Link href={"/cart"}>
              <ShoppingCartOutlined />
              <IconCartStyle>4</IconCartStyle>
            </Link>
          </IconCartWrapper>

          <LocaleSwitcher />
        </ul>
      </nav>
    </header>
  );
}

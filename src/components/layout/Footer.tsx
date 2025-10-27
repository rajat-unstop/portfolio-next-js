import { ReactNode } from "react";
import NavAndFooterItems from "../ui/NavAndFooterItem";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  const footerItems: {
    title: string | ReactNode;
    url: string;
    borderPosition: "left" | "right";
    classes?: string;
  }[] = [
    {
      title: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/rajatdash/",
      borderPosition: "right",
    },
    {
      title: <FaGithub />,
      url: "https://github.com/DARKPROGRAMMER16",
      borderPosition: "left",
      classes: "ml-auto",
    },
  ];

  return (
    <div className="w-full h-[5%] flex items-center border-t border-slate-500 text-base text-gray-400">
      <div className="flex items-center px-5 border-r border-slate-500 h-full">
        find me in:
      </div>
      {footerItems.map((item) => {
        return (
          <NavAndFooterItems
            key={item.url}
            title={item.title}
            url={item.url}
            borderPosition={item.borderPosition}
            classes={item.classes}
            isFooterItem
          />
        );
      })}
    </div>
  );
};

export default Footer;

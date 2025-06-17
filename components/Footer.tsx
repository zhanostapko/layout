import React from "react";

type Props = {};

const Footer = (props: Props) => {
  //Add correct links
  return (
    <footer className=" py-8 pt-12 px-4 text-sm  text-gray-500">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row justify-between items-center gap-10">
        <div>© 2022 SIA ERGB. All Rights Reserved.</div>

        <div className="flex flex-col md:flex-row gap-8 text-center">
          <a
            href="https://findacow.com/en/privacy-policy"
            target="_blank"
            className="hover:underline"
          >
            Privacy Policy
          </a>
          <a
            href="https://findacow.com/en/terms-of-use"
            target="_blank"
            className="hover:underline"
          >
            Terms Of Use
          </a>
          <a
            href="https://findacow.com/en/cookie-policy"
            target="_blank"
            className="hover:underline"
          >
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

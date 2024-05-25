import React, { useState } from "react";

import style from "./HeaderBurger.module.css";
import { useTranslation } from "react-i18next";

interface IMenu {
  name: string;
  link: string;
  isActive: boolean;
  id: number;
}

interface IHeaderBurgerProps {
  classes?: string;
  active: boolean;
  setActive: any;
}

export const HeaderBurger: React.FC<IHeaderBurgerProps> = ({ classes = "", active, setActive }) => {
  const { t, i18n } = useTranslation();

  const [links, setLinks] = useState<IMenu[]>([
    {
      name: "home",
      link: "#home",
      isActive: true,
      id: 1,
    },
    {
      name: "whatarewe",
      link: "#we",
      isActive: false,
      id: 2,
    },
    {
      name: "forwhom",
      link: "#forwhom",
      isActive: false,
      id: 3,
    },
    {
      name: "contacts",
      link: "#contacts",
      isActive: false,
      id: 4,
    },
  ]);

  function changeActiveLink(id: number) {
    const changed = links.map((link) => {
      if (link.id === id) {
        return { ...link, isActive: true };
      }

      if (link.isActive) {
        return { ...link, isActive: false };
      }

      return link;
    });

    setLinks(changed);

    setActive(false);
  }

  return (
    <>
      <div className={`${active ? style.burger_background : ""}`}></div>
      <div className={`${style.burger_inner} ${active ? style.burger_inner_active : style.burger_inner_inactive}`}>
        <ul className={`${style.list}`}>
          {links.map((item) => {
            return (
              <a href={item.link} onClick={() => changeActiveLink(item.id)} className={`${item.isActive ? style.active : ""}`}>
                {t(item.name)}
              </a>
            );
          })}
        </ul>
        <ul className={`${style.social_list}`}>
          <li>
            <a target="_blank" href="https://instagram.com/inpulsenow">
              <svg width="28" height="28" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.8799 9.39209C11.9548 9.39209 11.0675 9.75961 10.4133 10.4138C9.75912 11.068 9.3916 11.9553 9.3916 12.8804C9.3916 13.8056 9.75912 14.6929 10.4133 15.347C11.0675 16.0012 11.9548 16.3688 12.8799 16.3688C13.8051 16.3688 14.6924 16.0012 15.3466 15.347C16.0007 14.6929 16.3683 13.8056 16.3683 12.8804C16.3683 11.9553 16.0007 11.068 15.3466 10.4138C14.6924 9.75961 13.8051 9.39209 12.8799 9.39209Z"
                  fill="#FE1B1C"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.26644 3.30821C10.9974 2.89466 14.7626 2.89466 18.4935 3.30821C20.5318 3.53576 22.175 5.14039 22.4144 7.18617C22.8568 10.9693 22.8568 14.7911 22.4144 18.5742C22.175 20.62 20.5318 22.2246 18.4946 22.4533C14.7633 22.8669 10.9977 22.8669 7.26644 22.4533C5.22818 22.2246 3.5849 20.62 3.34555 18.5753C2.90305 14.7918 2.90305 10.9697 3.34555 7.18617C3.5849 5.14039 5.22818 3.53576 7.26644 3.30821ZM18.2466 6.4402C17.962 6.4402 17.689 6.55328 17.4877 6.75457C17.2864 6.95586 17.1733 7.22887 17.1733 7.51353C17.1733 7.7982 17.2864 8.0712 17.4877 8.27249C17.689 8.47378 17.962 8.58687 18.2466 8.58687C18.5313 8.58687 18.8043 8.47378 19.0056 8.27249C19.2069 8.0712 19.32 7.7982 19.32 7.51353C19.32 7.22887 19.2069 6.95586 19.0056 6.75457C18.8043 6.55328 18.5313 6.4402 18.2466 6.4402ZM7.78164 12.8802C7.78164 11.528 8.31878 10.2313 9.27491 9.27513C10.231 8.31901 11.5278 7.78187 12.88 7.78187C14.2321 7.78187 15.5289 8.31901 16.485 9.27513C17.4412 10.2313 17.9783 11.528 17.9783 12.8802C17.9783 14.2324 17.4412 15.5291 16.485 16.4853C15.5289 17.4414 14.2321 17.9785 12.88 17.9785C11.5278 17.9785 10.231 17.4414 9.27491 16.4853C8.31878 15.5291 7.78164 14.2324 7.78164 12.8802Z"
                  fill="#FE1B1C"
                />
              </svg>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://linkedin.com/company/inpulsenow">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17.4731 0.155273C18.0425 0.155273 18.5885 0.381439 18.9911 0.784017C19.3936 1.1866 19.6198 1.73261 19.6198 2.30194V17.3286C19.6198 17.8979 19.3936 18.4439 18.9911 18.8465C18.5885 19.2491 18.0425 19.4753 17.4731 19.4753H2.44647C1.87714 19.4753 1.33113 19.2491 0.928549 18.8465C0.525971 18.4439 0.299805 17.8979 0.299805 17.3286V2.30194C0.299805 1.73261 0.525971 1.1866 0.928549 0.784017C1.33113 0.381439 1.87714 0.155273 2.44647 0.155273H17.4731ZM16.9365 16.7919V11.1033C16.9365 10.1753 16.5678 9.28526 15.9116 8.62906C15.2554 7.97286 14.3654 7.60421 13.4374 7.60421C12.5251 7.60421 11.4625 8.16234 10.9473 8.99954V7.80814H7.95267V16.7919H10.9473V11.5004C10.9473 10.6739 11.6127 9.99774 12.4392 9.99774C12.8377 9.99774 13.2199 10.1561 13.5017 10.4379C13.7836 10.7197 13.9419 11.1019 13.9419 11.5004V16.7919H16.9365ZM4.46434 6.12301C4.94258 6.12301 5.40123 5.93303 5.73939 5.59486C6.07756 5.2567 6.26754 4.79805 6.26754 4.31981C6.26754 3.32161 5.46254 2.50587 4.46434 2.50587C3.98325 2.50587 3.52187 2.69698 3.18169 3.03716C2.84151 3.37734 2.6504 3.83872 2.6504 4.31981C2.6504 5.31801 3.46614 6.12301 4.46434 6.12301ZM5.95627 16.7919V7.80814H2.98314V16.7919H5.95627Z"
                  fill="#FE1B1C"
                />
              </svg>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://t.me/inpulsenow">
              <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.3874 0.690044C19.6527 0.578408 19.943 0.539905 20.2282 0.578543C20.5133 0.617181 20.7829 0.731548 21.0089 0.909739C21.2349 1.08793 21.409 1.32343 21.513 1.59173C21.6171 1.86003 21.6474 2.15132 21.6007 2.43528L19.1663 17.2011C18.9302 18.6254 17.3674 19.4422 16.0612 18.7328C14.9685 18.1392 13.3456 17.2247 11.8859 16.2705C11.156 15.7929 8.9203 14.2634 9.19507 13.1751C9.4312 12.2445 13.1879 8.74756 15.3345 6.66851C16.1771 5.8517 15.7928 5.38051 14.7979 6.13184C12.3271 7.9973 8.36002 10.8341 7.0484 11.6327C5.89135 12.3368 5.28814 12.457 4.56686 12.3368C3.25095 12.1178 2.03057 11.7787 1.03452 11.3654C-0.311444 10.8073 -0.245971 8.95686 1.03344 8.41804L19.3874 0.690044Z"
                  fill="#FE1B1C"
                />
              </svg>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://x.com/inpulsenow">
              <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.17128 1.28461C2.36561 1.26202 2.56242 1.29298 2.74043 1.37414C2.91844 1.45529 3.07089 1.58356 3.18129 1.74507C4.76553 4.0624 6.66748 5.02625 8.77872 5.24521C8.88176 4.34253 9.12541 3.4506 9.58372 2.66492C10.2556 1.51216 11.3483 0.664222 12.9089 0.350809C15.0663 -0.0828181 16.7085 0.698569 17.6606 1.65491L19.584 1.29534C19.7852 1.25763 19.9931 1.27828 20.183 1.35486C20.3729 1.43143 20.537 1.56074 20.6558 1.72752C20.7746 1.89429 20.8433 2.09158 20.8536 2.29609C20.8639 2.50061 20.8156 2.70381 20.7142 2.88173L18.8681 6.12534C19.0366 10.8061 17.7357 14.0734 14.9622 16.3242C13.4917 17.5177 11.3858 18.195 9.07496 18.4043C6.74583 18.6146 4.11294 18.3603 1.49616 17.5961C1.27257 17.5308 1.07627 17.3947 0.936869 17.2081C0.79747 17.0215 0.72254 16.7947 0.723389 16.5618C0.724237 16.3289 0.800817 16.1025 0.941571 15.917C1.08233 15.7314 1.27962 15.5967 1.50367 15.5331C2.81958 15.1585 3.82207 14.8354 4.72689 14.2698C3.43996 13.5872 2.49221 12.6941 1.82138 11.6766C0.889722 10.262 0.544109 8.68417 0.475415 7.262C0.406722 5.83984 0.611729 4.52178 0.828542 3.57188C0.951975 3.02985 1.0958 2.48674 1.29437 1.96725C1.36441 1.78413 1.48327 1.62369 1.63805 1.50335C1.79283 1.383 1.97655 1.30735 2.17128 1.28461Z"
                  fill="#FE1B1C"
                />
              </svg>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://tiktok.com/@inpulsenow">
              <svg width="21" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.2918 3.0625C12.5798 2.24961 12.1874 1.20566 12.1877 0.125H8.96891V13.0417C8.94409 13.7407 8.64899 14.4027 8.14575 14.8885C7.64252 15.3742 6.97042 15.6457 6.271 15.6458C4.79183 15.6458 3.56266 14.4375 3.56266 12.9375C3.56266 11.1458 5.29183 9.80208 7.07308 10.3542V7.0625C3.47933 6.58333 0.333496 9.375 0.333496 12.9375C0.333496 16.4062 3.2085 18.875 6.26058 18.875C9.53141 18.875 12.1877 16.2188 12.1877 12.9375V6.38542C13.4929 7.32276 15.0599 7.82567 16.6668 7.82292V4.60417C16.6668 4.60417 14.7085 4.69792 13.2918 3.0625Z"
                  fill="#FE1B1C"
                />
              </svg>
            </a>
          </li>

          <div className={style.copy_wrights}>All rights reserved © 2024 In Pulse</div>
        </ul>
      </div>
    </>
  );
};

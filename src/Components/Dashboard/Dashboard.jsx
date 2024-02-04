import "./dashboard.scss";
import { GoHome } from "react-icons/go";
import { HiOutlineLogout } from "react-icons/hi";
import logo from "../../assets/images/Logo.svg";

export const Dashboard = () => {
  return (
    <>
      <div className="dashboard">
        <div className="dashboard__wrapper flex flex-col items-center justify-between py-6 pl-3 bg-[#1F1D2B] w-[100px] h-screen rounded-2xl">
          <a
            className="flex items-center justify-center py-[12px] pl-3 pr-6"
            href="#"
          >
            <img src={logo} alt="" width={56} height={56} />
          </a>
          <ul className="dashboard__list  gap-[2px]">
            <li className="dashboard__item dashboard__item--active py-[12px] pl-3 pr-6 my-[10px] bg-[#252836] flex items-center justify-center  relative">
              <a
                className="dashboard__link w-14 h-14 bg-[#EA7C69] rounded-lg p-4"
                href="#"
              >
                {/* <img src="" alt="" /> */}
                <GoHome className="w-6 h-6 fill-[#fff]" />
              </a>
            </li>
            <li className="dashboard__item  py-[12px] pl-3 pr-6 flex items-center justify-center  relative">
              <a
                className="dashboard__link w-14 h-14 rounded-lg p-4 bg-transparent"
                href="#"
              >
                {/* <img src="" alt="" /> */}
                <GoHome className="w-6 h-6 fill-[#ea7c69]" />
              </a>
            </li>
            <li className="dashboard__item  py-[12px] pl-3 pr-6 flex items-center justify-center  relative">
              <a
                className="dashboard__link w-14 h-14 rounded-lg p-4 bg-transparent"
                href="#"
              >
                {/* <img src="" alt="" /> */}
                <GoHome className="w-6 h-6 fill-[#ea7c69]" />
              </a>
            </li>
            <li className="dashboard__item  py-[12px] pl-3 pr-6 flex items-center justify-center  relative">
              <a
                className="dashboard__link w-14 h-14 rounded-lg p-4 bg-transparent"
                href="#"
              >
                {/* <img src="" alt="" /> */}
                <GoHome className="w-6 h-6 fill-[#ea7c69]" />
              </a>
            </li>
            <li className="dashboard__item  py-[12px] pl-3 pr-6 flex items-center justify-center  relative">
              <a
                className="dashboard__link w-14 h-14 rounded-lg p-4 bg-transparent"
                href="#"
              >
                {/* <img src="" alt="" /> */}
                <GoHome className="w-6 h-6 fill-[#ea7c69]" />
              </a>
            </li>
            <li className="dashboard__item  py-[12px] pl-3 pr-6 flex items-center justify-center  relative">
              <a
                className="dashboard__link w-14 h-14 rounded-lg p-4 bg-transparent"
                href="#"
              >
                {/* <img src="" alt="" /> */}
                <GoHome className="w-6 h-6 fill-[#ea7c69]" />
              </a>
            </li>
          </ul>
          <a
            className="flex items-center justify-center py-[12px] pl-3 pr-6"
            href="#"
          >
            <HiOutlineLogout className="w-6 h-6 stroke-[#ea7c69]" />
          </a>
        </div>
      </div>
    </>
  );
};

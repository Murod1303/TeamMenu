import "./heaader.scss";

export const Header = () => {
  return (
    <>
      <header className="mb-6">
        <div className="header__wrapper flex flex-col items-start justify-start gap-6 w-full">
          <div className="header__top flex items-center justify-between w-full">
            <div className="header__title-box text-[#fff]">
              <h2 className="header__title font-bold leading-10 text-[28px]  mb-1">
                Jaegar Resto
              </h2>
              <time className="text-base" dateTime="2024-02-03">
                Tuesday, 2 Feb 2021
              </time>
            </div>
            <label className="header__search relative">
              <input
                className="w-[220px] rounded-lg bg-[#2D303E] border border-[#393C49] py-[14px] pr-[12px] pl-[42px] text-[12px] placeholder:text-[#ABBBC2] text-[#fff]"
                type="search"
                placeholder="Search for food, coffe, etc.."
                aria-label="Search for food, coffe, "
              />
            </label>
          </div>
          <nav className="navbar  w-full">
            <ul className="flex gap-8 items-center justify-start text-[#fff] w-full border-b-[1px] border-[#393C49]">
              <li className="relative">
                <a
                  className="text-inherit mb-[13px] block text-[14px] text-[#ea7c69] font-semibold"
                  href="#"
                >
                  Hot Dishes
                </a>
                <span className="w-[37px] h-[3px] absolute bottom-[-4px] rounded-sm bg-[#ea7c69] block"></span>
              </li>
              <li>
                <a
                  className="text-inherit mb-[13px] block text-[14px] font-semibold"
                  href="#"
                >
                  Hot Dishes
                </a>
                <span className="w-[37px] h-[6px] rounded-sm bg-transparent block"></span>
              </li>
              <li>
                <a
                  className="text-inherit mb-[13px] block text-[14px] font-semibold"
                  href="#"
                >
                  Hot Dishes
                </a>
                <span className="w-[37px] h-[6px] rounded-sm bg-transparent block"></span>
              </li>
              <li>
                <a
                  className="text-inherit mb-[13px] block text-[14px] font-semibold"
                  href="#"
                >
                  Hot Dishes
                </a>
                <span className="w-[37px] h-[6px] rounded-sm bg-transparent block"></span>
              </li>
              <li>
                <a
                  className="text-inherit mb-[13px] block text-[14px] font-semibold"
                  href="#"
                >
                  Hot Dishes
                </a>
                <span className="w-[37px] h-[6px] rounded-sm bg-transparent block"></span>
              </li>
              <li>
                <a
                  className="text-inherit mb-[13px] block text-[14px] font-semibold"
                  href="#"
                >
                  Hot Dishes
                </a>
                <span className="w-[37px] h-[6px] rounded-sm bg-transparent block"></span>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

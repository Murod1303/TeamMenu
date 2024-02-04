import { Card } from "../Card/Card";

export const Menu = () => {
  return (
    <>
      <div className="menu__wrapper h-screen overflow-hidden'">
        <div className="menu__inner menu__top mb-6 text-[#fff] flex items-center justify-between">
          <h3 className="menu__title font-semibold text-xl ">Choose Dishes</h3>
          <select
            className="menu__top-select w-[120px] p-[10px] pr-[24px] bg-[#1F1D2B] rounded-lg border border-[#393C49]"
            name="type"
            id=""
          >
            <option className="p-5" value="">
              Dine In
            </option>
          </select>
        </div>
        <div className="menu__bottom ">
          <ul className="menu__bottom-list menu__list flex items-start justify-center gap-[28px] flex-wrap">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </ul>
        </div>
      </div>
    </>
  );
};

import "./card.scss";

export const Card = () => {
  return (
    <li className="menu__item w-[192px] bg-[#1F1D2B] rounded-lg p-6 pt-[114px] mt-[58px] relative">
      <img
        className="rounded-full absolute top-[-34px] bg-white"
        src=""
        alt=""
        width={132}
        height={132}
      />
      <div className="menu__item-name text-[#fff] text-center">
        <strong className="text-[14px] font-medium mb-2 block">
          Spicy seasoned seafood noodles
        </strong>
        <span className="menu__item-price text-[14px] block">$ 2.29</span>
        <span className="menu__item-available text-[#ABBBC2] block">
          20 Bowls available
        </span>
      </div>
    </li>
  );
};

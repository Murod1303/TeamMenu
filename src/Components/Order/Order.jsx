import "./order.scss";
import { icons } from "../../assets/Contant/Contant";
export const Order = () => {
  return (
    <section className="order w-1/3 bg-[#1F1D2B] p-4 h-full">
      <div className="order__wrapper h-full">
        <div className="order__header mb-4">
          <h3 className="order__title text-xl font-bold mb-4 text-[#fff]">
            Orders #34562
          </h3>
          <ul className="order__list text-center flex gap-2 mb-4">
            <li className="order__item">
              <input
                className="order__inputs"
                type="radio"
                name="location"
                id="dineIn"
              />
              <label
                className="block w-[80px] rounded-lg px-2 py-2 bg-[#EA7C69] text-[#fff]"
                htmlFor="dineIn"
              >
                Dine In
              </label>
            </li>
            <li className="order__item">
              <input
                className="order__inputs"
                type="radio"
                name="location"
                id="toGo"
              />
              <label
                className="block w-[80px] rounded-lg px-2 py-2 text-[#EA7C69] bg-transparent border border-[#393C49]"
                htmlFor="toGo"
              >
                To go
              </label>
            </li>
            <li className="order__item">
              <input
                className="order__inputs"
                type="radio"
                name="location"
                id="delivery"
              />
              <label
                className="block w-[80px] rounded-lg px-2 py-2 text-[#EA7C69] bg-transparent border border-[#393C49]"
                htmlFor="delivery"
              >
                Delivery
              </label>
            </li>
          </ul>
          <div className="order__title-wrapper flex items-center justify-between text-[#fff]">
            <span className="text-base font-semibold text-inherit">Item</span>
            <div className="order__title-inner flex items-center gap-11">
              <span className="text-inherit text-base font-semibold">Qty</span>
              <span className="text-inherit text-base font-semibold">
                Price
              </span>
            </div>
          </div>
        </div>
        <hr className="h-[1px] border-none rounded-md bg-[#393C49]" />
        <div className="order__meals meals h-full">
          <ul className="meals__list flex flex-col gap-6 h-3/5 overflow-y-scroll pt-4 mb-4">
            <li className="meals__item">
              <div className="meal__item-inner flex items-center justify-between mb-[10px]">
                <div className="flex items-center justify-start gap-2">
                  <img className="w-10 h-10" src={icons[0].icon} alt="" />
                  <div className="meal__name flex flex-col">
                    <strong className="meal__name-content text-[14px] font-medium text-[#fff]">
                      Spicy seasoned sea...
                    </strong>
                    <span className="meal__price text-[14px] font-medium text-[#ABBBC2]">
                      $ 2.29
                    </span>
                  </div>
                </div>
                <div className="flex gap-5 items-center">
                  <span className="meal__count w-12 rounded-lg border border-[#393C49] py-3 px-4 text-center text-[#fff] bg-[#2D303E]">
                    2
                  </span>
                  <span className="meal__total-price font-medium text-[#fff] text-base">
                    $ 4,58
                  </span>
                </div>
              </div>
              <div className="meal__commit w-full flex items-center justify-between gap-4">
                <input
                  className="w-4/5 rounded-lg border border-[#393C49] p-[14px] bg-[#2D303E] text-[12px] font-normal placeholder:text-[#E0E6E9]"
                  type="text"
                  placeholder="Please, just a little bit spicy only."
                />
                <button
                  className="p-[14px] border border-[#FF7CA3] rounded-lg"
                  type="button"
                >
                  <img className="w-5 h-5" src="" alt="" />
                </button>
              </div>
            </li>
            <li className="meals__item">
              <div className="meal__item-inner flex items-center justify-between mb-[10px]">
                <div className="flex items-center justify-start gap-2">
                  <img className="w-10 h-10" src={icons[0].icon} alt="" />
                  <div className="meal__name flex flex-col">
                    <strong className="meal__name-content text-[14px] font-medium text-[#fff]">
                      Spicy seasoned sea...
                    </strong>
                    <span className="meal__price text-[14px] font-medium text-[#ABBBC2]">
                      $ 2.29
                    </span>
                  </div>
                </div>
                <div className="flex gap-5 items-center">
                  <span className="meal__count w-12 rounded-lg border border-[#393C49] py-3 px-4 text-center text-[#fff] bg-[#2D303E]">
                    2
                  </span>
                  <span className="meal__total-price font-medium text-[#fff] text-base">
                    $ 4,58
                  </span>
                </div>
              </div>
              <div className="meal__commit w-full flex items-center justify-between gap-4">
                <input
                  className="w-4/5 rounded-lg border border-[#393C49] p-[14px] bg-[#2D303E] text-[12px] font-normal placeholder:text-[#E0E6E9]"
                  type="text"
                  placeholder="Please, just a little bit spicy only."
                />
                <button
                  className="p-[14px] border border-[#FF7CA3] rounded-lg"
                  type="button"
                >
                  <img className="w-5 h-5" src="" alt="" />
                </button>
              </div>
            </li>
            <li className="meals__item">
              <div className="meal__item-inner flex items-center justify-between mb-[10px]">
                <div className="flex items-center justify-start gap-2">
                  <img className="w-10 h-10" src={icons[0].icon} alt="" />
                  <div className="meal__name flex flex-col">
                    <strong className="meal__name-content text-[14px] font-medium text-[#fff]">
                      Spicy seasoned sea...
                    </strong>
                    <span className="meal__price text-[14px] font-medium text-[#ABBBC2]">
                      $ 2.29
                    </span>
                  </div>
                </div>
                <div className="flex gap-5 items-center">
                  <span className="meal__count w-12 rounded-lg border border-[#393C49] py-3 px-4 text-center text-[#fff] bg-[#2D303E]">
                    2
                  </span>
                  <span className="meal__total-price font-medium text-[#fff] text-base">
                    $ 4,58
                  </span>
                </div>
              </div>
              <div className="meal__commit w-full flex items-center justify-between gap-4">
                <input
                  className="w-4/5 rounded-lg border border-[#393C49] p-[14px] bg-[#2D303E] text-[12px] font-normal placeholder:text-[#E0E6E9]"
                  type="text"
                  placeholder="Please, just a little bit spicy only."
                />
                <button
                  className="p-[14px] border border-[#FF7CA3] rounded-lg"
                  type="button"
                >
                  <img className="w-5 h-5" src="" alt="" />
                </button>
              </div>
            </li>
            <li className="meals__item">
              <div className="meal__item-inner flex items-center justify-between mb-[10px]">
                <div className="flex items-center justify-start gap-2">
                  <img className="w-10 h-10" src={icons[0].icon} alt="" />
                  <div className="meal__name flex flex-col">
                    <strong className="meal__name-content text-[14px] font-medium text-[#fff]">
                      Spicy seasoned sea...
                    </strong>
                    <span className="meal__price text-[14px] font-medium text-[#ABBBC2]">
                      $ 2.29
                    </span>
                  </div>
                </div>
                <div className="flex gap-5 items-center">
                  <span className="meal__count w-12 rounded-lg border border-[#393C49] py-3 px-4 text-center text-[#fff] bg-[#2D303E]">
                    2
                  </span>
                  <span className="meal__total-price font-medium text-[#fff] text-base">
                    $ 4,58
                  </span>
                </div>
              </div>
              <div className="meal__commit w-full flex items-center justify-between gap-4">
                <input
                  className="w-4/5 rounded-lg border border-[#393C49] p-[14px] bg-[#2D303E] text-[12px] font-normal placeholder:text-[#E0E6E9]"
                  type="text"
                  placeholder="Please, just a little bit spicy only."
                />
                <button
                  className="p-[14px] border border-[#FF7CA3] rounded-lg"
                  type="button"
                >
                  <img className="w-5 h-5" src="" alt="" />
                </button>
              </div>
            </li>
            <li className="meals__item">
              <div className="meal__item-inner flex items-center justify-between mb-[10px]">
                <div className="flex items-center justify-start gap-2">
                  <img className="w-10 h-10" src={icons[0].icon} alt="" />
                  <div className="meal__name flex flex-col">
                    <strong className="meal__name-content text-[14px] font-medium text-[#fff]">
                      Spicy seasoned sea...
                    </strong>
                    <span className="meal__price text-[14px] font-medium text-[#ABBBC2]">
                      $ 2.29
                    </span>
                  </div>
                </div>
                <div className="flex gap-5 items-center">
                  <span className="meal__count w-12 rounded-lg border border-[#393C49] py-3 px-4 text-center text-[#fff] bg-[#2D303E]">
                    2
                  </span>
                  <span className="meal__total-price font-medium text-[#fff] text-base">
                    $ 4,58
                  </span>
                </div>
              </div>
              <div className="meal__commit w-full flex items-center justify-between gap-4">
                <input
                  className="w-4/5 rounded-lg border border-[#393C49] p-[14px] bg-[#2D303E] text-[12px] font-normal placeholder:text-[#E0E6E9]"
                  type="text"
                  placeholder="Please, just a little bit spicy only."
                />
                <button
                  className="p-[14px] border border-[#FF7CA3] rounded-lg"
                  type="button"
                >
                  <img className="w-5 h-5" src="" alt="" />
                </button>
              </div>
            </li>
            <li className="meals__item">
              <div className="meal__item-inner flex items-center justify-between mb-[10px]">
                <div className="flex items-center justify-start gap-2">
                  <img className="w-10 h-10" src={icons[0].icon} alt="" />
                  <div className="meal__name flex flex-col">
                    <strong className="meal__name-content text-[14px] font-medium text-[#fff]">
                      Spicy seasoned sea...
                    </strong>
                    <span className="meal__price text-[14px] font-medium text-[#ABBBC2]">
                      $ 2.29
                    </span>
                  </div>
                </div>
                <div className="flex gap-5 items-center">
                  <span className="meal__count w-12 rounded-lg border border-[#393C49] py-3 px-4 text-center text-[#fff] bg-[#2D303E]">
                    2
                  </span>
                  <span className="meal__total-price font-medium text-[#fff] text-base">
                    $ 4,58
                  </span>
                </div>
              </div>
              <div className="meal__commit w-full flex items-center justify-between gap-4">
                <input
                  className="w-4/5 rounded-lg border border-[#393C49] p-[14px] bg-[#2D303E] text-[12px] font-normal placeholder:text-[#E0E6E9]"
                  type="text"
                  placeholder="Please, just a little bit spicy only."
                />
                <button
                  className="p-[14px] border border-[#FF7CA3] rounded-lg"
                  type="button"
                >
                  <img className="w-5 h-5" src="" alt="" />
                </button>
              </div>
            </li>
            <li className="meals__item">
              <div className="meal__item-inner flex items-center justify-between mb-[10px]">
                <div className="flex items-center justify-start gap-2">
                  <img className="w-10 h-10" src={icons[0].icon} alt="" />
                  <div className="meal__name flex flex-col">
                    <strong className="meal__name-content text-[14px] font-medium text-[#fff]">
                      Spicy seasoned sea...
                    </strong>
                    <span className="meal__price text-[14px] font-medium text-[#ABBBC2]">
                      $ 2.29
                    </span>
                  </div>
                </div>
                <div className="flex gap-5 items-center">
                  <span className="meal__count w-12 rounded-lg border border-[#393C49] py-3 px-4 text-center text-[#fff] bg-[#2D303E]">
                    2
                  </span>
                  <span className="meal__total-price font-medium text-[#fff] text-base">
                    $ 4,58
                  </span>
                </div>
              </div>
              <div className="meal__commit w-full flex items-center justify-between gap-4">
                <input
                  className="w-4/5 rounded-lg border border-[#393C49] p-[14px] bg-[#2D303E] text-[12px] font-normal placeholder:text-[#E0E6E9]"
                  type="text"
                  placeholder="Please, just a little bit spicy only."
                />
                <button
                  className="p-[14px] border border-[#FF7CA3] rounded-lg"
                  type="button"
                >
                  <img className="w-5 h-5" src="" alt="" />
                </button>
              </div>
            </li>
            <li className="meals__item">
              <div className="meal__item-inner flex items-center justify-between mb-[10px]">
                <div className="flex items-center justify-start gap-2">
                  <img className="w-10 h-10" src={icons[0].icon} alt="" />
                  <div className="meal__name flex flex-col">
                    <strong className="meal__name-content text-[14px] font-medium text-[#fff]">
                      Spicy seasoned sea...
                    </strong>
                    <span className="meal__price text-[14px] font-medium text-[#ABBBC2]">
                      $ 2.29
                    </span>
                  </div>
                </div>
                <div className="flex gap-5 items-center">
                  <span className="meal__count w-12 rounded-lg border border-[#393C49] py-3 px-4 text-center text-[#fff] bg-[#2D303E]">
                    2
                  </span>
                  <span className="meal__total-price font-medium text-[#fff] text-base">
                    $ 4,58
                  </span>
                </div>
              </div>
              <div className="meal__commit w-full flex items-center justify-between gap-4">
                <input
                  className="w-4/5 rounded-lg border border-[#393C49] p-[14px] bg-[#2D303E] text-[12px] font-normal placeholder:text-[#E0E6E9]"
                  type="text"
                  placeholder="Please, just a little bit spicy only."
                />
                <button
                  className="p-[14px] border border-[#FF7CA3] rounded-lg"
                  type="button"
                >
                  <img className="w-5 h-5" src="" alt="" />
                </button>
              </div>
            </li>
          </ul>
          <div className="meal__total-all flex flex-col text-[#fff] mb-6">
            <di className="meal__discount flex justify-between items-center">
              <span className="meal__discount-discount text-[14px] text-[#ABBBC2]">
                Discount
              </span>
              <span className="meal__discount-count">$0</span>
            </di>
            <di className="meal__discount flex  items-center justify-between gap-2">
              <span className="meal__discount-subtotal text-[14px] text-[#ABBBC2]">
                Sub total
              </span>
              <span className="meal__discount-count">$ 21,03</span>
            </di>
          </div>
          <button
            className="order__btn-meal block w-[360px] rounded-lg p-[14px] text-[#fafafa] text-[14px] bg-[#ea7c69] m-auto mb-3"
            type="button"
          >
            Continue to Payment
          </button>
        </div>
      </div>
    </section>
  );
};

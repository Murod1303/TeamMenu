import "./home.scss";
import { Header } from "../../Components/Header/Header";
import { Menu } from "../../Components/Menu/Menu";
import { Order } from "../../Components/Order/Order";

export const Home = () => {
  return (
    <section className="home__wrapper w-full flex items-start justify-start gap-[46px]">
      <div className="menu__content w-2/3 h-screen">
        <Header />
        <Menu />
      </div>
      <Order />
    </section>
  );
};

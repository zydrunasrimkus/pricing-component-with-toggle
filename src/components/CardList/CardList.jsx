import { planBundle, annualPrice, monthlyPrice } from "../../data/pricing";
import Card from "../Card/Card";
import "./CardList.scss";

export default function CardList(props) {
  let price = props.switchState === false ? annualPrice : monthlyPrice;
  const cards = planBundle.map((card, i) => (
    <li key={card.type}>
      <Card
        key={card.type}
        type={card.type}
        price={price[i].price}
        storage={card.storage}
        usersAllowed={card.users}
        limit={card.limit}
      />
    </li>
  ));
  return <ul className="cardlist__wrapper">{cards}</ul>;
}

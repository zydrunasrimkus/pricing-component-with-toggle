import "./Card.scss";
import Button from "@mui/material/Button";

export default function Card({ type, price, storage, usersAllowed, limit }) {
  return (
    <div className="card__wrapper">
      <span className="card--type">{type}</span>
      <span className="card--price">{price}</span>
      <span className="card--hr"></span>
      <span className="card--storage">{storage} Storage</span>
      <span className="card--hr"></span>
      <span className="card--users-allowed">{usersAllowed} Users Allowed</span>
      <span className="card--hr"></span>
      <span className="card--limit">Send up to {limit}</span>
      <span className="card--hr"></span>
      <Button className='card--button' variant="contained" size='large' href='#'>learn more</Button>
    </div>
  );
}

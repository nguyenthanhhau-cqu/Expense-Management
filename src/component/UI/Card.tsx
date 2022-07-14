import "./Card.css";

type Props = {
  children?: React.ReactNode;
  className: String;
};

function Card({ children, className }: Props) {
  const classe = "card " + className;
  return <div className={classe}>{children}</div>;
}

export default Card;

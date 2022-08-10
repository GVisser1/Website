import classNames from "classnames";
import { Color } from "../types/Color";
import { getCardTheme } from "../utils/colorUtils";

interface HeaderProps {
  color: Color;
  title: string;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ color, title, className }) => {
  const classes = classNames("p-2", getCardTheme(color), className);

  return (
    <div className={classes}>
      <p className="text-xs line-clamp-1">{title}</p>
    </div>
  );
};
export default Header;

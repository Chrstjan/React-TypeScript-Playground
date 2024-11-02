import { ReactElement } from "react";
type HeaderProps = { title?: string };
import s from "./Header.module.scss";

export const Header = ({ title }: HeaderProps): ReactElement => {
  return (
    <header className={s.headerStyling}>
      <h2>{title}</h2>
    </header>
  );
};

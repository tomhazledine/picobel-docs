import Logo from "../icons/Logo.js";

const Header = ({ title }) => (
    <header className="header">
        <h2 className="header__title">
            <a href="/" className="header__link">
                <Logo className="header__logo" />
                <span className="header__text">{title}</span>
            </a>
        </h2>
    </header>
);

export default Header;

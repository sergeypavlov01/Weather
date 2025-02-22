import "./BurgerButton.scss";

export const BurgerButton = ({ active, ...props }) => {
    return (
        <button
            {...props}
            type="button"
            className={
                active
                    ? "header__burger-button burger-button burger-button--active"
                    : "header__burger-button burger-button"
            }
        >
            <span className="burger-button__line burger-button__first-line"></span>
            <span className="burger-button__line burger-button__second-line"></span>
        </button>
    );
};

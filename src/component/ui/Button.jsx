
import PropTypes from "prop-types";


/**
 * A reusable Button component.
 *
 * @param {Object} props - Component properties.
 * @param {string} props.children - The button content (e.g., text or elements).
 * @param {string} props.type - The button type (e.g., 'button', 'submit').
 * @param {string} props.variant - The style variant ('primary', 'secondary').
 * @param {function} props.onClick - The function to handle click events.
 * @param {boolean} props.disabled - If true, disables the button.
 */
const Button = ({
  children,
  type = "button",
  variant = "primary",
  onClick,
  disabled = false,
}) => {
  return (
    <button
      type={type}
      className={`button ${variant}`}
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: "10px 20px",
        borderRadius: "5px",
        fontSize: "16px",
        fontWeight: "bold",
        cursor: disabled ? "not-allowed" : "pointer",
        border: "none",
        backgroundColor: variant === "primary" ? "#007BFF" : "#6C757D",
        color: "#fff",
        opacity: disabled ? 0.7 : 1,
        transition: "background-color 0.3s ease",
      }}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  variant: PropTypes.oneOf(["primary", "secondary"]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;

export const Button = ({ children, className = "", type = "button", onClick, ...props }) => {
    const baseClasses = "relative inline-flex items-center gap-1.5 justify-center px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200";

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseClasses} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;
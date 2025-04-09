import Link from "next/link";

const Button = ({ children, href, className = "", ...props }) => {
  const baseStyle =
    "bg-primary text-black px-6 py-2 rounded-md hover:bg-primary-hover transition-colors duration-300";

  if (href) {
    return (
      <Link href={href} className={`${baseStyle} ${className}`} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`${baseStyle} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;

import Link, { LinkProps } from "next/link";
import clsx from "clsx";

type LinkTheme = "yellow" | "blue" | "purple";

const colorThemes: Record<LinkTheme, { base: string; hover: string; text?: string }> = {
  yellow: {
    base: "bg-yellow-500 text-white",
    hover: "hover:bg-slate-200 hover:text-yellow-500",
    text: "text-yellow-500"
  },
  blue: {
    base: "bg-blue-400 text-white",
    hover: "hover:bg-blue-400",
    text: "text-blue-400"
  },
  purple: {
    base: "bg-purple-400 text-white",
    hover: "hover:bg-purple-400",
    text: "text-purple-400"
  }
};

interface PageLinkProps extends LinkProps {
    children?: React.ReactNode;
    button?: boolean;
    theme?: LinkTheme;
    className?: string;
}

export default function PageLink({
    children, 
    button = false, 
    theme = 'yellow',
    className, 
    ...rest
}: PageLinkProps) {
    const themeClass = button ? 
        `${colorThemes[theme].base} ${colorThemes[theme].hover} rounded px-4 py-2.5 my-4 transition duration 150` : 
        `${colorThemes[theme].text} mt-1 hover:underline`;

    return (
        <Link 
            className={clsx(
                'block w-fit',
                themeClass,
                className
            )}
            {...rest}
        >
            {children}
        </Link>
    )
}
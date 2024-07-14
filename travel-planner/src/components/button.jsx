import React from 'react';

const Button = ({ children, ...props }) => {
    const baseCss =
        ' rounded-lg px-5 py-2 font-medium flex items-center gap-2 text-center justify-center';
    const primary = 'bg-lime-300 text-lime-950 hover:bg-lime-400';
    const secondary = 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700';

    const LARGE = 'large';
    const size = props.size === LARGE ? ' w-full h-11' : null;

    const PRIMARY = 'primary';
    const className = (props.variant === PRIMARY ? primary : secondary)
        .concat(baseCss)
        .concat(size);

    return (
        <button {...props} className={className}>
            {children}
        </button>
    );
};

export default Button;

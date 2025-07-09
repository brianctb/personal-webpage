type PillGroupProps = {
    items: string[];
    className?: string;
    pillClassName?: string;
};

export const PillGroup = ({
    items,
    className = '',
    pillClassName = ''
}: PillGroupProps) => {
    const baseGroupClasses = 'mt-2 flex flex-wrap gap-2';
    const basePillClasses = 'px-4 py-2 rounded-full font-medium text-neutral-400 min-w-[100px] text-center';

    return (
        <div className={`${baseGroupClasses} ${className}`}>
            {items.map((item) => (
                <span
                    key={item}
                    className={`${basePillClasses} ${pillClassName}`}
                >
                    {item}
                </span>
            ))}
        </div>
    );
};


import Loading2 from "@/assets/icons/loading-2";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = ComponentProps<"button"> & {
    loading?: boolean;
    loadingLabel?: string;
    loadingPosition?: "right" | "left";
    loadingColor?: string
};

export default function Button({
    className,
    children,
    loading,
    loadingPosition = "right",
    loadingLabel,
    loadingColor = "#FFFFFF",
    ...props
}: ButtonProps) {
    return (
        <button
            disabled={loading || props.disabled}
            {...props}
            className={twMerge(
                "cursor-pointer flex gap-2 items-center justify-center disabled:opacity-80 ",
                className
            )}
        >
            {loading && loadingPosition === "left" && (
                <Loading2 className="w-auto h-8" stopColor={loadingColor} />
            )}
            {!loading && children}
            {loading && loadingLabel && <p>{loadingLabel}</p>}
            {loading && loadingPosition === "right" && (
                <Loading2 className="w-auto h-8" stopColor={loadingColor} />
            )}
        </button>
    );
}

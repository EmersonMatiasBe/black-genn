import { ComponentProps, ReactNode } from "react"

interface ContainerProps extends ComponentProps<'div'> {
    children: ReactNode
}

export default function Container({children, ...props}: ContainerProps){
    return(
        <div className="w-full" {...props}>
            {children}
        </div>
    )
}
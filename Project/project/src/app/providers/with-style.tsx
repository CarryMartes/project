import { ReactNode } from "react";

interface IProps {
    children: ReactNode
}

function withStyle({ children }: IProps) {
    return (
        <div>
            { children }
        </div>
    )
}
export default withStyle;
import React from "react";
import { ReactElement } from "react";
interface BigCardProps {
    title: () => JSX.Element;
    style?: React.CSSProperties;
    hide?: boolean;
    children?: ReactElement<any, any> | string;
}
declare const BigCard: React.ForwardRefExoticComponent<BigCardProps & React.RefAttributes<HTMLDivElement>>;
export default BigCard;

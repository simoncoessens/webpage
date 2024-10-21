import { ReactNode } from "react";

type HighlightProps = {
	children: ReactNode;
};

export const Highlight = (props: HighlightProps) => {
	return <span className="text-gray">{props.children}</span>;
};

export default Highlight;

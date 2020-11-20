import { useState } from "react";
import HeaderContext from "../contexts/HeaderContext";

const ContextWrapper = ({ children, navigation }) => {
	const [menuItems] = useState(navigation);
	const [color, setColor] = useState(true);

	return (
		<HeaderContext.Provider value={{ menuItems, color, setColor }}>
			{children}
		</HeaderContext.Provider>
	);
};

export default ContextWrapper;

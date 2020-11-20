import HeaderContext from "../contexts/HeaderContext";
import { useContext } from "react";

function ToggleNavigationColorButton() {
	const { color, setColor } = useContext(HeaderContext);
	return <button onClick={() => setColor(!color)}>Toggle Navigation Color</button>;
}

export default ToggleNavigationColorButton;

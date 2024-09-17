import { useState } from "react";

export const useRippleElements = ({
	maxRippleElements = 10,
	className = "ripple"
}) => {
	const [rippleElements, setRippleElements] = useState([]);

	const handleRippleAnimationEnd = (key) => {
		setRippleElements((rippleElements) =>
			rippleElements.filter((rippleEl) => rippleEl.key !== key)
		);
	};

	const createRippleElement = (size, left, top) => {
		const key = String(Date.now());

		return (
			<div
				key={key}
				className={className}
				style={{
					width: size,
					height: size,
					left,
					top
				}}
				onAnimationEnd={() => handleRippleAnimationEnd(key)}
			></div>
		);
	};

	const addRippleElement = (event) => {
		if (rippleElements.length >= maxRippleElements) return;

		const currentTargetEl = event.currentTarget;
		const currentTargetRect = currentTargetEl.getBoundingClientRect();

		const size = Math.max(currentTargetEl.clientHeight, currentTargetEl.clientWidth);
		const left = event.clientX - currentTargetRect.left - size / 2 + "px";
		const top = event.clientY - currentTargetRect.top - size / 2 + "px";
		const rippleEl = createRippleElement(size, left, top);

		setRippleElements((rippleElements) => [...rippleElements, rippleEl]);
	};

	return {
		addRippleElement,
		rippleElements
	};
};
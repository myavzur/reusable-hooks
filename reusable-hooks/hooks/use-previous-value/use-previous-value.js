import { useEffect, useRef } from "react";

export const usePreviousValue = (value) => {
	const previousValueRef = useRef(null);

	useEffect(() => {
		previousValueRef.current = value;
	}, [value]);

	return previousValueRef;
};
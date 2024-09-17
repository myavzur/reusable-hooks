import { useEffect, useRef } from "react";

export const useRendersCounter = () => {
	const rendersRef = useRef<number>(0);

	useEffect(() => {
		rendersRef.current += 1;
	});

	return rendersRef.current;
};
import { useCallback, useState } from "react";

import { copyToClipboard } from "../../helpers/copy-to-clipboard.js";

export const useCopy = () => {
	const [isCopied, setIsCopied] = useState(false);

	const copy = useCallback(async (str) => {
		const copiedString = await copyToClipboard(str);
		setIsCopied(Boolean(copiedString));
	}, []);

	return [isCopied, copy, setIsCopied];
}
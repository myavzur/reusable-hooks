export const copyToClipboard = async (value) => {
	let copiedString = null;

	await navigator.clipboard
		.writeText(value)
		.then(() => {
			copiedString = value;
		})
		.catch(() => {
			copiedString = null;
		});

	return copiedString;
};
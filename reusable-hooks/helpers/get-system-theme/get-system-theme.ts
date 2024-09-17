export const getSystemTheme = (): "dark" | "light" => {
	/* It's possible that browser (like Edge) doesn't support matchMedia.
	 * So if there is no matchMedia - return dark theme by default. */
	const isPrefersDarkTheme =
		window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

	return isPrefersDarkTheme ? "dark" : "light";
};
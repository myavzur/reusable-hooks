// Всегда возвращает уникальное значение из `array` в зависимости от переданной `str`
export const getElementFromArrayByStringHash = (array, str) => {
	const generateHash = (str) => {
		let hash = 0;
		for (let i = 0; i < str.length; i++) {
			const char = str.charCodeAt(i);
			hash = (hash << 5) - hash + char;
		}
		return hash;
	};

	const hashedStr = generateHash(str);
	const index = Math.abs(hashedStr % array.length);

	return array[index];
};
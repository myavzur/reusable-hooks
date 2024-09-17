import { useWindowEvent } from './use-window-event';

/**
 * @param {String} combination - Комбинация клавиш. Может включать в себе модификаторы `Ctrl`, `Alt`, `Meta`, `Shift`,
 *  а также клавиши указанные в формате `e.code`
 * @param {Function} handler - Обработчик нажатия заданной комбинации
 * @example
 * useWindowHotkey("Ctrl+Shift+KeyS", handleSave); //  Ctrl + Shift + S
 * useWindowHotkey("Shift+Semicolon", handleRemoveSemi); //  Shift + ;
 * useWindowHotkey("Alt+LeftBracket", handleLeftBracket); // Alt + [
 * useWindowHotkey("Meta+RightBracket", handleRightBracket); // Клавиша Command на Mac или Win на Windows + ]
 */
export const useWindowHotkey = (combination, handler) => {
  const keys = combination
    .toLowerCase()
    .split('+')
    .map((key) => key.trim());

  useWindowEvent('keydown', (e) => {
    // Проверяем нажата ли клавиша в данный момент и есть ли такая клавиша в комбинации
    const isModifiersMatches =
      keys.includes('ctrl') === e.ctrlKey &&
      keys.includes('shift') === e.shiftKey &&
      keys.includes('alt') === e.altKey &&
      keys.includes('meta') === e.metaKey;

    const isOtherKeysMatches = keys.some((key) => e.code.toLowerCase() === key);

    if (!isModifiersMatches || !isOtherKeysMatches) return;

    e.preventDefault();
    handler(e);
  });
};

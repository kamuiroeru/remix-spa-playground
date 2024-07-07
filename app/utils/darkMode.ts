import Cookies from 'js-cookie';

const IS_DARK_MODE_COOKIE_KEY = '__IS_DARK_MODE__';

export const getIsDarkMode = (): boolean => {
  const isDarkModeCookie = Cookies.get(IS_DARK_MODE_COOKIE_KEY);
  // Cookie に設定が無い場合は、OS の設定に従う
  if (isDarkModeCookie === undefined) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  } else {
    return isDarkModeCookie === '1';
  }

}

export const saveIsDarkMode = (isDarkMode: boolean): void => {
  Cookies.set(IS_DARK_MODE_COOKIE_KEY, isDarkMode ? '1' : '0');
}

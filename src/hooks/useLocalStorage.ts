import { useCallback } from 'react';

export const localStorageSet = (key: string, val: string) => {
	if (typeof window !== 'undefined') {
		window.localStorage.setItem(key, val);
	}
};

export const localStorageGet = (key: string) => {
	if (typeof window !== 'undefined') {
		return window.localStorage.getItem(key);
	}
};

export const localStorageRemove = (key: string) => {
	if (typeof window !== 'undefined') {
		return window.localStorage.removeItem(key);
	}
};

const useLocalStorage = () => {
	const set = useCallback(localStorageSet, []);
	const get = useCallback(localStorageGet, []);
	const remove = useCallback(localStorageRemove, []);

	return { set, get, remove };
};

export default useLocalStorage;

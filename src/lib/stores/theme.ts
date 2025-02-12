import { browser } from '$app/environment';
import type { Theme } from '$lib/types';
import { writable } from 'svelte/store';

const getInitialTheme = () => {
  if (browser) {
    const storedTheme = localStorage.getItem('theme') as Theme;
    if (storedTheme) {
      return storedTheme;
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark' as Theme;
    }
  }
  return 'dark' as Theme;
};

export const theme = writable<Theme>(getInitialTheme());

if (browser) {
  theme.subscribe((value) => {
    localStorage.setItem('theme', value);
  });
}

export const toggleTheme = () => {
  theme.update(currentTheme => currentTheme === 'dark' ? 'light' : 'dark');
};
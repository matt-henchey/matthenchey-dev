import { browser } from '$app/environment';
import { writable } from 'svelte/store';

// Initialize theme from localStorage or system preference
const initialTheme = browser
  ? localStorage.getItem('theme') ||
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  : 'light';

// Create the store
export const theme = writable<'light' | 'dark'>(initialTheme as 'light' | 'dark');

// Initialize the dark class if needed
if (browser && initialTheme === 'dark') {
  document.documentElement.classList.add('dark');
}

// Toggle theme function
export function toggleTheme() {
  theme.update((current) => {
    const newTheme = current === 'light' ? 'dark' : 'light';
    if (browser) {
      localStorage.setItem('theme', newTheme);
    }
    return newTheme;
  });
}

export function toggleHamburgerMenu() {

}
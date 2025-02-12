import { browser } from '$app/environment';
import { writable } from 'svelte/store';

// Check if splash has been seen before
const hasSeenSplash = browser ? localStorage.getItem('hasSeenSplash') === 'true' : false;

export const splashComplete = writable(hasSeenSplash);

// Update localStorage when splash is complete
if (browser) {
    splashComplete.subscribe(value => {
        if (value) {
            localStorage.setItem('hasSeenSplashed', 'true');
        }
    });
}
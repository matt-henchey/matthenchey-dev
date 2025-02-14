// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		interface Platform {
			env: {
				AWS_ACCESS_KEY_ID: string;
				AWS_SECRET_ACCESS_KEY: string;
				AWS_REGION: string;
			};
		}
	}
}

export { };

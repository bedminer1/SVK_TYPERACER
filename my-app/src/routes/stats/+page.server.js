import PocketBase from 'pocketbase';
import { SECRET_PASSWORD, SECRET_EMAIL, SECRET_URL } from '$env/static/private'

export async function load() {
	// let SECRET_PASSWORD = 'BWseSz8QqbmP7C7';
	// let SECRET_EMAIL = 'alexander.seah.min.rui@gmail.com';

	const pb = new PocketBase(SECRET_URL);
	await pb.admins.authWithPassword(SECRET_EMAIL, SECRET_PASSWORD);
	const records = await pb.collection('wpmData').getFullList(200, {
		sort: '-created'
	});

	const results = records.map((record) => {
		return {
			quote: record.quote,
			wpm: record.wpm
		};
	});

	return {
		records: results
	};
}

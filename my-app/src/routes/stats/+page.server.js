import PocketBase from 'pocketbase';
import { SECRET_PASSWORD, SECRET_EMAIL, SECRET_URL } from '$env/static/private'

export const actions = {
	delete: async ({ request }) => {
		const pb = new PocketBase(SECRET_URL);
		await pb.admins.authWithPassword(SECRET_EMAIL, SECRET_PASSWORD);
	
		const form = await request.formData();
		const id = form.get("id") ?? "";
		console.log(id);
	
		await pb.collection("wpmData").delete(id);
	  },
}

export async function load() {
	const pb = new PocketBase(SECRET_URL);
	await pb.admins.authWithPassword(SECRET_EMAIL, SECRET_PASSWORD);
	const records = await pb.collection('wpmData').getFullList(200, {
		sort: '-created'
	});

	const results = records.map((record) => {
		return {
			quote: record.quote,
			wpm: record.wpm,
			id: record.id
		};
	});

	return {
		records: results
	};
}

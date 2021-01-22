// eb842548f346abbdfb3cbd95557a5d27c0e73530
class Github {
	constructor () {
		this.client_ID = '426ce3bf615fdd02e485';
		this.client_secret = 'eb842548f346abbdfb3cbd95557a5d27c0e73530';
	}
	async getUser(user) {
		const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_ID}&client_secret=${this.client_secret}`);
		const profile = await profileResponse.json();

		return {
			profile
		}
	}
}
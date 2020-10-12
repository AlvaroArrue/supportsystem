/**
 * ###############################################################################################
 *  ____                                        _     _____              _             _
 * |  _ \  (_)  ___    ___    ___    _ __    __| |   |_   _| (_)   ___  | | __   ___  | |_   ___
 * | | | | | | / __|  / __|  / _ \  | '__|  / _` |     | |   | |  / __| | |/ /  / _ \ | __| / __|
 * | |_| | | | \__ \ | (__  | (_) | | |    | (_| |     | |   | | | (__  |   <  |  __/ | |_  \__ \
 * |____/  |_| |___/  \___|  \___/  |_|     \__,_|     |_|   |_|  \___| |_|\_\  \___|  \__| |___/
 *
 * ---------------------
 *      Quick Start
 * ---------------------
 *
 * 	> For detailed instructions, visit the GitHub repository and read the documentation:
 * 	https://github.com/eartharoid/DiscordTickets/wiki
 *
 * 	> IMPORTANT: Also edit the TOKEN in 'user/.env'
 *
 * ---------------------
 *       Support
 * ---------------------
 *
 * 	> Information: https://github.com/eartharoid/DiscordTickets/#readme
 * 	> Discord Support Server: https://go.eartharoid.me/discord
 * 	> Wiki: https://github.com/eartharoid/DiscordTickets/wiki
 *
 * ###############################################################################################
 */

module.exports = {
	prefix: '-',
	name: 'SupportSystem',
	activities: ['-new', 'with tickets', 'for new tickets'],
	activity_types: ['PLAYING', 'PLAYING', 'WATCHING'], // Available: PLAYING / LISTENING / WATCHING / STREAMING
	colour: '#009999',
	err_colour: 'RED',
	cooldown: 3,

	guild: '764988836219715606', // ID of your guild
	staff_role: '765168317580181506', // ID of your Support Team role

	tickets: {
		category: '765167396091985941', // ID of your tickets category
		send_img: true,
		ping: 'here',
		text: `Bienvenido, {{ tag }}!
		Dentro de unos momentos un staff le atendera
		En la proxima vez, especifica la razon por la que quieras abrir el ticket`,
		pin: false,
		max: 3
	},

	transcripts: {
		text: {
			enabled: true,
			keep_for: 90,
		},
		web: {
			enabled: false,
			server: 'https://tickets.example.com',
		}
	},

	panel: {
		title: 'SupportSystem. By Alvaro#7170',
		description: 'Necesitas ayuda? pulsa la reaccion para empezar.',
		reaction: '🧾'
	},

	storage: {
		type: 'sqlite'
	},

	logs: {
		files: {
			enabled: true,
			keep_for: 7
		},
		discord: {
			enabled: false,
			channel: '765168163146432532' // ID of your log channel
		}
	},

	debug: false,
	updater: true
};

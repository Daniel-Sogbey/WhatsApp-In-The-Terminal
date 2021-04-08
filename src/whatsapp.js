const venom = require("venom-bot");

venom.create().then(client => start(client)).catch(error => {
	console.log(error);
});

async function start(client) {
	// client.onMessage(message => {
	// if (message.body === "Hi" && message.isGroupMsg === false) {
	// client
	// .sendText(message.from, "Welcome Venom 🕷")
	// .then(result => {
	// console.log("Result: ", result); //return object success
	// })
	// .catch(error => {
	// console.error("Error when sending: ", error); //return object error
	// });
	// }
	// });

	const chats = await client.getAllChatsNewMsg();

	console.log(chats);
}

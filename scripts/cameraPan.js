let _BossBarSocket;

Hooks.once("socketlib.ready", () => {
	_BossBarSocket = socketlib.registerModule("bossbar");
	_BossBarSocket.register("cameraPan", BossBar.cameraPan);
	_BossBarSocket.register("hackUpdate", BossBar.hackUpdate);
});
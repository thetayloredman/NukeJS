# Client (extends discord.Client)

The NukeJS client is the main object for interfacing with NukeJS.

## options

The Client in itself, defaults to basic pre-defined options if nothing has been inputed.

| Option         | Input      | Function                                            | default   |
| -------------- | ---------- | --------------------------------------------------- | --------- |
| discordOptions | `Object`   | Your normal Discord Options provided by discord.js  | `{}`      |
| readyMessage   | `string`   | The message that gets logged when the bot is online | `""`      |
| owner          | `string`   | The ID of the Owner of the Bot                      | `""`      |
| dev_ids        | `string[]` | The IDs of the Bot developers                       | `[owner]` |

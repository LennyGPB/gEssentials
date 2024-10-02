import { Client, GatewayIntentBits, PermissionsBitField } from "discord.js";

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const DISCORD_TOKEN = process.env.DISCORD_TOKEN;
client.login(DISCORD_TOKEN);

// Rôles autorisés à voir le canal privé
const gradesAutorises = ["937061492933664868", "734755664727113738"];
const rolePermissions = gradesAutorises.map((roleId) => ({
  id: roleId,
  allow: [PermissionsBitField.Flags.ViewChannel],
}));

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { channelName } = req.body;

    try {
      // ID du serveur Discord
      const guildId = "734749900780339204";

      await client.guilds.fetch(guildId);
      const guild = client.guilds.cache.get(guildId);

      if (!guild) {
        return res.status(404).json({ error: "Serveur Discord non trouvé" });
      }

      const newChannel = await guild.channels.create({
        name: channelName,
        type: 0,
        permissionOverwrites: [
          {
            id: guild.roles.everyone.id, // Bloque l'accès à tout le monde
            deny: [PermissionsBitField.Flags.ViewChannel],
          },
          ...rolePermissions,
        ],
      });

      return res
        .status(200)
        .json({ message: "Canal créé avec succès", channelId: newChannel.id });
    } catch (error) {
      console.error("Erreur lors de la création du canal:", error);
      return res
        .status(500)
        .json({ error: "Erreur lors de la création du canal" });
    }
  } else {
    return res.status(405).json({ error: "Méthode non autorisée" });
  }
}

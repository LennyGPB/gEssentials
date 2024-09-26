import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

const authOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      authorization: {
        params: { scope: "identify email guilds guilds.members.read" },
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      try {
        const userData = await fetchUser(token.accessToken);
        session.user.avatar = userData.avatar;
        session.user.global_name = userData.global_name || userData.username;

        const guildId = "1164172207145091132";
        const guildMemberData = await fetchGuildMember(
          token.accessToken,
          guildId
        );

        if (guildMemberData) {
          const roles = await getGuildRoles(guildId);
          const rolePriority = ["💠・Gérant", "📚・Formateur"];
          const userRoles = guildMemberData.roles.map(
            (roleId) => roles[roleId] || roleId
          );
          const filteredRoles = userRoles.filter((role) =>
            rolePriority.includes(role)
          );

          session.user.roles =
            filteredRoles.length > 0
              ? filteredRoles
                  .sort(
                    (a, b) => rolePriority.indexOf(a) - rolePriority.indexOf(b)
                  )
                  .slice(0, 1)
              : userRoles;
        } else {
          console.log("L'utilisateur n'est pas membre de cette guilde.");
        }
      } catch (error) {
        console.error(error.message);
      }

      return session;
    },
  },
};

async function fetchUser(accessToken) {
  const response = await makeRequest(
    `https://discord.com/api/users/@me`,
    accessToken,
    "fetch User",
    false
  );
  return response.json();
}

async function fetchGuildMember(accessToken, guildId) {
  const response = await makeRequest(
    `https://discord.com/api/users/@me/guilds/${guildId}/member`,
    accessToken,
    "Guild Member",
    false
  );
  return response.json();
}

async function getGuildRoles(guildId) {
  const response = await makeRequest(
    `https://discord.com/api/guilds/${guildId}/roles`,
    process.env.DISCORD_BOT_TOKEN,
    "Guilds Roles",
    true
  );
  const rolesData = await response.json();
  return rolesData.reduce((rolesMap, role) => {
    rolesMap[role.id] = role.name;
    return rolesMap;
  }, {});
}

async function makeRequest(url, token, type, bot) {
  let headers;
  if (bot) {
    headers = { Authorization: `Bot ${token}` };
  } else {
    headers = { Authorization: `Bearer ${token}` };
  }

  const response = await fetch(url, { headers });
  if (!response.ok) {
    throw new Error(`Erreur ${type} API: ${response.status}`);
  }
  return response;
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

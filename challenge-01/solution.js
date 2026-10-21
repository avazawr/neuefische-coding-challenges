const users = [
  {
    username: "David",
    status: "online",
    lastActivity: 10,
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104,
  },
];

var online = [],
  offline = [],
  away = [];

for (const user of users) {
  if (user.status == "offline") offline.push(user.username);
  else {
    if (user.lastActivity > 10) {
      away.push(user.username);
    } else {
      online.push(user.username);
    }
  }
}

const output = {
  online: online,
  offline: offline,
  away: away,
};
console.log(output);

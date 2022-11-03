export function GetAllServers(ns) {
    let servers = ['home'];
    for (const server of servers) {
        const found = ns.scan(server);
        if (server != 'home') found.splice(0, 1);
        servers.push(...found);
    }
    return servers;
}

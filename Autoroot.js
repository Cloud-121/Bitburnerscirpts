import { GetAllServers } from '/server/test/utils.js'
function myFunction(server, ns) {
try { ns.brutessh(server); } catch { }
try { ns.ftpcrack(server); } catch { }
try { ns.relaysmtp(server); } catch { }
try { ns.httpworm(server); } catch { }
try { ns.sqlinject(server); } catch { }
try { ns.nuke(server); } catch { }
}

export async function main(ns) {
  for (const server of GetAllServers(ns))
    myFunction(server, ns);
}

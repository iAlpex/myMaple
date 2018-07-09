importPackage(Packages.server.maps);
importPackage(Packages.handling.channel);
importPackage(Packages.tools.packet);


function enter(pi) {
	var eim = pi.getPlayer().getEventInstance();
	var mf = eim.getMapFactory();
	var map = mf.getMap(920010100);
	var party = pi.getPlayer().getEventInstance().getPlayers();
	var realParty = pi.getParty();
	var playerStatus = pi.isLeader();
	if (playerStatus) {
		for (var i = 0; i < party.size(); i++) {
			party.get(i).changeMap(map, map.getPortal(13));
		}
		return true;	
	} else {
		pi.getPlayer().getClient().getSession().write(MaplePacketCreator.serverNotice(5, "Only the party leader has the desision whether to leave this room or not."));
		return false;
	}
}
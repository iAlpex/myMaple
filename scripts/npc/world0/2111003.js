/* Author: aaroncsn(MapleSea Like)(Incomplete)
    NPC Name:       Humanoid A
    Map(s):         Sunset Road: Magatia(2610000000)
    Description:        Unknown
*/

function start(){
    if (cm.isQuestStarted(3335)) {
        cm.sendOk("The quest has been complete.");
        cm.gainExp(406800);
        cm.forceCompleteQuest(3335);
    } else {
        cm.sendOk("I want to be a human, a human being with a warm heart...so that maybe I can hold her hand. Unfortunately, that's not possible right now.");
    }
    cm.dispose();
}
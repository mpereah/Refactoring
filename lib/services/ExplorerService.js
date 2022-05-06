
class ExplorerService{
    static filterByMission(explorers, mission){
        const explorersByMission = explorers.filter((explorer) => explorer.mission === mission)
        return explorersByMission
    }

    static getAmountOfExplorersByMission(explorer, mission)

    static getExplorersUsernamesByMission(explorer, mission)
}

ExplorerService.filterByMission(explorers, "node");
ExplorerService.getAmountOfExplorersByMission(explorers, "node");
ExplorerService.getExplorersUsernamesByMission(explorers, "node");

module.exports = ExplorerService

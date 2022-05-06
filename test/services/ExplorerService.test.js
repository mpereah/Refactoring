const ExplorerService = require('../../lib/services/ExplorerService')

describe('Test para ExplorerService', () => {
    test("requerimiento 1: calcular todos los explores en una mision", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1)
    })
});

class FizzbuzzService {
    static applyValidationInExplorer(explorer){
        const explorer1 = {name: "Explorer1", score: 1}
        FizzbuzzService.applyValidationInExplorer(explorer1)

        const explorer3 = {name: "Explorer3", score: 3}
        FizzbuzzService.applyValidationInExplorer(explorer3)

        const explorer5 = {name: "Explorer5", score: 5}
        FizzbuzzService.applyValidationInExplorer(explorer5)

        const explorer15 = {name: "Explorer15", score:15}
        FizzbuzzService.applyValidationInExplorer(explorer15)
    }
}



module.exports = FizzbuzzService
var form = document.getElementById('f1')
class FormValidation {
    constructor(verifiPolicy) {
        this.straties = verifiPolicy
        this.validationFns = []
    }
    add(value, rule, errMsg) {
        let args = rule.split(':')
        this.validationFns.push(() => {
            let [ruleName, ..._args] = args
            _args.unshift(value)
            this.straties[ruleName].apply(this, _args)
        })
    }
    start() {
        for (let i = 0; i < this.validationFns.length; i++) {
            let errMsg = this.validationFns[i]()
            if (errMsg) return errMsg
        }
    }
}
const verifiPolicy = {
    valPhoneNum() {

    }
}
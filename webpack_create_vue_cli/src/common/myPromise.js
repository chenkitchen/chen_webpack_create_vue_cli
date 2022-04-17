const PENDING = 'PENDING'
const RESOLVE = 'RESOLVE'
const REJECT = 'REJECT'
console.log('my')
class PromiseA {
    constructor(executor) {
        this.value = undefined
        this.reason = undefined
        this.status = PENDING
        let resolve = (value) => {
            if (this.status === PENDING) {
                this.status = RESOLVE
                this.value = value

            }
        }
        let reject = (reason) => {
            if (this.status === PENDING) {
                this.status = REJECT
                this.reason = reason
            }
        }
        executor(resolve, reject)
    }
    then(onFulfilled, onRejected) {
        if (this.status === RESOLVE) {
            onFulfilled(this.value)
        }
        if (this.status === REJECT) {
            onRejected(this.reason)
        }
    }
}
module.exports = PromiseA


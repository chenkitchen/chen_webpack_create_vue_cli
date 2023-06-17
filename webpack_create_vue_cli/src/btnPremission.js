import store from './store'

export function hasBtnPremission(id) {
    const permission = store.state.permission
    return permission.includes(id)
}
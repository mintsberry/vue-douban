const mutations = {
  saveNavUrl (state, { navName, componentName }) {
    state.saveRoute[navName] = componentName
  }
}
export default mutations

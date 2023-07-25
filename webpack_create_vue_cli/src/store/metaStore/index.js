export default ({
    state: {
        metaInfo: {
            title: '',
            keywords: '',
            description: ''
        },
    },
    mutations: {
        SET_META_INFO(state, info) {
            // debugger
            state.metaInfo = {
                ...state.metaInfo,
                ...info, //后者与前者重复的，前者被替换
            }
        }
    }
})
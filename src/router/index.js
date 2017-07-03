import Vue from 'vue'
import Router from 'vue-router'
import Rank from 'components/rank/rank'
import Search from 'components/search/search'
import Recommend from 'components/recommend/recommend'
import Singer from 'components/singer/singer'
import singerDetail from 'components/singer-detail/singer-detail'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/recommend'
        },
        {
            path: '/rank',
            name: 'rank',
            component: Rank
        },
        {
            path: '/search',
            name: 'search',
            component: Search
        },
        {
            path: '/recommend',
            name: 'recommend',
            component: Recommend,
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/singer',
            name: 'singer',
            component: Singer,
            children: [{
                path: ':id',
                component: singerDetail
            }]
        },
    ]
})
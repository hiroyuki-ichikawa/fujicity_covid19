import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7380bbeb = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _fa94e136 = () => interopDefault(import('../pages/contacts.vue' /* webpackChunkName: "pages/contacts" */))
const _e08f5080 = () => interopDefault(import('../pages/flow.vue' /* webpackChunkName: "pages/flow" */))
const _c9472a88 = () => interopDefault(import('../pages/parent.vue' /* webpackChunkName: "pages/parent" */))
const _d9eba8e0 = () => interopDefault(import('../pages/worker.vue' /* webpackChunkName: "pages/worker" */))
const _d98ed2a0 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _c55dd53c = () => interopDefault(import('../pages/print/flow.vue' /* webpackChunkName: "pages/print/flow" */))
const _5ea80b21 = () => interopDefault(import('../pages/cards/_card.vue' /* webpackChunkName: "pages/cards/_card" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _7380bbeb,
    name: "about___ja"
  }, {
    path: "/contacts",
    component: _fa94e136,
    name: "contacts___ja"
  }, {
    path: "/flow",
    component: _e08f5080,
    name: "flow___ja"
  }, {
    path: "/parent",
    component: _c9472a88,
    name: "parent___ja"
  }, {
    path: "/worker",
    component: _d9eba8e0,
    name: "worker___ja"
  }, {
    path: "/en/",
    component: _d98ed2a0,
    name: "index___en"
  }, {
    path: "/en/about",
    component: _7380bbeb,
    name: "about___en"
  }, {
    path: "/en/contacts",
    component: _fa94e136,
    name: "contacts___en"
  }, {
    path: "/en/flow",
    component: _e08f5080,
    name: "flow___en"
  }, {
    path: "/en/parent",
    component: _c9472a88,
    name: "parent___en"
  }, {
    path: "/en/worker",
    component: _d9eba8e0,
    name: "worker___en"
  }, {
    path: "/ja-basic/",
    component: _d98ed2a0,
    name: "index___ja-basic"
  }, {
    path: "/ja-basic/about",
    component: _7380bbeb,
    name: "about___ja-basic"
  }, {
    path: "/ja-basic/contacts",
    component: _fa94e136,
    name: "contacts___ja-basic"
  }, {
    path: "/ja-basic/flow",
    component: _e08f5080,
    name: "flow___ja-basic"
  }, {
    path: "/ja-basic/parent",
    component: _c9472a88,
    name: "parent___ja-basic"
  }, {
    path: "/ja-basic/worker",
    component: _d9eba8e0,
    name: "worker___ja-basic"
  }, {
    path: "/ko/",
    component: _d98ed2a0,
    name: "index___ko"
  }, {
    path: "/ko/about",
    component: _7380bbeb,
    name: "about___ko"
  }, {
    path: "/ko/contacts",
    component: _fa94e136,
    name: "contacts___ko"
  }, {
    path: "/ko/flow",
    component: _e08f5080,
    name: "flow___ko"
  }, {
    path: "/ko/parent",
    component: _c9472a88,
    name: "parent___ko"
  }, {
    path: "/ko/worker",
    component: _d9eba8e0,
    name: "worker___ko"
  }, {
    path: "/print/flow",
    component: _c55dd53c,
    name: "print-flow___ja"
  }, {
    path: "/zh-cn/",
    component: _d98ed2a0,
    name: "index___zh-cn"
  }, {
    path: "/zh-cn/about",
    component: _7380bbeb,
    name: "about___zh-cn"
  }, {
    path: "/zh-cn/contacts",
    component: _fa94e136,
    name: "contacts___zh-cn"
  }, {
    path: "/zh-cn/flow",
    component: _e08f5080,
    name: "flow___zh-cn"
  }, {
    path: "/zh-cn/parent",
    component: _c9472a88,
    name: "parent___zh-cn"
  }, {
    path: "/zh-cn/worker",
    component: _d9eba8e0,
    name: "worker___zh-cn"
  }, {
    path: "/zh-tw/",
    component: _d98ed2a0,
    name: "index___zh-tw"
  }, {
    path: "/zh-tw/about",
    component: _7380bbeb,
    name: "about___zh-tw"
  }, {
    path: "/zh-tw/contacts",
    component: _fa94e136,
    name: "contacts___zh-tw"
  }, {
    path: "/zh-tw/flow",
    component: _e08f5080,
    name: "flow___zh-tw"
  }, {
    path: "/zh-tw/parent",
    component: _c9472a88,
    name: "parent___zh-tw"
  }, {
    path: "/zh-tw/worker",
    component: _d9eba8e0,
    name: "worker___zh-tw"
  }, {
    path: "/en/print/flow",
    component: _c55dd53c,
    name: "print-flow___en"
  }, {
    path: "/ja-basic/print/flow",
    component: _c55dd53c,
    name: "print-flow___ja-basic"
  }, {
    path: "/ko/print/flow",
    component: _c55dd53c,
    name: "print-flow___ko"
  }, {
    path: "/zh-cn/print/flow",
    component: _c55dd53c,
    name: "print-flow___zh-cn"
  }, {
    path: "/zh-tw/print/flow",
    component: _c55dd53c,
    name: "print-flow___zh-tw"
  }, {
    path: "/en/cards/:card?",
    component: _5ea80b21,
    name: "cards-card___en"
  }, {
    path: "/ja-basic/cards/:card?",
    component: _5ea80b21,
    name: "cards-card___ja-basic"
  }, {
    path: "/ko/cards/:card?",
    component: _5ea80b21,
    name: "cards-card___ko"
  }, {
    path: "/zh-cn/cards/:card?",
    component: _5ea80b21,
    name: "cards-card___zh-cn"
  }, {
    path: "/zh-tw/cards/:card?",
    component: _5ea80b21,
    name: "cards-card___zh-tw"
  }, {
    path: "/cards/:card?",
    component: _5ea80b21,
    name: "cards-card___ja"
  }, {
    path: "/",
    component: _d98ed2a0,
    name: "index___ja"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}

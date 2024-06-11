import { Router } from './router.js'

const router = new Router()
router.add("/home", "/pages/home.html")
router.add("/oUniverso", "/pages/oUniverso.html")
router.add("/home", "/pages/exploracao.html")



router.handle()
window.onpopstate = () => router.handle()
window.route = () => router.route()
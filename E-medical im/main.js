import { createApp } from 'vue'
import App from 'App.html'
import router from 'router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFontAwesome,faTwitter,faFacebook, faSnapchat, faInstagram,faMedium,faWeibo  } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

router.beforeEach((to, from, next) => {
  if(to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

library.add(faFontAwesome,faTwitter,faFacebook, faSnapchat, faInstagram,faMedium,faWeibo)

createApp(App)
.component("font-awesome-icon", FontAwesomeIcon)
.use(router)
.mount('#app')
import './assets/css/layout/reset.css'
import './assets/css/style.sass'


import { createApp } from 'vue'
import { createModal } from '@act/slime-modal'

import { InitResolve } from './types'

import App from './App.vue'
import store from './store'

import actService from '@/repository/activity'

const EXTERNAL_LINKS = {
  osLink: '#', // 官網連結
  csLink: '#', // 線上客服
  appLink: '#', // APP下載
  testLink: '#', // 測速中心
  bonusLink: '#', // 更多優惠
  epayLink: '#', // 快速存款
  /* 以上連結由後端設定，活動聲明連結請寫死於文案中，方便日後移至文字編輯器 */
  act1Link: 'https://www.db451.com/discount?40', // 簽到紅包
  act2Link: 'https://www.db451.com/discount?391', // 超六盛典
  act3Link: 'https://www.db451.com/discount?155' // 回饋彩金
}

const app = createApp(App)

actService
  .init()
  .then(({ actTitle, links, copy }: InitResolve) => {
    app
      .provide('actTitle', actTitle)
      .provide('links', {
        ...EXTERNAL_LINKS,
        ...links
      })
      .provide('copy', copy)
  })
  .catch(() => {
    app
      .provide('actTitle', '')
      .provide('links', {
        ...EXTERNAL_LINKS
      })
      .provide('copy', '')
  })
  .finally(() => {
    app.use(store).use(createModal('modal')).mount('#app')
  })

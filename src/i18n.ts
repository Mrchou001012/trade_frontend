import { createI18n } from 'vue-i18n'

// 导入语言文件
import en from './locales/en.json'
import zh from './locales/zh.json'

// 创建 Vue I18n 实例
const i18n = createI18n({
  legacy: false, // 使用 Composition API 模式
  locale: 'en', // 默认语言
  fallbackLocale: 'en', // 回退语言
  messages: {
    en,
    zh,
  },
})

export default i18n
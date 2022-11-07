
const imagePrefix = './src/images';

const data = {
  socials: [
    {
      icon: `${imagePrefix}/icons/juejin_120px.png`,
      name: '掘金',
      url: 'https://juejin.cn/user/4459274890649335',
    },
    {
      icon: `${imagePrefix}/icons/jianshu_120px.png`,
      name: '简书',
      url: 'https://www.jianshu.com/u/e4f1dd2be43a',
    },
  ],
  books: [
    {
      logo: '✨',
      name: '《Vue.js 3脚手架搭建》',
      desc: '从0到1搭建企业级vue3脚手架',
      url: 'https://github.com/haibin-007/vue3-scaffolding-tutorial',
      cover: `${imagePrefix}/books/vue3-scaffolding.png`,
      badges: [
        'https://img.shields.io/github/stars/haibin-007/vue3-scaffolding-tutorial?style=flat-square',
        'https://img.shields.io/github/forks/haibin-007/vue3-scaffolding-tutorial?style=flat-square',
      ]
    }
  ]
}

module.exports = data;

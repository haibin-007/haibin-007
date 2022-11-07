const badges = {
  HTML: 'https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white',
  JavaScript: 'https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black',
  CSS: 'https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white',
  Scss: 'https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=sass&logoColor=white',
  NodeJS: 'https://img.shields.io/badge/Node.js-43853D?style=flat-square&logo=node.js&logoColor=white',
  React: 'https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB',
  Vue: 'https://img.shields.io/badge/Vue.js-35495E?style=flat-square&logo=vue.js&logoColor=4FC08',
  TypeScript: 'https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white',
  Redux: 'https://img.shields.io/badge/Redux-593D88?style=flat-square&logo=redux&logoColor=white',
  MadeForVsCode: 'https://img.shields.io/badge/Made%20for-VSCode-1f425f.svg?style=flat-square',
  StyledComponents: 'https://img.shields.io/badge/styled--components-DB7093?style=flat-square&logo=styled-components&logoColor=white',
  ReactRouter: 'https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=react-router&logoColor=white',
  NestJS: 'https://img.shields.io/badge/-NestJs-ea2845?style=flat-square&logo=nestjs&logoColor=white',
}

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

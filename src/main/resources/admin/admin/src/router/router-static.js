import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import xuesheng from '@/views/modules/xuesheng/list'
    import xiangmupingshen from '@/views/modules/xiangmupingshen/list'
    import xiangmushenbao from '@/views/modules/xiangmushenbao/list'
    import youxiuxiangmu from '@/views/modules/youxiuxiangmu/list'
    import xiangmuzhongjian from '@/views/modules/xiangmuzhongjian/list'
    import xiangmuleixing from '@/views/modules/xiangmuleixing/list'
    import pingshenfangan from '@/views/modules/pingshenfangan/list'
    import xiangmujiexiang from '@/views/modules/xiangmujiexiang/list'
    import zhuanjiapingshen from '@/views/modules/zhuanjiapingshen/list'
    import zhidaolaoshi from '@/views/modules/zhidaolaoshi/list'
    import yuanxiguanliyuan from '@/views/modules/yuanxiguanliyuan/list'
    import config from '@/views/modules/config/list'
    import xiangmuxinxi from '@/views/modules/xiangmuxinxi/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '大创资讯',
        component: news
      }
      ,{
	path: '/xuesheng',
        name: '学生',
        component: xuesheng
      }
      ,{
	path: '/xiangmupingshen',
        name: '项目评审',
        component: xiangmupingshen
      }
      ,{
	path: '/xiangmushenbao',
        name: '项目申报',
        component: xiangmushenbao
      }
      ,{
	path: '/youxiuxiangmu',
        name: '优秀项目',
        component: youxiuxiangmu
      }
      ,{
	path: '/xiangmuzhongjian',
        name: '项目中检',
        component: xiangmuzhongjian
      }
      ,{
	path: '/xiangmuleixing',
        name: '项目类型',
        component: xiangmuleixing
      }
      ,{
	path: '/pingshenfangan',
        name: '评审方案',
        component: pingshenfangan
      }
      ,{
	path: '/xiangmujiexiang',
        name: '项目结项',
        component: xiangmujiexiang
      }
      ,{
	path: '/zhuanjiapingshen',
        name: '专家评审',
        component: zhuanjiapingshen
      }
      ,{
	path: '/zhidaolaoshi',
        name: '指导老师',
        component: zhidaolaoshi
      }
      ,{
	path: '/yuanxiguanliyuan',
        name: '院系管理员',
        component: yuanxiguanliyuan
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/xiangmuxinxi',
        name: '项目信息',
        component: xiangmuxinxi
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;

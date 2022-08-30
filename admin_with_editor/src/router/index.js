import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import AdminUserEdit from '../views/AdminUserEdit.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
    meta: {
      isPublic: true
    }
  },
  {
    path: '/',
    name: 'mian',
    component: Main,
    children: [
      {
        path: '/admin_users/create',
        component: AdminUserEdit
      },
      {
        path: '/admin_users/edit/:id',
        component: AdminUserEdit,
        // 这个参数的意思是把比如edit/:id这些参数直接注入到UserEdit页面里面,这样在那个页面就可以使用
        props: true
      },
      {
        path: '/admin_users/list',
        component: () => import('../views/AdminUserList.vue')
      },

      {
        path: '/users/create',
        component: () => import('../views/UserEdit.vue')
      },
      {
        path: '/users/edit/:id',
        component: () => import('../views/UserEdit.vue'),
        props: true
      },
      {
        path: '/users/list',
        component: () => import('../views/UserList.vue')
      },

      {
        path: '/coaches/create',
        component: () => import('../views/CoachEdit.vue')
      },
      {
        path: '/coaches/edit/:id',
        component: () => import('../views/CoachEdit.vue'),
        props: true
      },
      {
        path: '/coaches/list',
        component: () => import('../views/CoachList.vue')
      },

      {
        path: '/equipment/create',
        component: () => import('../views/EquipmentEdit.vue')
      },
      {
        path: '/equipment/edit/:id',
        component: () => import('../views/EquipmentEdit.vue'),
        props: true
      },
      {
        path: '/equipment/list',
        component: () => import('../views/EquipmentList.vue')
      },
      {
        path: '/orders1/list',
        component: () => import('../views/OrderList.vue'),
        props: true
      },
      {
        path: '/courses/create',
        component: () => import('../views/CourseEdit.vue')
      },
      {
        path: '/courses/edit/:id',
        component: () => import('../views/CourseEdit.vue'),
        props: true
      },
      {
        path: '/courses/list',
        component: () => import('../views/CourseList.vue')
      },
      {
        path: '/subscribe1/list',
        component: () => import('../views/SubscribeList.vue')
      },
      {
        path: '/profile',
        component: () => import('../views/Profile.vue')
      }
    ]
  },

  // 普通用户路由
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/editor/Home.vue'),
    children: [
      {
        path: '/dashboards',
        component: () => import('../views/editor/Dashboard.vue')
      },
      {
        path: '/kits/list',
        component: () => import('../views/editor/KitList.vue'),
        props: true
      },
      {
        path: '/orders/list',
        component: () => import('../views/editor/OrderList.vue'),
        props: true
      },
      {
        path: '/curriculums/list',
        component: () => import('../views/editor/CurriculumList.vue')
      },
      {
        path: '/subscribe/list',
        component: () => import('../views/editor/SubscribeList.vue')
      },
      {
        path: '/archives',
        component: () => import('../views/editor/Archives.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (!to.meta.isPublic && !sessionStorage.token) {
    return next('/login')
  }
  next()
})

export default router

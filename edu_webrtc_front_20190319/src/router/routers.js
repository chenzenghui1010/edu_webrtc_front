export default [
  {
    path: '/',
    component: () => import('@/views/login')
  },

  // {
  //   path: '/',
  //   component:()=>import('@/components/teacher/SignUpDetails')
  // },
  // {
  //   path: '/CourseDetails',
  //   component:()=>import('@/components/teacher/CourseDetails')
  // },
  {
    path: '/AdminHome',
    component: () => import('@/views/admin/AdminHome'),
  },
  {
    path: '/StudentHome',
    component: () => import('@/views/student/StudentHome'),
    redirect: '/StudentHome/auth',
    children: [

      {
        path: 'auth',
        name: '班级批量选课',
        component: () => import('@/components/teacher/courseSystem/sclassSelect/SelectIndex'),
      },
      {
        path: 'role',
        name: '选课管理',
        component: () => import('@/components/teacher/courseSystem/courseManagement/SelectCourse'),
      },
    ]
  },

  //选课系统
  {
    path: '/StudentHome/AddCourse',
    name: 'AddCourse',
    component: () => import('@/components/teacher/courseSystem/courseManagement/AddCourse')
  },
  {
    path: '/StudentHome/ImportCourse',
    name: 'ImportCourse',
    component: () => import('@/components/teacher/courseSystem/courseManagement/ImportCourse')
  },
  {
    path: '/StudentHome/ExportCourse',
    name: 'ExportCourse',
    component: () => import('@/components/teacher/courseSystem/courseManagement/ExportCourse')
  },


  {
    path: '*',
    name: 'error_404',
    component: () => import('@/views/error_404')
  },

]

export const data1 = {
  "list": [
    {
      "entity": {
        "id": 1,
        "parentMenuId": 0,
        "name": "systemManage",
        // "icon": "el-icon-message\r\n",
        // "icon":"el-icon-circle-plus-outline",
        "alias": "选课系统",
        "state": "ENABLE",
        "sort": 0,
        "value": null,
        "type": "NONE",
        "discription": "用于系统管理的菜单",
        "createUserId": 1
      },
      "childs": [
        {
          "entity": {
            "id": 1,
            "parentMenuId": 1,
            "name": "authManage",
            // "icon": "el-icon-loading",
            "alias": "班级批量选课",
            "state": "ENABLE",
            "sort": 0,
            "value": "/StudentHome/auth",
            "type": "LINK",
            "discription": "用于权限管理的菜单",
            "createUserId": 1
          },
          "childs": null
        },
        {
          "entity": {
            "id": 2,
            "parentMenuId": 1,
            "name": "roleManage",
            // "icon": "el-icon-bell",
            "alias": "选课管理",
            "state": "ENABLE",
            "sort": 1,
            "value": "/StudentHome/role",
            "type": "LINK",
            "discription": "用于角色管理的菜单",
            "createUserId": 1
          },
          "childs": null
        },
        {
          "entity": {
            "id": 3,
            "parentMenuId": 1,
            "name": "menuManage",
            // "icon": "el-icon-edit",
            "alias": "开课管理",
            "state": "ENABLE",
            "sort": 2,
            "value": "/system/menu",
            "type": "LINK",
            "discription": "用于菜单管理的菜单",
            "createUserId": 1
          },
          "childs": null
        },
        {
          "entity": {
            "id": 4,
            "parentMenuId": 1,
            "name": "menuManage",
            // "icon": "el-icon-edit",
            "alias": "选课管理",
            "state": "ENABLE",
            "sort": 2,
            "value": "/system/menu",
            "type": "LINK",
            "discription": "用于菜单管理的菜单",
            "createUserId": 1
          },
          "childs": null
        },
        {
          "entity": {
            "id": 5,
            "parentMenuId": 1,
            "name": "menuManage",
            // "icon": "el-icon-edit",
            "alias": "学分管理",
            "state": "ENABLE",
            "sort": 2,
            "value": "/system/menu",
            "type": "LINK",
            "discription": "用于菜单管理的菜单",
            "createUserId": 1
          },
          "childs": null
        },
      ]
    },
    {
      "entity": {
        "id": 2,
        "parentMenuId": 0,
        "name": "userManage",
        // "icon": "el-icon-news",
        "alias": "在线直播系统",
        // "icon":"el-icon-circle-plus-outline",
        "state": "ENABLE",
        "sort": 1,
        "value": null,
        "type": "NONE",
        "discription": "用于用户管理的菜单",
        "createUserId": 1
      },
      "childs": [
        {
          "entity": {
            "id": 7,
            "parentMenuId": 6,
            "name": "accountManage",
            // "icon": "el-icon-phone-outline\r\n",
            "alias": "帐号管理",
            "state": "ENABLE",
            "sort": 0,
            "value": "",
            "type": "NONE",
            "discription": "用于帐号管理的菜单",
            "createUserId": 1
          },
          // "childs": [
          //   {
          //     "entity": {
          //       "id": 14,
          //       "parentMenuId": 7,
          //       "name": "emailManage",
          //       "icon": "el-icon-sold-out\r\n",
          //       "alias": "邮箱管理",
          //       "state": "ENABLE",
          //       "sort": 0,
          //       "value": "/content/email",
          //       "type": "LINK",
          //       "discription": "用于邮箱管理的菜单",
          //       "createUserId": 1
          //     },
          //     "childs": null
          //   },
          //   {
          //     "entity": {
          //       "id": 13,
          //       "parentMenuId": 7,
          //       "name": "passManage",
          //       "icon": "el-icon-service\r\n",
          //       "alias": "密码管理",
          //       "state": "ENABLE",
          //       "sort": 1,
          //       "value": "/content/pass",
          //       "type": "LINK",
          //       "discription": "用于密码管理的菜单",
          //       "createUserId": 1
          //     },
          //     "childs": null
          //   }
          // ]
        },
        {
          "entity": {
            "id": 8,
            "parentMenuId": 6,
            "name": "integralManage",
            // "icon": "el-icon-picture",
            "alias": "积分管理",
            "state": "ENABLE",
            "sort": 1,
            "value": "/user/integral",
            "type": "LINK",
            "discription": "用于积分管理的菜单",
            "createUserId": 1
          },
          "childs": null
        }
      ]
    }
  ]
}
export const tableData = {
  'tableData': [{
    signUpNum: 12,
    time: '星期三第二节',
    date: '2018-10-28',
    credit: 2,
    clickNum: 5,
    openType: '已开班',
    numbering: '1',
    teacherName: '教师名',
    name: '动漫设',
    address: '上海市',
    subjectType: '学科名',
    lesson: 10,
    max: 60,
    min: 5,
    n: '详情'
  },
    {
      openType: '已开班',
      clickNum: 5,
      credit: 2,
      signUpNum: 12,
      time: '星期三第二节',
      date: '2018-10-28',
      max: 60, min: 5,
      numbering: '2',
      teacherName: '教师名',
      name: '外语设',
      subjectType: '学科名',
      address: '上海市',
      lesson: 10,
      n: '详情'
    },
    {
      openType: '已开班',
      clickNum: 5,
      credit: 2,
      signUpNum: 12,
      time: '星期三第二节',
      date: '2018-10-28',
      max: 60, min: 5,
      numbering: '3',
      name: '电影设',
      teacherName: '教师名',
      address: '上海市',
      lesson: 10,
      subjectType: '学科名',
      n: '详情'
    },
    {
      openType: '已开班',
      clickNum: 5,
      credit: 2,
      signUpNum: 12,
      time: '星期三第二节',
      date: '2018-10-28',
      max: 60, min: 5,
      numbering: '4',
      teacherName: '教师名',
      name: '数学俱乐部',
      lesson: 10, subjectType: '学科名',
      address: '上海市',
      subjectType: '学科名',
      n: '详情'
    },
    {
      openType: '已开班',
      clickNum: 5,
      credit: 2,
      signUpNum: 12,
      time: '星期三第二节',
      date: '2018-10-28',
      max: 60, min: 5,
      numbering: '5',
      name: '日语爱好',
      teacherName: '教师名',
      lesson: 10,
      address: '上海市',
      subjectType: '学科名',
      n: '详情'
    },
    {
      openType: '已开班', clickNum: 5, credit: 2, signUpNum: 12, time: '星期三第二节', date: '2018-10-28',
      max: 60, min: 5,
      numbering: '6',
      subjectType: '学科名',
      name: '环保社',
      teacherName: '教师名',
      lesson: 10,
      address: '上海市',
      n: '详情'
    }]
}

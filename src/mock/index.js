import Mock from 'mockjs'

const loginData = function() {
  let data = {
    code: 200,
    msg:'请求成功',
    token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJpZCI6MSwiaWF0IjoxNjMzNzU3MzY5LCJleHAiOjE2MzM3NzE3Njl9.Wglrea-mWxkdGrVInrfTBcCPlQFAjatgoCVhhkMNBQg'
  }
  return data
}


const getRoutes = function(){
  let routeList = [
    {
      id: 2,
      path:'/home',
      url:'/',
      icon:'fa fa-address-card-o',
      name:'员工资料',
      component: 'home',
      children:[
        {
          id: 7,
          path:'/emp/basic',
          url:'/employee/basic',
          name:'基本资料',
          component: 'EmpBasic'
        },
        {
          id: 8,
          path:'/emp/adv',
          url:'/employee/adv',
          name:'高级资料',
          component: 'EmpAdv'
        }
      ]
    },
    {
      id: 3,
      path:'/home',
      url:'/',
      icon:'fa fa-microchip',
      name:'员工管理',
      component: 'home',
      children:[
        {
          id: 9,
          path:'/pre/ec',
          url:'/pre/ec',
          name:'员工奖惩',
          component: 'PreEc'
        },
        {
          id: 10,
          path:'/pre/emp',
          url:'/pre/emp',
          name:'员工的资料',
          component: 'PreEmp'
        },
        {
          id: 11,
          path:'/pre/mv',
          url:'/pre/mv',
          name:'员工调动',
          component: 'PreMv'
        },
        {
          id: 12,
          path:'/pre/salary',
          url:'/pre/salary',
          name:'员工工资',
          component: 'PreSalary'
        },
        {
          id: 13,
          path:'/pre/train',
          url:'/pre/train',
          name:'员工培训',
          component: 'PreTrain'
        }
      ]
    },
    {
      id: 4,
      path:'/home',
      url:'/',
      icon:'fa fa-money',
      name:'工资管理',
      component: 'home',
      children:[
        {
          id: 14,
          path:'/sal/month',
          url:'/sal/month',
          name:'月末处理',
          component: 'SalMonth'
        },
        {
          id: 15,
          path:'/sal/search',
          url:'/sal/search',
          name:'工资查询',
          component: 'SalSearch'
        },
        {
          id: 16,
          path:'/sal/sobcfg',
          url:'/sal/sobcfg',
          name:'员工账套设置',
          component: 'SalSobCfg'
        },
        {
          id: 17,
          path:'/sal/sob',
          url:'/sal/sob',
          name:'工资账套管理',
          component: 'SalSob'
        },
        {
          id: 18,
          path:'/sal/table',
          url:'/sal/table',
          name:'员工工资表',
          component: 'SalTable'
        }
      ]
    },
    {
      id: 5,
      path:'/home',
      url:'/',
      icon:'fa fa-map',
      name:'综合管理',
      component: 'home',
      children:[
        {
          id: 19,
          path:'/sta/all',
          url:'/sta/all',
          name:'综合信息',
          component: 'StaAll'
        },
        {
          id: 20,
          path:'/sta/pers',
          url:'/sta/pers',
          name:'人事信息统计',
          component: 'StaPers'
        },
        {
          id: 21,
          path:'/sta/record',
          url:'/sta/record',
          name:'人事记录统计',
          component: 'StaRecord'
        },
        {
          id: 22,
          path:'/sta/score',
          url:'/sta/score',
          name:'员工积分查询',
          component: 'StaScore'
        }
      ]
    },
    {
      id: 6,
      path:'/home',
      url:'/',
      icon:'fa fa-desktop',
      name:'系统管理',
      component: 'home',
      children:[
        {
          id: 23,
          path:'/sys/admin',
          url:'/sys/admin',
          name:'操作员管理',
          component: 'SysAdmin'
        },
        {
          id: 24,
          path:'/sys/basic',
          url:'/sys/basic',
          name:'系统基本设置',
          component: 'SysBasic'
        },
        {
          id: 25,
          path:'/sys/data',
          url:'/sys/data',
          name:'备份恢复数据',
          component: 'SysData'
        },
        {
          id: 26,
          path:'/sys/int',
          url:'/sys/int',
          name:'初始化数据库',
          component: 'SysInt'
        },
        {
          id: 27,
          path:'/sys/log',
          url:'/sys/log',
          name:'系统日志',
          component: 'SysLog'
        }
      ]
    },
  ]
  return routeList
}

Mock.mock('/api/login','post',loginData)
Mock.mock('/api/getRoutes','get',getRoutes)

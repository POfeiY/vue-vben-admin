import type { AppRouteModule } from '/@/router/types';

import { PAGE_LAYOUT_COMPONENT } from '/@/router/constant';
import { ExceptionEnum } from '/@/enums/exceptionEnum';

const ExceptionPage = () => import('/@/views/sys/exception/Exception');

export default {
  layout: {
    path: '/exception',
    name: 'ExceptionPage',
    component: PAGE_LAYOUT_COMPONENT,
    redirect: '/exception/404',
    meta: {
      icon: 'ant-design:exception-outlined',
      title: '异常页',
    },
  },

  routes: [
    {
      path: '/403',
      name: 'PageNotAccess',
      component: ExceptionPage,
      props: {
        status: ExceptionEnum.PAGE_NOT_ACCESS,
      },
      meta: {
        title: '403',
        afterCloseLoading: true,
      },
    },
    {
      path: '/404',
      name: 'PageNotFound',
      component: ExceptionPage,
      props: {
        status: ExceptionEnum.PAGE_NOT_FOUND,
      },
      meta: {
        title: '404',
        afterCloseLoading: true,
      },
    },
    {
      path: '/500',
      name: 'ServiceError',
      component: ExceptionPage,
      props: {
        status: ExceptionEnum.ERROR,
      },
      meta: {
        title: '500',
        afterCloseLoading: true,
      },
    },
    {
      path: '/net-work-error',
      name: 'NetWorkError',
      component: ExceptionPage,
      props: {
        status: ExceptionEnum.NET_WORK_ERROR,
      },
      meta: {
        title: '网络错误',
        afterCloseLoading: true,
      },
    },
    {
      path: '/not-data',
      name: 'NotData',
      component: ExceptionPage,
      props: {
        status: ExceptionEnum.PAGE_NOT_DATA,
      },
      meta: {
        title: '无数据',
        afterCloseLoading: true,
      },
    },
  ],
} as AppRouteModule;

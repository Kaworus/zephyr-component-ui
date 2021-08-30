import type { RunTimeLayoutConfig } from 'umi';
import RightContent from '@/components/RightContent';
import Footer from '@/components/Footer';

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
// export async function getInitialState(): Promise<{
//   settings?: Partial<LayoutSettings>;
//   currentUser?: API.CurrentUser;
//   fetchUserInfo?: () => Promise<API.CurrentUser | undefined>;
// }> {
//   const fetchUserInfo = async () => {
//     try {
//       const msg = await queryCurrentUser();
//       return msg.data;
//     } catch (error) {
//       history.push(loginPath);
//     }
//     return undefined;
//   };
//   // 如果是登录页面，不执行
//   if (history.location.pathname !== loginPath) {
//     const currentUser = await fetchUserInfo();
//     return {
//       fetchUserInfo,
//       currentUser,
//       settings: {},
//     };
//   }
//   return {
//     fetchUserInfo,
//     settings: {},
//   };
// }

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = () => {
  return {
    rightContentRender: () => <RightContent />,
    disableContentMargin: false,
    footerRender: () => <Footer />,
    links: []
    // 自定义 403 页面
    // unAccessible: <div>unAccessible</div>,
  };
};

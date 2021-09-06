import { Settings as LayoutSettings } from '@ant-design/pro-layout';
const { UMI_ENV } = process.env;

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#d6230c',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: true,
  fixSiderbar: true,
  colorWeak: false,
  title: '和风议会',
  pwa: false,
  logo: UMI_ENV === 'dev' ? '/logo.png' : '/zephyr-component-ui/logo.png',
  iconfontUrl: '',
  splitMenus: true,
};

export default Settings;

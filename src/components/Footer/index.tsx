import { DefaultFooter } from '@ant-design/pro-layout';
import { useLocation } from 'react-router';

export default () => {
  const currentYear = new Date().getFullYear();
  const location: string = useLocation().pathname;
  return location !== '/home' ? (
    <DefaultFooter
      copyright={`${currentYear} 和风议会  渝ICP备20001576号-1`}
      links={[
        {
          key: '发现和分享，你在泰瑞亚的一切。',
          title: '发现和分享，你在泰瑞亚的一切。',
          href: '',
        },
      ]}
    />
  ) : null;
};

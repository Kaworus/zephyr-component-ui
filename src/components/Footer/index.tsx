// import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';

export default () => {

  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      copyright={`${currentYear} 和风议会  渝ICP备20001576号-1`}
      links={[
        {
          key: '发现和分享，你在泰瑞亚的一切。',
          title: '发现和分享，你在泰瑞亚的一切。',
          href: '',
        },
        // {
        //   key: 'github',
        //   title: <GithubOutlined />,
        //   href: 'https://github.com/ant-design/ant-design-pro',
        //   blankTarget: true,
        // },
        // {
        //   key: 'Ant Design',
        //   title: 'Ant Design',
        //   href: 'https://ant.design',
        //   blankTarget: true,
        // },
      ]}
    />
  );
};

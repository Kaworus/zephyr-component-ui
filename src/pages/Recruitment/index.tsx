import { useState } from 'react';
import { List, Card, Avatar, Modal, Form, Input, message } from 'antd';
import { PlusCircleOutlined, UserAddOutlined, DeleteOutlined } from '@ant-design/icons';
import uuid from 'react-uuid';

const { Meta } = Card;

interface one {
  id: string;
  title: string;
  author: string;
  description: string;
}
const Recruitment = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [data, setData] = useState<one[]>([]);
  const [form] = Form.useForm();

  const onFinish = () => {};
  const submit = () => {
    form.validateFields().then((values: one) => {
      setData((e) => {
        return [...e, { ...values, id: uuid() }];
      });
      setIsModalVisible(false);
      form.resetFields();
    });
  };
  const deleteData = (key) => {
    setData((e) => {
      const index = e.findIndex((item) => {
        return item.id === key;
      });
      e.splice(index, 1);
      return [...e];
    });
  };
  const join = async (text) => {
    await navigator.clipboard.writeText(`/加入团队 ${text}`);
    message.success('复制成功');
  };
  const handleCancel = () => {
    form.resetFields();
    setIsModalVisible(false);
  };
  return (
    <div>
      <div style={{ textAlign: 'end', marginBottom: 12 }}>
        <PlusCircleOutlined
          style={{ fontSize: 24, cursor: 'pointer' }}
          onClick={() => setIsModalVisible(true)}
        />
      </div>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 6,
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Card
              actions={[
                <span onClick={() => join(item.author)}>
                  <UserAddOutlined />
                  加入
                </span>,
                <span onClick={() => deleteData(item.id)}>
                  <DeleteOutlined />
                  删除
                </span>,
              ]}
            >
              <Meta
                avatar={
                  <Avatar style={{ background: '#d6230c' }}>{item.author.split('')[0]}</Avatar>
                }
                title={item.title}
                description={
                  <div
                    style={{
                      height: 22,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      width: '100%',
                    }}
                  >
                    {item.description}
                  </div>
                }
              />
            </Card>
          </List.Item>
        )}
      />
      <Modal title="团队招募" visible={isModalVisible} onCancel={handleCancel} onOk={submit}>
        <Form
          name="basic"
          form={form}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          initialValues={{ remember: true }}
          autoComplete="off"
          onFinish={onFinish}
        >
          <Form.Item
            label="招募标题"
            name="title"
            rules={[{ required: true, message: '招募标题不能为空' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="团队描述"
            name="description"
            rules={[{ required: true, message: '团队描述不能为空' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="发起人"
            name="author"
            rules={[{ required: true, message: '发起人不能为空' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Recruitment;

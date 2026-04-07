import React, { useMemo, useState } from 'react';
import { Typography, Space, Button, Input, Radio, Select, Switch, Tag, Steps, Tabs, Dropdown, Card, Form, Table, Toast } from '@douyinfe/semi-ui';
import { IconChevronDown } from '@douyinfe/semi-icons';

const { Title, Text } = Typography;

const MENU = [
  'Button','Input','Radio','Select','Switch','Tag','Steps','Tabs','Dropdown','Card','Form','Table','Feedback'
];

function DemoButton() {
  return (
    <Space vertical align="start" spacing="loose">
      <Space>
        <Button type="primary">主要操作</Button>
        <Button>次要操作</Button>
        <Button type="tertiary">浅色按钮</Button>
        <Button theme="borderless">文本按钮</Button>
      </Space>
      <Space>
        <Button size="large" type="primary">Large</Button>
        <Button size="default" type="primary">Default</Button>
        <Button size="small" type="primary">Small</Button>
      </Space>
    </Space>
  );
}

function DemoInput() {
  return (
    <Space vertical align="start" spacing="loose">
      <Input placeholder="请输入..." />
      <Input prefix="¥" placeholder="带前缀" />
      <Input suffix=".com" placeholder="带后缀" />
    </Space>
  );
}

function DemoRadio() {
  return (
    <Radio.Group type="button" defaultValue="b">
      <Radio value="a">A</Radio>
      <Radio value="b">B</Radio>
      <Radio value="c">C</Radio>
    </Radio.Group>
  );
}

function DemoSelect() {
  return (
    <Select style={{ width: 220 }} placeholder="选择一个选项" optionList={[
      { label: 'Option A', value: 'a' },
      { label: 'Option B', value: 'b' },
      { label: 'Option C', value: 'c' },
    ]} />
  );
}

function DemoSwitch() {
  return <Switch defaultChecked />;
}

function DemoTag() {
  return (
    <Space>
      <Tag color="purple">Purple</Tag>
      <Tag color="indigo">Indigo</Tag>
      <Tag type="light">Light</Tag>
      <Tag type="ghost">Ghost</Tag>
    </Space>
  );
}

function DemoSteps() {
  return (
    <Steps current={1} style={{ maxWidth: 600 }}>
      <Steps.Step title="创建" />
      <Steps.Step title="配置" />
      <Steps.Step title="完成" />
    </Steps>
  );
}

function DemoTabs() {
  return (
    <Tabs type="line" defaultActiveKey="1" style={{ width: 420 }}>
      <Tabs.TabPane itemKey="1" tab="Tab 1">内容一</Tabs.TabPane>
      <Tabs.TabPane itemKey="2" tab="Tab 2">内容二</Tabs.TabPane>
      <Tabs.TabPane itemKey="3" tab="Tab 3">内容三</Tabs.TabPane>
    </Tabs>
  );
}

function DemoDropdown() {
  const menu = [
    { node: 'item', name: '复制' },
    { node: 'item', name: '粘贴' },
    { node: 'item', name: '删除' },
  ];
  return (
    <Dropdown menu={menu}>
      <Button>操作 <IconChevronDown /></Button>
    </Dropdown>
  );
}

function DemoCard() {
  return (
    <Card style={{ width: 420 }} title="卡片标题" headerLine>
      这是一张卡片的内容示例。
    </Card>
  );
}

function DemoForm() {
  return (
    <Form style={{ width: 360 }} onSubmit={() => Toast.success({ content: '提交成功' })}>
      <Form.Input field="name" label="姓名" placeholder="请输入姓名" />
      <Form.Select field="city" label="城市" optionList={[
        { label: '北京', value: 'bj' },
        { label: '上海', value: 'sh' },
      ]} />
      <Form.Switch field="agree" label="同意协议" />
      <Button htmlType="submit" type="primary">提交</Button>
    </Form>
  );
}

function DemoTable() {
  const columns = [
    { dataIndex: 'name', title: '姓名' },
    { dataIndex: 'age', title: '年龄' },
    { dataIndex: 'city', title: '城市' }
  ];
  const data = [
    { key: 1, name: 'Alice', age: 24, city: '北京' },
    { key: 2, name: 'Bob', age: 28, city: '上海' },
    { key: 3, name: 'Cindy', age: 26, city: '深圳' },
  ];
  return <Table columns={columns} dataSource={data} pagination={false} style={{ width: 540 }} />;
}

function DemoFeedback() {
  return (
    <Space>
      <Button onClick={() => Toast.success({ content: '操作成功' })} type="primary">成功提示</Button>
      <Button onClick={() => Toast.error({ content: '发生错误' })}>错误提示</Button>
      <Button onClick={() => Toast.info({ content: '普通信息' })} type="tertiary">信息提示</Button>
    </Space>
  );
}

const DEMO_MAP = {
  Button: <DemoButton />,
  Input: <DemoInput />,
  Radio: <DemoRadio />,
  Select: <DemoSelect />,
  Switch: <DemoSwitch />,
  Tag: <DemoTag />,
  Steps: <DemoSteps />,
  Tabs: <DemoTabs />,
  Dropdown: <DemoDropdown />,
  Card: <DemoCard />,
  Form: <DemoForm />,
  Table: <DemoTable />,
  Feedback: <DemoFeedback />
};

export default function App() {
  const [active, setActive] = useState('Button');
  const demo = useMemo(() => DEMO_MAP[active], [active]);

  return (
    <div className="app">
      <aside className="sidebar">
        <Title heading={4} style={{ marginBottom: 16 }}>Semi 组件导航</Title>
        <Text type="tertiary">点击左侧组件名称，右侧查看对应的展示效果。</Text>
        <div style={{ height: 12 }} />
        {MENU.map(k => (
          <button
            key={k}
            className={`menuItem ${active === k ? 'active' : ''}`}
            onClick={() => setActive(k)}
          >
            {k}
          </button>
        ))}
      </aside>
      <main className="content">
        <div className="panel">
          <div className="panelHeader">
            <Title heading={3} style={{ margin: 0 }}>{active} {active !== 'Button' ? '' : '按钮'}</Title>
            <Text type="tertiary">适合用于页面主操作、次级操作和轻量反馈。</Text>
          </div>
          <div className="demoBox">
            {demo}
          </div>
        </div>
      </main>
    </div>
  );
}


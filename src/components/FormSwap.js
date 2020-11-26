import React from 'react'
import { Button, Col, Form, Input, Menu, Row, Dropdown } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
export default function FormSwap(props) {
    const FormItem = Form.Item;
    // const { getFieldDecorator } = props.form;
    let handleSubmit = () => {

    }
    let handleMenuClick = () => { }

    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="1" icon={<UserOutlined />}>
                1st menu item
          </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
                2nd menu item
          </Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined />}>
                3rd menu item
          </Menu.Item>
        </Menu>
    );

    return (
        <div className='form-swap'>
            <div className='form-swap__title'>Swap</div>
            <Form onSubmit={handleSubmit} layout={'vertical'}>
                <FormItem label="Bán">
                    <Input
                        type="number"
                    />

                </FormItem>
                <div className='buy-box'>

                    <FormItem label="Mua" style={{ flexGrow: 1, marginRight: 5 }}>

                        <Input
                            type="number"

                        />



                    </FormItem>
                    <FormItem label=" " >

                        <Dropdown overlay={menu}>
                            <Button>
                                Button <DownOutlined />
                            </Button>
                        </Dropdown>
                    </FormItem>

                </div>
                <small>
                    Giá và số tiền sau cùng được xác định bởi số lượng token có trong pool tại thời điểm swap của bạn.
                </small>
                <Button className='btn-submit'>Đăng nhập vào Swap</Button>
            </Form>
        </div>
    )
}
// export default Form.create({ name: 'FormSwap' })(FormSwap);
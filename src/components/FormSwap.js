import React from 'react'
import { Button, Col, Form, Input, notification, Row } from 'antd';
export default function FormSwap(props) {
    const FormItem = Form.Item;
    // const { getFieldDecorator } = props.form;
    let handleSubmit = () => {

    }
    return (
        <div className='form-swap'>
            <div className='form-swap__title'>Swap</div>
            <Form onSubmit={handleSubmit} layout={'vertical'}>
                <FormItem label="Bán">
                    <Input
                        type="number"
                    />

                </FormItem>
                <FormItem label="Mua">

                    <Input
                        type="number"

                    />

                    <small>
                        Giá và số tiền sau cùng được xác định bởi số lượng token có trong pool tại thời điểm swap của bạn.
                </small>
                    <Button>Đăng nhập vào Swap</Button>

                </FormItem>
            </Form>
        </div>
    )
}
// export default Form.create({ name: 'FormSwap' })(FormSwap);
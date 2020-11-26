import React, { useState } from "react";
import { Button, InputNumber, Form, Input, Select } from "antd";
import { SwapOutlined } from "@ant-design/icons";
export default function FormSwap(props) {
  // const { getFieldDecorator } = props.form;
  let handleSubmit = () => {};
  const [value, setValue] = useState({
    buyValue: "MCASH",
    sellValue: "BTC",
  });

  const { Option } = Select;

  return (
    <div className="form-swap">
      <div className="form-swap__title">Swap</div>
      <Form onSubmit={handleSubmit} layout={"vertical"}>
        <div className="group-item">
          <label>Mua</label>
          <Input.Group>
            <Input type="number" />
            <Select value={value.buyValue}>
              <Option value="MCASH">MCASH</Option>
              <Option value="BTC">BTC</Option>
            </Select>
          </Input.Group>
        </div>
        <div className="text-center">
          <span
            className="swap-icon"
            onClick={() => {
              let { buyValue, sellValue } = value;
              [buyValue, sellValue] = [sellValue, buyValue];
              setValue({
                buyValue,
                sellValue,
              });
            }}
          >
            <SwapOutlined rotate={90} />
          </span>
        </div>
        <div className="group-item">
          <label>Ban</label>
          <Input.Group>
            <Input type="number" />
            <Select value={value.sellValue}>
              <Option value="MCASH">MCASH</Option>
              <Option value="BTC">BTC</Option>
            </Select>
          </Input.Group>
        </div>
        <small>
          Giá và số tiền sau cùng được xác định bởi số lượng token có trong pool
          tại thời điểm swap của bạn.
        </small>
        <Button className="btn-submit">Đăng nhập vào Swap</Button>
      </Form>
    </div>
  );
}
// export default Form.create({ name: 'FormSwap' })(FormSwap);

import React from "react";
import { Form, Input } from "antd";
import { ValidationRules } from "../../Constants/validationRules";

function FormTextInput({
    name = "",
    label = "",
    placeholder = "",
    rules,
    required = true,
    onlyNumber = false,
    ...rest
}
) {
    return (
        <Form.Item label={label} name={name}
            
            rules={[
                required && ValidationRules(name).RequiredRule,
                onlyNumber && ValidationRules().onlyNumber,
            ]}
        >
            <Input
                className={"w-100"}
                style={{ height: "40px" }}
                placeholder={placeholder}
                {...rest}
            />
        </Form.Item>
    );
}

export default FormTextInput;
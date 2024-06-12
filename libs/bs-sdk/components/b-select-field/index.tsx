import { useContext } from "react";
import { Context } from "../b-provide";
import { Form, Select } from "@douyinfe/semi-ui";
import { SelectProps } from "@douyinfe/semi-ui/lib/es/select";

export type BSelectFieldProps = SelectProps & {
  field: string;
  label?: string;
  otherOptions?: any[];
  filterOption?: (val: any) => any;
};

export default function BSelectField(props: BSelectFieldProps) {
  const ctx = useContext(Context);
  const items = (props.otherOptions ?? [])
    .concat(ctx.orm?.getFields() ?? [])
    .filter(props.filterOption ?? ((val) => true))
    .map((field: any) => (
      <Form.Select.Option key={field.id} value={field.id}>
        {field.name}
      </Form.Select.Option>
    ));
  return <Form.Select {...props}>{items}</Form.Select>;
}

import { Button } from "antd";
export const AmsRCButton = (props: any) => {
  return (
    <>
      <Button {...props} >{props.content}</Button>
    </>
  );
};

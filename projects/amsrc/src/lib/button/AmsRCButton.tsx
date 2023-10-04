import { Button } from "antd";
import {Text} from 'html-react-parser';
export const AmsRCButton = (props: any) => {
  return (
    <>
      <Button {...props} >Text({props.content})</Button>
    </>
  );
};

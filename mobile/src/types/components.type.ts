export interface ICustomTextInput {
  error: string | undefined;
  field: string;
  label: string;
  secureTextEntry?: boolean;
  touched: boolean | undefined;
  value: string;
  /* eslint-disable no-unused-vars */
  handleBlur: {
    (e: React.FocusEvent<any>): void;
    <T = string | any>(fieldOrEvent: T): T extends string
      ? (e: any) => void : void;
  };
  handleChange: {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(field: T):
      T extends React.ChangeEvent<any>
        ? void : (e: string | React.ChangeEvent<any>) => void;
  };
 /* eslint-disable no-unused-vars */
};

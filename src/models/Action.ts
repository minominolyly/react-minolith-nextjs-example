export default interface Action<PayloadType = object> {
  type: string;
  payload: Partial<PayloadType>;
}

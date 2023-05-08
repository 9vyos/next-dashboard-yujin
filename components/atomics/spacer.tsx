interface Props {
  direction: "vertical" | "horizontal";
}

const Spacer = ({ direction }: Props) => {
  return <div className={`spacer spacer-${direction}`} />;
};

export default Spacer;

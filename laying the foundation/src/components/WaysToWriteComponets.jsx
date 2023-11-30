export function Type1() {
  return <>Type 1</>;
}

export const Type2 = () => {
  return <>Type 2</>;
};

export const Type3 = () => <>Type 4</>;

export const Type4 = () => (
  <>
    Type4
    <p>yes this is a type</p>
  </>
);

export const CallingAComponent = () => {
  return <>Component is called</>;
};

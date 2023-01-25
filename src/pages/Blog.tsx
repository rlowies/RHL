import { ReactNode } from "react";
import "./pages.scss";

interface WrapperProps {
  node: React.ReactNode;
  children?: React.ReactNode;
}

const Blog = () => {
  const values: WrapperProps[] = [{ node: <div>Test 1</div> }, { node: <div>Test 2</div> }, { node: <div>Test 3</div> }];

  const Wrapper: React.FC<WrapperProps> = ({ node, children }) => {
    return (
      <span>
        {node}
        {children}
      </span>
    );
  };

  const renderValues = (i: number = 0): ReactNode => {
    if (values?.[i] === undefined) return;
    return <Wrapper {...values[i]}>{renderValues(i + 1)}</Wrapper>
  }

  return (
    <>
      <div className="page-container">{renderValues()}</div>
    </>
  );
};

export default Blog;

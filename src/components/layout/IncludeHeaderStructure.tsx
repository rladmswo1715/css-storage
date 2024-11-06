import { Outlet, useLocation } from "react-router-dom";
import Pr1Header from "./header/pr1/Header";
import Pr2Header from "./header/pr2/Header";

type HeaderComponent = JSX.Element | null;

const headers: Record<string, HeaderComponent> = {
  pr1: <Pr1Header />,
  pr2: <Pr2Header />,
};

const IncludeHeaderStructure: React.FC = () => {
  const { pathname } = useLocation();
  const headerKey = pathname.split("/")[1];
  const HeaderComponent: HeaderComponent = headers[headerKey] || (
    <div>기본 페이지</div>
  );

  return (
    <>
      {HeaderComponent}
      <Outlet />
    </>
  );
};

export default IncludeHeaderStructure;

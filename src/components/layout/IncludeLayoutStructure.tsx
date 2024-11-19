import { Outlet, useLocation } from "react-router-dom";
import Pr1Header from "./header/pr1/Header";
import Pr1Footer from "./footer/pr1/Footer";
import Pr2Header from "./header/pr2/Header";

type LayoutComponent = JSX.Element | null;

const headers: Record<string, LayoutComponent> = {
  pr1: <Pr1Header />,
  pr2: <Pr2Header />,
};

const footers: Record<string, LayoutComponent> = {
  pr1: <Pr1Footer />,
};

const IncludeLayoutStructure: React.FC = () => {
  const { pathname } = useLocation();
  const layoutKey = pathname.split("/")[1];
  const HeaderComponent: LayoutComponent = headers[layoutKey] || (
    <div>기본 페이지</div>
  );
  const FooterComponent: LayoutComponent = footers[layoutKey] || <></>;

  return (
    <>
      {HeaderComponent}
      <Outlet />
      {FooterComponent}
    </>
  );
};

export default IncludeLayoutStructure;

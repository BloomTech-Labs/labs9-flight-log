import Navigation from "../components/Navigation";
import { AST_PropAccess } from "terser";
const Layout = (props) => {
  return (
    <div>
      <Navigation />
      {props.children}
    </div>
  );
};
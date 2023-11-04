import HomePage from "./home/page";
import Wrapper from "./layout-wrapper/wrapper";

export const metadata = {
  title: "Indus Premium | Luxury Properties",
};

export default function MainRoot() {
  return (
    <Wrapper>
      <HomePage />
    </Wrapper>
  );
}

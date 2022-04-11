import { render } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";
import Dd from "../../components/dd";
let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("<Dd />", () => {
  it("Should have heading 'Why Drug Discovery?'", () => {
    act(() => {
      render(<Dd />, { container: container, wrapper: MemoryRouter });
    });
    const heading = document.querySelector("[data-testid=heading]");
    expect(heading).toHaveTextContent("Why Drug Discovery?");
  });
});

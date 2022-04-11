import { render } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";
import Fl from "../../components/fl";
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

describe("<Fl />", () => {
  it("Should have heading 'Why FL is Important for Drug Discovery?'", () => {
    act(() => {
      render(<Fl />, { container: container, wrapper: MemoryRouter });
    });
    const heading = document.querySelector("[data-testid=heading]");
    expect(heading).toHaveTextContent(
      "Why FL is Important for Drug Discovery?"
    );
  });
});

describe("<Fl />", () => {
  it("5 Explaination Points Present?", () => {
    act(() => {
      render(<Fl />, { container: container, wrapper: MemoryRouter });
    });
    const explaination = document.querySelector("[data-testid=explaination]");
    const count = explaination.childElementCount;
    expect(count).toBe(5);
  });
});

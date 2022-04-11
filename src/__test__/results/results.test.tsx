import { render } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";
import Results from "../../components/results";
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

describe("<Result />", () => {
  it("Check Results Page rendered!", () => {
    act(() => {
      render(<Results />, { container: container, wrapper: MemoryRouter });
    });
    const heading = document.querySelector("[data-testid=heading]");
    expect(heading).toHaveTextContent("Checkout Current Model Predictions!");
  });
});

describe("<Results />", () => {
  it("Check Input Options present", () => {
    act(() => {
      render(<Results />, { container: container, wrapper: MemoryRouter });
    });
    const inputParams = document.querySelector("[data-testid=inputParams]");
    const count = inputParams.childElementCount;
    expect(count).toBe(5);
  });
});

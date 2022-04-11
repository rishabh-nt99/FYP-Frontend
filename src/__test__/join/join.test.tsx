import { render } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";
import Join from "../../components/join";
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

describe("<Join />", () => {
  it("Check Page rendered!", () => {
    act(() => {
      render(<Join />, { container: container, wrapper: MemoryRouter });
    });
    const heading = document.querySelector("[data-testid=joinus]");
    expect(heading).toHaveTextContent("Join Us!");
  });
});

describe("<Join />", () => {
  it("Buttons Rendered", () => {
    act(() => {
      render(<Join />, { container: container, wrapper: MemoryRouter });
    });
    const explaination = document.querySelector("[data-testid=buttons]");
    const count = explaination.childElementCount;
    expect(count).toBe(2);
  });
});

import { render } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../../components/navbar";
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

describe("<Navbar />", () => {
  it("Navbar Rendered?", () => {
    act(() => {
      render(<Navbar />, { container: container, wrapper: MemoryRouter });
    });
    const logo = document.querySelector("[data-testid=logo]");
    expect(logo).toHaveTextContent("FL.");
  });
});

describe("<Navbar />", () => {
  it("Should have 4 Links", () => {
    act(() => {
      render(<Navbar />, { container: container, wrapper: MemoryRouter });
    });
    const links = document.querySelector("[data-testid=links]");
    const count = links.childElementCount;
    expect(count).toBe(4);
  });
});

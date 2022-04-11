import { render } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";
import Footer from "../../components/footer";
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

describe("<Footer />", () => {
  it("Test Links", () => {
    act(() => {
      render(<Footer />, { container: container, wrapper: MemoryRouter });
    });
    const github = document.querySelector("[data-testid=github]");
    const linkedin = document.querySelector("[data-testid=linkedin]");
    expect(github.getAttribute("href")).toBe(
      "https://www.github.com/rishabh-nt99"
    );
    expect(linkedin.getAttribute("href")).toBe(
      "https://www.linkedin.com/in/rishabh-nautiyal/"
    );
  });
});

describe("<Footer />", () => {
  it("Should have 3 Links", () => {
    act(() => {
      render(<Footer />, { container: container, wrapper: MemoryRouter });
    });
    const links = document.querySelector("[data-testid=links]");
    const count = links.childElementCount;
    expect(count).toBe(3);
  });
});

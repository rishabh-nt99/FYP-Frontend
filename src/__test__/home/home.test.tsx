import { render } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";
import Home from "../../components/home";
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

describe("<Home />", () => {
  it("Should have heading 'FL - Drug Discovery.'", () => {
    act(() => {
      render(<Home />, { container: container, wrapper: MemoryRouter });
    });
    const heading = document.querySelector("[data-testid= heading]");
    expect(heading).toHaveTextContent("FL - Drug Discovery.");
  });
});

describe("<Home />", () => {
  it("Should have sub-headings'", () => {
    act(() => {
      render(<Home />, { container: container, wrapper: MemoryRouter });
    });
    const sub_heading1 = document.querySelector("[data-testid= sub-heading1]");
    const sub_heading2 = document.querySelector("[data-testid= sub-heading2]");
    expect(sub_heading1).toHaveTextContent("A Federated Learning Based");
    expect(sub_heading2).toHaveTextContent(
      "Collaborative effort drug discovery effort."
    );
  });
});

describe("<Home />", () => {
  it("Should have 3 home cards", () => {
    act(() => {
      render(<Home />, { container: container, wrapper: MemoryRouter });
    });
    const cards = document.querySelectorAll("[data-testid= home-card]");
    expect(cards.length).toBe(3);
  });
});

describe("<Home />", () => {
  it("Test navigation", () => {
    act(() => {
      render(<Home />, { container: container, wrapper: MemoryRouter });
    });
    const join_button = document.querySelector("[data-testid= join-button]");
    act(() => {
      join_button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(join_button.childNodes[0]).toHaveTextContent("Join Us");
  });
});

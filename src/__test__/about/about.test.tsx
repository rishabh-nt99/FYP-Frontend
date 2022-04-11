import { render } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";
import About from "../../components/about";
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

describe("<About />", () => {
  it("Should have heading 'Who am I?'", () => {
    act(() => {
      render(<About />, { container: container, wrapper: MemoryRouter });
    });
    const heading = document.querySelector("[data-testid=whoAmI]");
    expect(heading).toHaveTextContent("Who am I?");
  });
});

describe("<About />", () => {
  it("Check email'", () => {
    act(() => {
      render(<About />, { container: container, wrapper: MemoryRouter });
    });
    const email = document.querySelector("[data-testid=email]");
    expect(email).toHaveTextContent("rnautiyal2-c@my.cityu.edu.hk");
  });
});

describe("<About />", () => {
  it("Check website", () => {
    act(() => {
      render(<About />, { container: container, wrapper: MemoryRouter });
    });
    const website = document.querySelector("[data-testid=website]");
    expect(website).toHaveTextContent("www.rishabhnautiyal.com");
  });
});

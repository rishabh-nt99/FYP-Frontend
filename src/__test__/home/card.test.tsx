import { render } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";
import Card from "../../components/home/card";
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

describe("<Card />", () => {
  it("Testing Card with Compulsory Props'", () => {
    let cardProps = {
      title: "Test Title",
      desc1: "This is the testing description",
      link: "/federated-learning",
      image: "image-1.jpg",
    };
    act(() => {
      render(
        <Card
          title={cardProps.title}
          desc1={cardProps.desc1}
          link={cardProps.link}
          image={cardProps.image}
        />,
        { container: container, wrapper: MemoryRouter }
      );
    });
    const title = document.querySelector("[data-testid=card-title]");
    const desc1 = document.querySelector("[data-testid=card-desc1]");
    const link: any = document.querySelector("[data-testid=card-link]");
    const image: any = document.querySelector("[data-testid=card-image]");
    expect(title).toHaveTextContent(cardProps.title);
    expect(desc1).toHaveTextContent(cardProps.desc1);
    expect(link.getAttribute("href")).toBe(cardProps.link);
    expect(image.getAttribute("src")).toBe(`./images/${cardProps.image}`);
  });
});

describe("<Card />", () => {
  it("Testing Card with All Props'", () => {
    let cardProps = {
      title: "Test Title",
      desc1: "This is the testing description",
      desc2: "This is the sub description",
      link: "/federated-learning",
      image: "image-1.jpg",
    };
    act(() => {
      render(
        <Card
          title={cardProps.title}
          desc1={cardProps.desc1}
          desc2={cardProps.desc2}
          link={cardProps.link}
          image={cardProps.image}
        />,
        { container: container, wrapper: MemoryRouter }
      );
    });
    const title = document.querySelector("[data-testid=card-title]");
    const desc1 = document.querySelector("[data-testid=card-desc1]");
    const desc2 = document.querySelector("[data-testid=card-desc2]");
    const link: any = document.querySelector("[data-testid=card-link]");
    const image: any = document.querySelector("[data-testid=card-image]");
    expect(title).toHaveTextContent(cardProps.title);
    expect(desc1).toHaveTextContent(cardProps.desc1);
    expect(desc2).toHaveTextContent(cardProps.desc2);
    expect(link.getAttribute("href")).toBe(cardProps.link);
    expect(image.getAttribute("src")).toBe(`./images/${cardProps.image}`);
  });
});

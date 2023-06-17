import Accordion from "./Accordion";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Accordion", () => {
  beforeEach(() => {
    render(
      <Accordion title="hello">
        <h3>My content</h3>
        <p>some xyz</p>
      </Accordion>
    );
  });

  test("Should add two numbers", () => {
    expect(screen.getByText("hello")).toBeDefined();
  });

  test("Should not show the content at the start", () => {
    expect(screen.queryByText(/content/i)).toBeNull();
  });

  test("Should show the content while title is checked", () => {
    const button = screen.getByText(/open/i);
    fireEvent.click(button);
    expect(screen.queryByText(/content/i)).toBeDefined();
  });

  test("Should hide the content while title is checked", () => {
    const button = screen.getByText(/open/i);
    fireEvent.click(button);
    fireEvent.click(button);
    expect(screen.queryByText(/content/i)).toBeNull();
  });
});

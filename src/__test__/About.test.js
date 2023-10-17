import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "../components/About"

test("should load About component on page", () => {
    render(<About/>);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
})
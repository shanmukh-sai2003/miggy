import { render, screen } from "@testing-library/react"
import Header from "../components/Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render Header component on the page", () => {
    render(
        <BrowserRouter>
            <Header/>
        </BrowserRouter>
    );

    const logoImage = screen.getByAltText("miggy-logo");
   
    expect(logoImage).toBeInTheDocument();
});


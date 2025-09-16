import '@testing-library/jest-dom'
import '../__mocks__/window-entities'

import { render, screen } from '@testing-library/react'
import Layout from './layout'


describe("Layout", () => {
    it("renders layout unchanged", () => {
        const { container } = render(<Layout><main /></Layout>);
        expect(container).toMatchSnapshot();
    });

    it("renders a header", () => {
        render(<Layout><main /></Layout>);
        const header = screen.getByTestId("page-header");
        expect(header).toBeInTheDocument();
    });

    it("renders a footer", () => {
        render(<Layout><main /></Layout>);
        const heading = screen.getByTestId("page-footer");
        expect(heading).toBeInTheDocument();
    });
});

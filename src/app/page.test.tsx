import '@testing-library/jest-dom'
import '../__mocks__/window-entities'

import { render, screen } from '@testing-library/react'
import Page from './page'


describe("Page", () => {
  it("renders homepage unchanged", () => {
    const { container } = render(<Page />);
    expect(container).toMatchSnapshot();
  });
});

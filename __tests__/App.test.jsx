import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import "@testing-library/jest-dom";
import App from "../src/App";

jest.mock("@react-pdf/renderer", () => ({
  PDFDownloadLink: ({ children, fileName }) => (
    <a href="#" data-testid="pdf-download" data-filename={fileName}>
      {typeof children === "function" ? children({ loading: false }) : children}
    </a>
  ),
  Document: ({ children }) => <div>{children}</div>,
  Page: ({ children }) => <div>{children}</div>,
  View: ({ children }) => <div>{children}</div>,
  Text: ({ children }) => <span>{children}</span>,
  Link: ({ children }) => <span>{children}</span>,
  StyleSheet: { create: (s) => s },
  Font: { register: jest.fn(), registerHyphenationCallback: jest.fn() },
}));

test("renders resume with name and language buttons", () => {
  render(<App />);

  expect(screen.getByText("Ivan Robles")).toBeInTheDocument();
  expect(screen.getByText("EN")).toBeInTheDocument();
  expect(screen.getByText("ES")).toBeInTheDocument();
});

test("renders English content by default", () => {
  render(<App />);

  expect(screen.getByText("Experience")).toBeInTheDocument();
  expect(screen.getByText("Skills")).toBeInTheDocument();
  expect(screen.getByText("Education")).toBeInTheDocument();
});

test("switches to Spanish when ES button is clicked", async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.click(screen.getByText("ES"));

  expect(screen.getByText("Experiencia")).toBeInTheDocument();
  expect(screen.getByText("Habilidades")).toBeInTheDocument();
  expect(screen.getByText("Educación")).toBeInTheDocument();
});

test("download button has correct filename for selected language", async () => {
  const user = userEvent.setup();
  render(<App />);

  expect(screen.getByTestId("pdf-download")).toHaveAttribute(
    "data-filename",
    "Ivan_Robles_Resume_EN.pdf",
  );

  await user.click(screen.getByText("ES"));

  expect(screen.getByTestId("pdf-download")).toHaveAttribute(
    "data-filename",
    "Ivan_Robles_Resume_ES.pdf",
  );
});

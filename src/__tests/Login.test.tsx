import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import Login from "../components/Login";

const renderLoginComponent = () => {
  return render(
    <Provider store={store}>
      <Login />
    </Provider>
  );
};

describe("<LoginPage />", () => {
  describe("Teasing login component", () => {
    beforeEach(async () => {
      act(() => {
        renderLoginComponent();
      });
    });

    test("render sign up page with initial props", async () => {
      expect(await screen.findByText("Name")).toBeInTheDocument();
      expect(await screen.findByText("Email")).toBeInTheDocument();
      expect(await screen.findByText("Password")).toBeInTheDocument();
      expect(await screen.findByText("Already have an account?")).toBeInTheDocument();
      expect(await screen.findByText("Login")).toBeInTheDocument();
      expect(await screen.findByText("sign up")).toBeInTheDocument();
    });

    test("input > change email", async () => {
      const element = screen.getByLabelText("Email");

      fireEvent.change(element, { target: { value: "email" } });
      await waitFor(() => {
        expect(element).toHaveValue("email");
      });
    });

    test("input > change password", async () => {
      const element = screen.getByLabelText("Password");

      fireEvent.change(element, { target: { value: "password" } });
      await waitFor(() => {
        expect(element).toHaveValue("password");
      });
    });

    test("input > submit form", async () => {
      const element = screen.getByRole("button", { name: "Login" });

      fireEvent.click(element);
      await waitFor(() => {
        expect(screen.findByText("")).toBeInTheDocument();
      });
    });

    test("input > submit form", async () => {
      const element = screen.getByRole("link", { name: "Register/sign up" });

      fireEvent.click(element);
      await waitFor(() => {
        expect(element).not.toBeInTheDocument();
      });
    });
  });
});

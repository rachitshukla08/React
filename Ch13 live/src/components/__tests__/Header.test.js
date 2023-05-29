import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("logo should load on rendering header", () => {
  // Load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  // console.log(header);
  // Check if logo is loaded
  const logo = header.getAllByTestId("logo");
  // console.log(logo);
  expect(logo).not.toBeNull();
});

test("Online status should be green", () => {
  // Load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  // Check if online status is green
  const onlineStatus = header.getByTestId("online-status");
  expect(onlineStatus.innerHTML).toMatch(new RegExp("✅"));
});

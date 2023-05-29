import Body from "../Body";
import { render, waitFor, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_DATA } from "../../mocks/data";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: function () {
      return Promise.resolve({ RESTAURANT_DATA });
    },
  });
});

test("Shimmer should load on home page", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(screen.getByTestId("search-btn")));

  const shimmer = body.getByTestId("shimmer");

  console.log(shimmer);
  expect(shimmer.children.length).toBe(10);
  // console.log(body);
});

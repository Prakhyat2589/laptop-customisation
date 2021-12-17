import { render, waitFor } from "@testing-library/react";
import CustomisationList from "./CustomisationList";

import axios, { AxiosStatic } from "axios";

interface AxiosMock extends AxiosStatic {
  mockResolvedValue: Function;
  mockResolvedValueOnce: Function;
  mockClear: Function;
}

jest.mock("axios");

const mockedAxios = axios.get as AxiosMock;

afterEach(() => {
  mockedAxios.mockClear();
});

describe("CustomisationList component render", () => {
  it("fetches and displays data", async () => {
    const mockData = {
      data: [
        {
          component_title: "Screen",
          component_list: [
            {
              component_name: "13 Retina",
              component_price: 400,
              quantity: 1,
            },
            {
              component_name: "15 Retina",
              component_price: 700,
              quantity: 1,
            },
          ],
        },
      ],
    };

    const mockApiResposne = {
      component_list: [
        { component_name: "13 Retina", component_price: 400, quantity: 1 },
        { component_name: "15 Retina", component_price: 700, quantity: 1 },
      ],
      component_title: "Screen",
    };

    const url = "/list";

    mockedAxios.mockResolvedValueOnce(mockData);

    const { getAllByTestId } = render(<CustomisationList />);

    await waitFor(() => {
      getAllByTestId("customisationlist").map((tools) => tools.textContent);
    });

    expect(mockedAxios).toHaveBeenCalledTimes(1);
    expect(mockedAxios).toHaveBeenCalledWith(url);
  });

  it("fetches Api Url but no data is available", async () => {
    mockedAxios.mockResolvedValueOnce({});
    const message = "No records found. Please try again later";

    const { getByText } = render(<CustomisationList />);
    await waitFor(() => {
      expect(getByText(message)).toBeInTheDocument();
    });
  });
});

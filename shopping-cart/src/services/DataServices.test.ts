import axios, { AxiosStatic } from "axios";
import fetchData from "./DataServices";

interface AxiosMock extends AxiosStatic {
  mockResolvedValueOnce: Function;
  mockRejectedValueOnce: Function;
}

jest.mock("axios");

const mockedAxios = axios.get as AxiosMock;

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

const mockApiResposne = [
  {
    component_title: "Screen",
    component_list: [
      { component_name: "13 Retina", component_price: 400, quantity: 1 },
      { component_name: "15 Retina", component_price: 700, quantity: 1 },
    ],
  },
];
const url = "https://localhost:4000/api/list";

describe("Main component renter with children", () => {
  it("fetches and displays data", async () => {
    expect.assertions(1);

    mockedAxios.mockResolvedValueOnce(mockData);
    await expect(fetchData(url)).resolves.toEqual(mockApiResposne);
  });

  it("fetches no data from an API", async () => {
    const message = "Network Error";
    mockedAxios.mockRejectedValueOnce(new Error(message));
    const result = await fetchData(url);
    expect(result).toEqual([]);
  });
});

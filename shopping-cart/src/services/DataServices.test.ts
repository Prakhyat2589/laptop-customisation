import axios from "axios";
import fetchData from "./DataServices";

jest.mock("axios");
const mockData = {
  data: {
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
};

const mockApiResposne = {
  component_list: [
    { component_name: "13 Retina", component_price: 400, quantity: 1 },
    { component_name: "15 Retina", component_price: 700, quantity: 1 },
  ],
  component_title: "Screen",
};

const url = "https://localhost:4000/api/list";

describe("Main component renter with children", () => {
  it("fetches and displays data", async () => {
    // We'll be explicit about what data Axios is to return when `get` is called

    expect.assertions(1);

    axios.get = jest.fn().mockResolvedValueOnce(mockData);
    await expect(fetchData(url)).resolves.toEqual(mockApiResposne);
  });

  it("fetches no data from an API", async () => {
    axios.get = jest.fn().mockResolvedValueOnce(null);
    await expect(fetchData(url)).resolves.toEqual(null);
  });
});

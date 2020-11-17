import { calculate } from "./src/priceCalculator";

const calcDiscount = (x) => {
  return ":boczek:";
};

test("Bartek is bartek", () => {
  expect(calcDiscount("krajka")).toBe(":boczek:");
});


test("calculate is 7", () => {
  expect(calculate()).toBe(7)
})
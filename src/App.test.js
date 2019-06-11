import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

/* 
Commented out default test due to but in React <16.9. The big 
red warning is very distracting for the workshop.
Bug documented here:
https://github.com/testing-library/react-testing-library/issues/281
*/

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error();
  }

  return a + b;
}

describe("sum", () => {
  it("should add 2 positive numbers", () => {
    expect(sum(2, 3)).toEqual(5);
  });

  it("should add 2 negative numbers", () => {
    expect(sum(-2, -3)).toEqual(-5);
  });

  it("should throw an error if param is not a number", () => {
    expect(() => sum("2", 3).toThrowError());
  });
});

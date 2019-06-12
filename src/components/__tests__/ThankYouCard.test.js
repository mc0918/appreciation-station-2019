import React from "react";
import { shallow } from "enzyme";
import ThankYouCard from "../ThankYouCard";

let testMember = {
  name: "Test mentor",
  isMentor: true
};

let testMessage = {
  text: "Thank you for being a great mentor, {NAME}!",
  isMentor: true
};

let testBgdImage = {
  file: {
    url: "testUrl"
  },
  maxTextWidth: 0.75,
  textPosition: "topLeft"
};

let subject;
let renderPrevArrow = jest.fn();
let renderNextArrow = jest.fn();

function loadSubject(props = {}) {
  subject = shallow(
    <ThankYouCard
      member={testMember}
      message={testMessage}
      backgroundImage={testBgdImage}
      prevArrow={renderPrevArrow}
      nextArrow={renderNextArrow}
      {...props}
    />
  );
}

describe("ThankYouCard", () => {
  // Before each test load the subject of the test
  beforeEach(() => {
    loadSubject();
  });

  describe("#render", () => {
    it("matches snapshot", () => {
      expect(subject).toMatchSnapshot();
    });
  });

  describe("#setCanvasSize", () => {
    it("updates the canvas width and height", () => {
      //Arrange, Given, etc
      let canvas = {};
      const width = 200;
      const height = 100;

      //Act, Expect, When, etc
      //instance is an enzyme object so you can call all "this." functions
      subject.instance().setCanvasSize(canvas, width, height);

      //Assert, Then, etc
      expect((canvas.width = width));
      expect((canvas.height = height));
    });
  });
});

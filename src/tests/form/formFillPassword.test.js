import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import Loader from '../../components/loader/Loader';
import Stepper from '../../components/stepper/Stepper';
import ResponseBox from '../../components/responseBox/ResponseBox';
import { RESPONSE_OK } from '../../services/api';
import ResponseBoxButtons from '../../components/responseBox/ResponseBoxButtons';
import FormFeedback from '../../components/form/FormFeedback';

const responseIsOk = RESPONSE_OK; //RESPONSE_KO
const mockStore = configureMockStore();
const store = mockStore({});

const props = { responseData: { status: 200 } };
describe("Testpage Component", () => {
  console.log(props);
  it("should render without throwing an error and find success text", () => {
    expect(
      shallow(
        <Provider store={store}>
          <FormFeedback props={props} />
        </Provider>
      ).exists(<h1>¡Tu Password Manager ya está creado!</h1>)
    ).toBe(true);
  });
});

describe("Loader Component", () => {
  test("Matches the snapshot", () => {
    const loader = renderer.create(<Loader />);
    expect(loader.toJSON()).toMatchSnapshot();
  });
});

describe("Stepper Component", () => {
  test("Matches the snapshot", () => {
    const step = 1;
    const steps = ["FormProduct", "FormPassword", "FormFeedback"];
    const loader = renderer.create(<Stepper step={step} steps={steps} />);
    expect(loader.toJSON()).toMatchSnapshot();
  });
});

describe("Response Box Component", () => {
  test("Matches the snapshot", () => {
    const imgPath = responseIsOk ? "/images/success-icon.jpg" : "/images/error-icon.jpg";
    const title = responseIsOk ? 'form.feedback.success.title' : 'form.feedback.failed.title';
    const message = responseIsOk ? 'form.feedback.success.message' : 'form.feedback.failed.message';

    const loader = renderer.create(<ResponseBox imgPath={imgPath} title={title} message={message} />);
    expect(loader.toJSON()).toMatchSnapshot();
  });
});

describe("Response Box Buttons Component", () => {
  test("Matches the snapshot", () => {
    const buttonMessage = responseIsOk ? 'form.feedback.success.button-text' : 'form.feedback.failed.button-text';
    const buttonPath = responseIsOk ? "/" : "";

    const loader = renderer.create(<ResponseBoxButtons message={buttonMessage} path={buttonPath} />);
    expect(loader.toJSON()).toMatchSnapshot();
  });
});
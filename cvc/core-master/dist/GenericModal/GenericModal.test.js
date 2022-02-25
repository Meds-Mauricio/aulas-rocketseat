"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _react=_interopRequireDefault(require("react"));var _react2=require("@testing-library/react");var _wrappercontext=_interopRequireDefault(require("../../mocks/wrappercontext"));var _GenericModal=_interopRequireDefault(require("./GenericModal"));/* eslint-disable react/no-children-prop */describe("GenericModal",function(){it("GenericModal render test",function(){var fcClose=jest.fn();var _render=(0,_react2.render)(/*#__PURE__*/_react["default"].createElement(_wrappercontext["default"],null,/*#__PURE__*/_react["default"].createElement(_GenericModal["default"],{testId:"modal-generic-component",isOpen:true,children:/*#__PURE__*/_react["default"].createElement("h1",null,"test modal"),onClose:fcClose}))),getByTestId=_render.getByTestId;var modal=getByTestId("modal-generic-component");var clone=getByTestId("close");clone.click();expect(modal).toBeTruthy();expect(fcClose).toBeCalled()});it("GenericModal render test with close not function param",function(){var _render2=(0,_react2.render)(/*#__PURE__*/_react["default"].createElement(_wrappercontext["default"],null,/*#__PURE__*/_react["default"].createElement(_GenericModal["default"],{testId:"modal-generic-component",isOpen:true,children:/*#__PURE__*/_react["default"].createElement("h1",null,"test modal")}))),getByTestId=_render2.getByTestId;var modal=getByTestId("modal-generic-component");var clone=getByTestId("close");clone.click();expect(modal).toBeTruthy()})});
//# sourceMappingURL=GenericModal.test.js.map
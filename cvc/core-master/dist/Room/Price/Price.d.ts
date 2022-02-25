declare var _default: React.ComponentType<Pick<Pick<{
    classes: any;
    product: any;
    totalPrice: any;
    oldPartialPrice: any;
    partialPrice: any;
    pax: any;
    days: any;
    onClick: any;
    taxesIncluded: any;
    parcel: any;
    label: any;
    variant: any;
    classButton: any;
    totalPeople: any;
    symbol: any;
}, never> & Pick<PropTypes.InferProps<{
    classes: PropTypes.Validator<object>;
    onClick: PropTypes.Validator<(...args: any[]) => any>;
    product: PropTypes.Validator<string>;
    pax: PropTypes.Requireable<string | number>;
    days: PropTypes.Validator<string | number>;
    totalPrice: PropTypes.Validator<string | number>;
    partialPrice: PropTypes.Validator<string | number>;
    taxesIncluded: PropTypes.Requireable<boolean>;
    parcel: PropTypes.Validator<string | number>;
}>, "taxesIncluded" | "pax" | PropTypes.RequiredKeys<{
    classes: PropTypes.Validator<object>;
    onClick: PropTypes.Validator<(...args: any[]) => any>;
    product: PropTypes.Validator<string>;
    pax: PropTypes.Requireable<string | number>;
    days: PropTypes.Validator<string | number>;
    totalPrice: PropTypes.Validator<string | number>;
    partialPrice: PropTypes.Validator<string | number>;
    taxesIncluded: PropTypes.Requireable<boolean>;
    parcel: PropTypes.Validator<string | number>;
}>> & Pick<{
    classes: any;
    product: any;
    totalPrice: any;
    oldPartialPrice: any;
    partialPrice: any;
    pax: any;
    days: any;
    onClick: any;
    taxesIncluded: any;
    parcel: any;
    label: any;
    variant: any;
    classButton: any;
    totalPeople: any;
    symbol: any;
}, "symbol" | "label" | "variant" | "oldPartialPrice" | "totalPeople" | "classButton">, "symbol" | "onClick" | "label" | "variant" | "days" | "product" | "taxesIncluded" | "parcel" | "partialPrice" | "oldPartialPrice" | "totalPeople" | "totalPrice" | "pax" | "classButton"> & import("@material-ui/styles/withStyles/withStyles").StyledComponentProps<"footer">>;
export default _default;
import PropTypes from "prop-types";
import React from "react";

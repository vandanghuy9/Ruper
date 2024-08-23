"use client";
import React from "react";
import { useCheckoutSubmit } from "@context/CheckoutContext";
import { useCart } from "react-use-cart";
import InputText from "@component/form/InputText";
import Label from "@component/form/Label";
import Select from "@component/form/Select";
import ErrorText from "@component/form/ErrorText";
import { countryOption, stateOption } from "@utils/data";

const ShippingDetail = () => {
  const { register, errors } = useCheckoutSubmit();
  return (
    <div className="shipping-address">
      <p className="form-row form-row-first validate-required">
        <InputText
          id="shipping_first_name"
          register={register}
          name="shipping_first_name"
          placeholder=""
          label="First name"
          required={true}
          errors={errors}
        />
        <ErrorText error={errors.shipping_first_name} />
      </p>
      <div className="form-row form-row-last validate-required">
        <InputText
          id="shipping_last_name"
          register={register}
          name="shipping_last_name"
          placeholder=""
          label="Last name"
          required={true}
        />
        <ErrorText error={errors.shipping_last_name} />
      </div>
      <div className="form-row form-row-wide">
        <InputText
          id="shipping_companyName"
          register={register}
          name="shipping_companyName"
          placeholder=""
          label="Company name"
          required={false}
        />
      </div>
      <div className="form-row form-row-wide address-field validate-required">
        <Label
          htmlFor="shipping_country"
          content={"Country / Region"}
          required={true}
        />
        <span className="input-wrapper">
          <Select
            className={"country-select custom-select"}
            name={"shipping_country"}
            register={register}
            options={countryOption}
          />
          <ErrorText error={errors.shipping_country} />
        </span>
      </div>
      <div className="form-row address-field validate-required form-row-wide">
        <InputText
          id="shipping_address"
          register={register}
          name="shipping_address"
          placeholder="Street address"
          label="Street address "
          required={true}
        />
        <ErrorText error={errors.shipping_address} />
      </div>
      <div className="form-row address-field form-row-wide">
        <InputText
          id="shipping_apartment"
          register={register}
          name="shipping_apartment"
          placeholder="Apartment, suite, unit, etc"
          label="Apartment, suite, unit, etc.&nbsp; "
          required={false}
        />
      </div>
      <div className="form-row address-field validate-required form-row-wide">
        <InputText
          id="shipping_city"
          register={register}
          name="shipping_city"
          placeholder=""
          label="Town / City"
          required={false}
        />
      </div>
      <div className="form-row address-field validate-required validate-state form-row-wide">
        <Label
          htmlFor="shipping_state"
          content={"State / County"}
          required={true}
        />
        <span className="input-wrapper">
          <Select
            options={stateOption}
            name={"shipping_state"}
            register={register}
            className={"state-select custom-select"}
          />
          <ErrorText error={errors.shipping_state} />
        </span>
      </div>
      <div className="form-row address-field validate-required validate-postcode form-row-wide">
        <InputText
          id={"shipping_zipCode"}
          register={register}
          name={"shipping_zipCode"}
          placeholder={""}
          label={"Postcode / ZIP"}
          required={true}
        />
        <ErrorText error={errors.shipping_zipCode} />
      </div>
      <p className="form-row form-row-wide validate-required validate-phone">
        <InputText
          id={"shipping_contact"}
          register={register}
          name={"shipping_contact"}
          placeholder={""}
          label={"Phone"}
          required={true}
          type="tel"
        />
        <ErrorText error={errors.shipping_contact} />
      </p>
      <p className="form-row form-row-wide validate-required validate-email">
        <InputText
          id={"shipping_email"}
          register={register}
          name={"shipping_email"}
          placeholder={""}
          label={"Email address"}
          required={true}
          type="email"
        />
        <ErrorText error={errors.shipping_email} />
      </p>
    </div>
  );
};

export default ShippingDetail;

"use client";
import { useCheckoutSubmit } from "@context/CheckoutContext";
import InputText from "@component/form/InputText";
import Label from "@component/form/Label";
import Select from "@component/form/Select";
import ErrorText from "@component/form/ErrorText";
import { countryOption, stateOption } from "@utils/data";
import ShippingDetail from "./ShippingDetail";
const Billing = () => {
  const { register, isShippingSelected, setIsShippingSelected, errors } = useCheckoutSubmit();
  return (
    <div className="col-xl-8 col-lg-7 col-md-12 col-12">
      <div className="customer-details">
        <div className="billing-fields">
          <h3>Billing details</h3>

          <div className="billing-fields-wrapper">
            <p className="form-row form-row-first validate-required">
              <InputText
                id="billing_first_name"
                register={register}
                name="billing_first_name"
                placeholder=""
                label="First name"
                required={"This field is required"}
                errors={errors}
              />
              <ErrorText error={errors.billing_first_name} />
            </p>
            <p className="form-row form-row-last validate-required">
              <InputText
                id="billing_last_name"
                register={register}
                name="billing_last_name"
                placeholder=""
                label="Last name"
                required={"This field is required"}
              />
              <ErrorText error={errors.billing_last_name} />
            </p>
            <p className="form-row form-row-wide">
              <InputText
                id="billing_companyName"
                register={register}
                name="billing_companyName"
                placeholder=""
                label="Company name"
                required={"This field is required"}
              />
              <ErrorText error={errors.billing_companyName} />
            </p>
            <p className="form-row form-row-wide validate-required">
              <Label htmlFor="billing_country" content={"Country / Region"} required={true} />
              <span className="input-wrapper">
                <Select
                  className={"country-select custom-select"}
                  name={"billing_country"}
                  register={register}
                  required={"This field is required"}
                  options={countryOption}
                />
                <ErrorText error={errors.billing_country} />
              </span>
            </p>
            <p className="form-row address-field validate-required form-row-wide">
              <InputText
                id="billing_address"
                register={register}
                name="billing_address"
                placeholder="Street address"
                label="Street address "
                required={"This field is required"}
              />
              <ErrorText error={errors.billing_address} />
            </p>
            <p className="form-row address-field form-row-wide">
              <InputText
                id="billing_apartment"
                register={register}
                name="billing_apartment"
                placeholder="Apartment, suite, unit, etc"
                label="Apartment, suite, unit, etc.&nbsp; "
                required={false}
              />
            </p>
            <p className="form-row address-field validate-required form-row-wide">
              <InputText
                id="billing_city"
                register={register}
                name="billing_city"
                placeholder=""
                label="Town / City"
                required={false}
              />
            </p>
            <p className="form-row address-field validate-required validate-state form-row-wide">
              <Label htmlFor="billing_state" content={"State / County"} required={true} />
              <span className="input-wrapper">
                <Select
                  options={stateOption}
                  name={"billing_state"}
                  register={register}
                  className={"state-select custom-select"}
                  required={"This field is required"}
                />
                <ErrorText error={errors.billing_state} />
              </span>
            </p>
            <p className="form-row address-field validate-required validate-postcode form-row-wide">
              <InputText
                id={"billing_zipCode"}
                register={register}
                name={"billing_zipCode"}
                placeholder={""}
                label={"Postcode / ZIP"}
                required={"This field is required"}
              />
              <ErrorText error={errors.billing_zipCode} />
            </p>
            <p className="form-row form-row-wide validate-required validate-phone">
              <InputText
                id={"billing_contact"}
                register={register}
                name={"billing_contact"}
                placeholder={""}
                label={"Phone"}
                required={"This field is required"}
                type="tel"
              />
              <ErrorText error={errors.billing_contact} />
            </p>
            <p className="form-row form-row-wide validate-required validate-email">
              <InputText
                id={"billing_email"}
                register={register}
                name={"billing_email"}
                placeholder={""}
                label={"Email address"}
                required={"This field is required"}
                type="email"
              />
              <ErrorText error={errors.billing_email} />
            </p>
          </div>
        </div>
      </div>
      <div className="shipping-fields">
        <p className="form-row form-row-wide ship-to-different-address">
          <label className="checkbox">
            <input
              className="input-checkbox"
              type="checkbox"
              name="ship_to_different_address"
              value={isShippingSelected}
              onChange={(e) =>
                setIsShippingSelected((prevIsShippingSelected) => !prevIsShippingSelected)
              }
            />
            <span>Ship to a different address?</span>
          </label>
        </p>
        {isShippingSelected && <ShippingDetail />}
      </div>
      <div className="additional-fields">
        <p className="form-row notes">
          <Label htmlFor="orderNote" content={"Order notes"} required={false} />
          <span className="input-wrapper">
            <textarea
              name="orderNote"
              className="input-text"
              id="orderNote"
              placeholder="Notes about your order, e.g. special notes for delivery."
              cols="5"
              rows="2"
              {...register("orderNote")}></textarea>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Billing;

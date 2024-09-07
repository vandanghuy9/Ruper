"use client";
import React from "react";
import { updateUserInfo } from "@services/userService";
import { errorNoti, successNoti } from "@utils/notification/notification";
const MyAccount = ({ userInfo }) => {
  const { name, firstName, lastName, email } = userInfo;
  const onSubmit = async (formData) => {
    const res = await updateUserInfo(formData);
    if (!res.ok) {
      return errorNoti(res.message);
    }
    return successNoti(res.message);
  };
  return (
    <div
      className="tab-pane fade show active"
      id="account-details"
      role="tabpanel"
    >
      <div className="my-account-account-details">
        <form className="edit-account" action={onSubmit}>
          <p className="form-row">
            <label htmlFor="firstName">
              First name <span className="required">*</span>
            </label>
            <input
              type="text"
              className="input-text"
              name="firstName"
              value={firstName}
            />
          </p>
          <p className="form-row">
            <label>
              Last name <span className="required">*</span>
            </label>
            <input
              type="text"
              className="input-text"
              name="lastName"
              value={lastName}
            />
          </p>
          <div className="clear"></div>
          <p className="form-row">
            <label>
              Display name <span className="required">*</span>
            </label>
            <input
              type="text"
              className="input-text"
              name="name"
              value={name}
            />
            <span>
              <em>
                This will be how your name will be displayed in the account
                section and in reviews
              </em>
            </span>
          </p>
          <div className="clear"></div>
          <p className="form-row">
            <label>
              Email address <span className="required">*</span>
            </label>
            <input
              type="email"
              className="input-text"
              name="email"
              value={email}
            />
          </p>
          <fieldset>
            <legend>Password change</legend>
            <p className="form-row">
              <label>Current password (leave blank to leave unchanged)</label>
              <input
                type="password"
                className="input-text"
                name="password_current"
                autocomplete="off"
              />
            </p>
            <p className="form-row">
              <label>New password (leave blank to leave unchanged)</label>
              <input
                type="password"
                className="input-text"
                name="password_1"
                autocomplete="off"
              />
            </p>
            <p className="form-row">
              <label>Confirm new password</label>
              <input
                type="password"
                className="input-text"
                name="password_2"
                autocomplete="off"
              />
            </p>
          </fieldset>
          <div className="clear"></div>
          <p className="form-row">
            <button
              type="submit"
              className="button"
              name="save_account_details"
              value="Save changes"
            >
              Save changes
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default MyAccount;

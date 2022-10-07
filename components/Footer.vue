<template>
  <div class="sf-footer-section">
    <div class="footer-container">
      <div class="footer-row">
        <div class="footer-left">
          <h3 class="footer-heading">
            Customs Support - Take the load off your mind
          </h3>
          <div class="bottom-divider"></div>
          <div class="footer-get-in-touch">
            <h4>Get in touch with one of our customs experts!</h4>
            <p>
              Fill in the contact form or use the chat function on the website.
            </p>
          </div>
          <div class="footer-form">
            <p class="new-customer">Are you a new or returning customer? *</p>
            <div class="customer-radios">
              <div class="custom-radio">
                <input type="radio" name="customer" id="customerNew" />
                <label for="customerNew" class="form-control">New</label>
              </div>
              <div class="custom-radio">
                <input type="radio" name="customer" id="customerReturning" />
                <label for="customerReturning" class="form-control">Returning</label>
              </div>
            </div>
            <div class="customer-inputs">
              <template>
                <select class="sf-custom-select">
                  <option value="0">Choice of Service:</option>
                  <option value="1">Value</option>
                  <option value="2">Value</option>
                </select>
              </template>
              <div class="border-divider"></div>
              <div class="information-inputs">
                <div class="informations">
                  <template>
                    <SfInput
                      class="custom-input"
                      value=""
                      label=""
                      name="name"
                      placeholder="First name*"
                    />
                  </template>
                </div>
                <div class="informations pr-0">
                  <template>
                    <SfInput
                      class="custom-input"
                      value=""
                      label=""
                      name="name"
                      placeholder="Last name*"
                    />
                  </template>
                </div>
                <div class="informations">
                  <template>
                    <SfInput
                      class="custom-input"
                      value=""
                      label=""
                      name="name"
                      placeholder="Company*"
                    />
                  </template>
                </div>
                <div class="informations pr-0">
                  <template>
                    <SfInput
                      class="custom-input"
                      value=""
                      label=""
                      name="name"
                      placeholder="Email*"
                    />
                  </template>
                </div>
                <div class="informations">
                  <template>
                    <SfInput
                      class="custom-input"
                      value=""
                      label=""
                      name="name"
                      placeholder="Phone Number*"
                    />
                  </template>
                </div>
                <div class="informations pr-0">
                  <template>
                    <select class="sf-custom-select">
                      <option value="0">Choice of Service:</option>
                      <option value="1">Value</option>
                      <option value="2">Value</option>
                    </select>
                  </template>
                </div>
                <div class="customer-radios">
                  <div class="informations">
                    <div class="custom-radio">
                        <input type="radio" name="customer" id="customerNew" />
                        <label for="customerNew" class="form-control">I agree with the <span class="underline"> Terms and Conditions</span>*</label>
                      </div>
                  </div>
                  <div class="informations">
                    <div class="custom-radio">
                        <input type="radio" name="customer" id="customerReturning" />
                        <label for="customerReturning" class="form-control">I want to sign up for the newsletter <span><img class="email-icon" src="../assets/images/icons/email.png" alt=""></span></label>
                      </div>
                  </div>
                </div>
                <template>
                  <button
                    class="color-primary sf-button get-touch-button"
                    :aria-disabled="false"
                    :link="null"
                    type="button"
                    aria-label="button"
                  >
                    Brexit and customs: get ready!
                  </button>
                </template>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-right">
          <div class="personal-section">
            <h4>You prefer a personal contact?</h4>
            <p>Please find the phone numbers of our locations below.</p>
            <div class="personal-input">
              <template>
                <select class="sf-custom-select">
                  <option value="0">Choice of Service:</option>
                  <option value="1">Value</option>
                  <option value="2">Value</option>
                </select>
              </template>
              <template>
                <button
                  class="color-primary sf-button get-touch-button"
                  :aria-disabled="false"
                  :link="null"
                  type="button"
                  aria-label="button"
                >
                  Brexit and customs: get ready!
                </button>
              </template>
              <div class="border-divider"></div>
            </div>
            <div class="profile">
              <div class="border-divider top"></div>
              <h4>„Let’s grow together!“</h4>
              <div class="profile-details">
                <img src="../assets/images/icons/profile-img.png" alt="" />
                <div class="profile-info">
                  <h5>Michael Doe</h5>
                  <p>
                    Customer Support Lead <br />
                    CSG
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import {
  SfHeader,
  SfIcon,
  SfRadio,
  SfSelect,
  SfInput,
} from "@storefront-ui/vue";

export default defineComponent({
  components: {
    SfHeader,
    SfIcon,
    SfRadio,
    SfSelect,
    SfInput,
  },
});
</script>

<style lang="scss" scoped>

    @import "../assets/styles.scss";
.sf-footer-section {
  background-color: #006b6e;
  padding: 100px 0;

  .footer-container {
    max-width: 1270px;
    margin: auto;
    color: white;
    width: 100%;
    @media (max-width: 1440px) {
      width: 80%;
    }
    .footer-row {
      display: flex;
      width: 100%;
      @media (max-width: 1024px) {
        flex-direction: column;
      }
    }
    .footer-left {
      display: flex;
      flex-direction: column;
      flex-basis: 67%;
      max-width: 100%;
      padding-right: 50px;
      @media (max-width: 1024px) {
        padding-right: 0;
      }
      .footer-heading {
        margin-bottom: 0;
        font-size: 30px;
      }

      .footer-get-in-touch {
        font-size: 16px;

        h4 {
          font-weight: 600;
        }
      }

      .bottom-divider {
        width: 50px;
        height: 3px;
        border-radius: 20px;
        margin: 30px 0;
        background-color: #01a4b7;

        @media (max-width: 1024px) {
          margin-left: 0;
        }
      }

      .footer-form {
        .new-customer {
          font-weight: bold;
        }

        .customer-radios {
          display: flex;
          margin: 10px 0;
          @media (max-width: 1024px) {
            flex-direction: column;
          }
          .custom-radios {
            display: flex;
            align-items: center;
            color: white;
            a {
              color: white;
              text-decoration: underline;
            }
          }

          .sf-radio {
            label {
              padding-left: 0 !important;
            }
          }
        }

        .customer-inputs {
          .sf-custom-select {
            width: 100%;
            height: 50px;
            font-size: 16px;
            font-family: "Roboto", Sans;
            padding: 15px;
            color: #3d4d62;
          }

          .information-inputs {
            display: flex;
            flex-wrap: wrap;
            .informations {
              display: flex;
              max-width: 100%;
              flex-basis: 49.3%;
              padding: 0 10px 20px 0;
              @media (max-width: 1440px) {
                flex-basis: 49%;
              }
              @media (max-width: 1024px) {
                flex-basis: 100%;
                padding-right: 0;
              }
              &.pr-0 {
                padding-right: 0;
              }
              .sf-input {
                --input-background: white;
                --input-padding: 0 20px;
                --input-width: 100%;
                input {
                  border-radius: 4px !important;
                }
              }
            }
            .customer-select {
              --select-width: 100%;
              --select-height: 50px;
              --select-padding: 0;
              .sf-select__dropdown {
                .sf-select__placeholder {
                  font-family: "IBM Plex", Sans;
                }
              }
            }
            .customer-radios {
              width: 100%;
            }
          }
        }
      }
      .get-touch-button {
        width: 50%;
        @media (max-width: 1024px) {
          width: 100%;
        }
      }
    }
    .footer-right {
      display: flex;
      flex-direction: column;
      height: 100%;
      flex-basis: 33.33%;
      max-width: 100%;
      position: relative;
      margin: auto;

      &::before {
        content: "";
        position: absolute;
        top: -100px;
        left: 0;
        height: calc(100% + 200px);
        width: 1px;
        background-color: #fff;
        opacity: 0.25;
        @media (max-width: 1024px) {
          display: none;
        }
      }
      .personal-section {
        padding: 0 40px;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        @media (max-width: 1024px) {
          margin-top: 25px;
          padding: 0;
        }
        .sf-custom-select {
          width: 100%;
          height: 50px;
          font-size: 16px;
          font-family: "Roboto", Sans;
          padding: 15px;
          background-position-y: 20px;
          color: #3d4d62;
        }
        .profile {
          color: white;
          h4 {
            font-size: 25px;
            font-weight: 400;
            @media (max-width: 1024px) {
              text-align: center;
            }
          }
          .profile-details {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 10px;
            @media (max-width: 1024px) {
              flex-direction: column;
            }
            img {
              height: 81px;
              width: 81px;
              border-radius: 50%;
            }
            .profile-info {
              @media (max-width: 1024px) {
                text-align: center;
              }
              h5 {
                font-size: 16px;
                margin-bottom: 8px;
                @media (max-width: 1024px) {
                  margin-bottom: 0;
                }
              }
              p {
                @media (max-width: 1024px) {
                  margin-top: 5px;
                  line-height: 1.5;
                }
              }
            }
          }
        }
      }
    }
    .get-touch-button {
      height: 50px;
      border-radius: 4px;
      text-transform: unset;
      background-color: #01a4b7;
      font-size: 16px;
      color: #ffffff;
      font-weight: 600;
      margin-right: 20px;
      width: 100%;
      margin-top: 20px;
      &:hover {
        height: 60px;
        background-color: #ffffff;
        color: #01a4b7;
      }

      @media (max-width: 1024px) {
        width: 90%;
        margin-top: 20px;
        margin-right: 40px;
      }
    }
    .border-divider {
      border-bottom: 1px solid #fff;
      opacity: 0.25;
      height: 1px;
      width: 100%;
      margin: 30px 0;
      &.top {
        display: none;
        @media (max-width: 1024px) {
          display: block;
        }
      }
    }
    .custom-radio{
        display: flex;
        align-items: center;
        label{
            margin: 0 20px 0 10px;
        }
        input[type="radio"] {
          appearance: none;
          background-color: #006b6e;
          margin: 0;
          font: inherit;
          color: currentColor;
          width: 1.15em;
          height: 1.15em;
          border: 0.15em solid currentColor;
          border-radius: 50%;
          transform: translateY(-0.075em);
          display: grid;
          place-content: center;
        }
        input[type="radio"]::before {
          content: "";
          width: 0.65em;
          height: 0.65em;
          border-radius: 50%;
          transform: scale(0);
          transition: 120ms transform ease-in-out;
          box-shadow: inset 1em 1em transparent;
          background-color: white;
        }
        input[type="radio"]:checked::before {
          transform: scale(1);
        }
        .form-control:focus-within {
            color: transparent;
        }

        .underline {
            text-decoration: underline;
        }

        .email-icon {
            margin-left: 5px;
        }
    }
  }
}
</style>

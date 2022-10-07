<template>
    <div class="sf-footer-section">
        <div class="footer-container">
            <div class="footer-left">
                <h3 class="footer-heading">Customs Support - Take the load off your mind</h3>
                <div class="bottom-divider"></div>
                <div class="footer-get-in-touch">
                    <h4>Get in touch with one of our customs experts!</h4>
                    <p>Fill in the contact form or use the chat function on the website.</p>
                </div>
                <div class="footer-form">
                    <p class="new-customer">Are you a new or returning customer? *</p>
                    <div class="customer-radios">
                        <template>
                            <SfRadio name="Shipping" value="store" label="New" />
                        </template>
                        <template>
                            <SfRadio name="Shipping" value="store" label="Returning" />
                        </template>
                    </div>
                    <div class="customer-inputs">
                        <template>
                            <SfSelect class="customer-select" :required="false" valid :disabled="false"
                                errorMessage="This field is not correct." value="" placeholder="Choice of Service*">
                                <SfSelectOption value="amaranth">Amaranth</SfSelectOption>
                                <SfSelectOption value="amber">Amber</SfSelectOption>
                                <SfSelectOption value="arctic-lime">Arctic lime</SfSelectOption>
                                <SfSelectOption value="bluetiful">Bluetiful</SfSelectOption>
                                <SfSelectOption value="buff">Buff</SfSelectOption>
                            </SfSelect>
                        </template>
                        <div class="border-divider"></div>
                        <div class="information-inputs">
                            <div class="informations">
                                <template>
                                    <SfInput class="custom-input" value="" label="" name="name"
                                        placeholder="First name*" />
                                </template>
                            </div>
                            <div class="informations">
                                <template>
                                    <SfInput class="custom-input" value="" label="" name="name"
                                        placeholder="First name*" />
                                </template>
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
import { SfHeader, SfIcon, SfRadio, SfSelect, SfInput } from "@storefront-ui/vue";

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
.sf-footer-section {
    background-color: #006B6E;
    padding: 100px 0;

    .footer-container {
        max-width: 1270px;
        margin: auto;
        color: white;

        .footer-left {
            display: flex;
            flex-direction: column;
            flex-basis: 70%;
            max-width: 70%;

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
                    margin-left: 35px;
                }
            }

            .footer-form {
                .new-customer {
                    font-weight: bold;
                }

                .customer-radios {
                    display: flex;

                    .sf-radio {
                        label {
                            padding-left: 0 !important;
                        }
                    }
                }

                .customer-inputs {
                    .customer-select {
                        .sf-select__dropdown {
                            height: 50px !important;
                        }
                    }

                    .border-divider {
                        border-bottom: 1px solid #fff;
                        opacity: 0.25;
                        height: 1px;
                        width: 100%;
                        margin: 30px 0;
                    }

                    .information-inputs {
                        display: flex;
                        .informations {
                            display: flex;
                            max-width: 100%;
                            flex-basis: 48%;
                            &:nth-of-type(even){
                                margin-right: 10px;
                            }
                            .custom-input {
                                --input-background: white;
                                --input-padding: 20px;
                                --input-width: 100%;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
  
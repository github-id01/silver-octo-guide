<template>
    <div class="sf-footer-section">
        <div class="footer-container">
            <div class="footer-row">
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
                                <SfRadio class="radioBtn" name="Shipping" value="store" label="New" />
                            </template>
                            <template>
                                <SfRadio class="radioBtn" name="Shipping" value="store" label="Returning" />
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
                                <div class="informations pr-0">
                                    <template>
                                        <SfInput class="custom-input" value="" label="" name="name"
                                            placeholder="Last name*" />
                                    </template>
                                </div>
                                <div class="informations">
                                    <template>
                                        <SfInput class="custom-input" value="" label="" name="name"
                                            placeholder="Company*" />
                                    </template>
                                </div>
                                <div class="informations pr-0">
                                    <template>
                                        <SfInput class="custom-input" value="" label="" name="name"
                                            placeholder="Email*" />
                                    </template>
                                </div>
                                <div class="informations">
                                    <template>
                                        <SfInput class="custom-input" value="" label="" name="name"
                                            placeholder="Phone Number*" />
                                    </template>
                                </div>
                                <div class="informations pr-0">
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
                                </div>
                                <div class="customer-radios">
                                    <div class="informations">
                                        <template>
                                            <div class="custom-radios">
                                                <SfRadio name="Shipping" value="store" label="I agree with the" />
                                                <a href="">Terms and Conditions*</a>
                                            </div>
                                        </template>
                                    </div>
                                    <div class="informations">
                                        <template>
                                            <div class="custom-radios">
                                                <SfRadio name="Shipping" value="store" label="I want to sign up for the newsletter" />
                                                <a href=""></a>
                                            </div>
                                        </template>
                                    </div>
                                </div>
                                <template>
                                    <button class="color-primary sf-button get-touch-button" :aria-disabled="false" :link="null"
                                        type="button" aria-label="button">
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
                                <SfSelect class="customer-select" :required="false" valid :disabled="false"
                                    errorMessage="This field is not correct." value="" placeholder="Choice of Service*">
                                    <SfSelectOption value="amaranth">Amaranth</SfSelectOption>
                                    <SfSelectOption value="amber">Amber</SfSelectOption>
                                    <SfSelectOption value="arctic-lime">Arctic lime</SfSelectOption>
                                    <SfSelectOption value="bluetiful">Bluetiful</SfSelectOption>
                                    <SfSelectOption value="buff">Buff</SfSelectOption>
                                </SfSelect>
                            </template>
                            <template>
                                <button class="color-primary sf-button get-touch-button" :aria-disabled="false" :link="null"
                                    type="button" aria-label="button">
                                    Brexit and customs: get ready!
                                </button>
                            </template>
                            <div class="border-divider"></div>
                        </div>
                        <div class="profile">
                            <div class="border-divider top"></div>
                            <h4>„Let’s grow together!“</h4>
                            <div class="profile-details">
                                <img src="../assets/images/icons/profile-img.png" alt="">
                                <div class="profile-info">
                                    <h5>Michael Doe</h5>
                                    <p>Customer Support Lead <br> CSG</p>
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

    @import "../assets/styles.scss";
.sf-footer-section {
    background-color: #006B6E;
    padding: 100px 0;

    .footer-container {
        max-width: 1270px;
        margin: auto;
        color: white;
        width: 100%;
        @media (max-width:1440px){
            width: 80%;
        }
        .footer-row{
            display: flex;
            width: 100%;
            @media (max-width:768px){
                flex-direction: column;
            }
        }
        .footer-left {
            display: flex;
            flex-direction: column;
            flex-basis: 67%;
            max-width: 100%;
            padding-right: 50px;
            @media (max-width:768px){
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

                    .sf-radio__label{

                        color: #ffffff;
                    }
                    

                    @media (max-width:768px){
                        flex-direction: column;
                    }
                    .custom-radios{
                        display: flex;
                        align-items: center;
                        color: white;
                        a{
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
    
                    .customer-select {
                        .sf-select.is-selected {
                            .sf-select__dropdown {
                                --select-height: 50px !important;
                            }
                        }
                    }

                    .sf-input input {
                        border-radius: 4px !important;
                    }

                    .information-inputs {
                        display: flex;
                        flex-wrap: wrap;
                        .informations {
                            display: flex;
                            max-width: 100%;
                            flex-basis: 49.3%;
                            padding: 0 10px 20px 0;
                            @media (max-width:1440px){
                                flex-basis: 49%;
                            }
                            @media (max-width:768px){
                                flex-basis: 100%;
                                padding-right: 0;
                            }
                            &.pr-0{
                                padding-right: 0;
                            }
                            .sf-input{
                                --input-background: white;
                                --input-padding: 0 20px;
                                --input-width: 100%;
                                input{
                                    border-radius: 4px !important;
                                }
                            }
                        }
                        .customer-select{
                            --select-width: 100%;
                            --select-height: 50px;
                            --select-padding: 0;
                            .sf-select__dropdown{
                                .sf-select__placeholder{
                                    font-family: 'IBM Plex', Sans;
                                }
                            }
                        }
                        .customer-radios{
                            width: 100%;
                        }
                    }
                }
            }
            .get-touch-button{
                width: 50%;
                @media(max-width:768px){
                    width: 100%;
                }
            }
        }
        .footer-right{
            display: flex;
            flex-direction: column;
            height: 100%;
            flex-basis: 33.33%;
            max-width: 100%;
            position: relative;
            margin: auto;

            &::before{
                content: '';
                position: absolute;
                top: -100px;
                left: 0;
                height: calc(100% + 200px);
                width: 1px;
                background-color: #fff;
                opacity: 0.25;
                @media (max-width:768px){
                    display: none;
                }
            }
            .personal-section{
                padding: 0 40px;
                color: white;
                display: flex;
                flex-direction: column;
                justify-content: center;
                height: 100%;
                @media (max-width:768px){
                    margin-top: 25px;
                    padding: 0;
                }
                .profile{
                    color: white;
                    h4{
                        font-size: 25px;
                        font-weight: 400;
                        @media (max-width:768px){
                            text-align: center;
                        }
                    }
                    .profile-details{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin-top: 10px;
                        @media (max-width:768px){
                            flex-direction: column;
                        }
                        img{
                            height: 81px;
                            width: 81px;
                            border-radius: 50%;
                        }
                        .profile-info{
                            @media (max-width:768px){
                                text-align: center;
                            }
                            h5{
                                font-size: 16px;
                                margin-bottom: 8px;
                                @media (max-width:768px){
                                    margin-bottom: 0;
                                }
                            }
                            p{
                                @media (max-width:768px){
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
            background-color: #01A4B7;
            font-size: 16px;
            color: #ffffff;
            font-weight: 600;
            margin-right: 20px;
            width: 100%;
            margin-top: 20px;
    
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
            &.top{
                display: none;
                @media (max-width:768px){
                    display: block;
                }
            }
        }
    }
}
</style>
  
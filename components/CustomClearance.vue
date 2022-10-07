<template>
    <div class="sf-custom-clearance">

        <div class="overlay-data">
            <div class="text-work">
                <h3 class="client-text">Customs clearance after Brexit</h3>
                <div class="bottom-divider"></div>
                <p class="content-text">
                    Since 4 years we are successfully helping our customers to prepare their business for Brexit. Our Bexit customs agents are always up-to-date with the latest customs regulations after Brexit and look forward to support you with Brexit customs procedures.
                </p>
                <template>
                    <button class="color-primary sf-button get-touch-button" :aria-disabled="false" :link="null"
                        type="button" aria-label="button">
                        Brexit and customs: get ready!
                    </button>
                </template>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import { SfHeader, SfIcon } from "@storefront-ui/vue";

export default defineComponent({
    components: {
        SfHeader,
        SfIcon,
    },
});
</script>
  
<style lang="scss" scoped>
.sf-custom-clearance {
    background-image: url('../assets/images/icons/Gruppe\ maskieren\ 6.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 600px;
    @media (max-width: 1440px){
        width: 100%;
    }
    .overlay-data {
        max-width: 50%;
        background-image: url('../assets/images/icons/Rechteck\ 982.png');
        height: 600px;
        display: flex;
        align-items: center;
        @media(max-width:1024px){
            margin-top: auto;
            max-width: 100%;
            align-items: flex-end;
        }
        .text-work {
            max-width: 70%;
            margin: 0 0 0 auto;
            @media(max-width:1024px){
                margin: auto;
                margin-bottom: 40px;
            }
            h3{
                color: white;
                font-size: 30px;
            }
            .content-text{
                color: white;
                max-width: 80%;
                @media(max-width:1024px){
                    max-width: 100%;
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
        
                @media (max-width: 1024px) {
                    width: 90%;
                    margin-top: 20px;
                    margin-right: 40px;
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
        }
    }
}
</style>
  
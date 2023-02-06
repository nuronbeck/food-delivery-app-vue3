<template>
  <form :class="$style.forgotPassword" @submit.prevent>
    <h1 :class="$style.name">Reset password</h1>

    <BaseInput
      :class="$style.baseInput"
      label="Email"
      placeholder="name@example.com"
      :value="formData.email"
      :error="errors.email"
      @onInput="(value) => changeField('email', value)"
    ></BaseInput>

    <div>
      <BaseButton
        variant="primary"
        :class="$style.baseBtn"
        @onClick="reset"
        :loading="isLoading"
      >
        Reset
      </BaseButton>
    </div>
    <p :class="$style.text">
      You already have account? Please
      <router-link to="/auth/login" :class="$style.link">Login</router-link>
    </p>
  </form>
</template>

<script setup lang="ts">
import { Ref } from 'vue';
export interface IForgotPasswordPage {
  const formData = {
    ref()
  }
  // data() {
  //   return {
  //     isLoading: false,
  //     formData: {
  //       email: "",
  //     },
  //     errors: {
  //       email: "",
  //       password: "",
  //     },
  //   };
  // },
  // methods: {
  //   changeField(propertyName, value) {
  //     if (this.errors[propertyName] !== "") {
  //       this.errors[propertyName] = "";
  //     }

  //     this.formData[propertyName] = value;
  //   },
  //   reset() {
  //     // console.log(this.formData);
  //     this.isLoading = true;

  //     setTimeout(() => {
  //       this.errors.email = "* This email is not valid!";

  //       this.isLoading = false;
  //     }, 2500);
  //   },
  // },
};
</script>

<style module lang="scss">
.forgotPassword {
  width: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

.name {
  color: $color-dark;
  font-size: 32px;
  line-height: 82px;
  font-family: $base-font;
  font-weight: 700;
  letter-spacing: 0.1px;
}
.baseInput {
  margin-bottom: 28px !important;
}
.baseBtn {
  width: 100%;
  margin-bottom: 35px;
}
.text {
  color: $color-dark;
  font-family: $base-font;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
}
.link {
  font-size: 14px;
  color: $color-primary;
}

@include breakpoint("sm") {
  .forgotPassword {
    width: 95%;
  }
}
</style>

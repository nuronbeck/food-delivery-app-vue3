<template>
  <form :class="$style.signUp" @submit.prevent>
    <h1 :class="$style.name">Sign Up</h1>

    <BaseAlert
      v-if="!!serverError"
      :class="$style.alert"
      variant="danger"
      :message="serverError"
    />

    <BaseAlert
      v-if="!!serverSuccess"
      :class="$style.alert"
      variant="success"
      :message="serverSuccess"
    />

    <div :class="$style.userInfo">
      <BaseInput
        label="First Name"
        placeholder="First Name"
        :value="formData.firstName"
        :error="errors.firstName"
        @onInput="(value) => changeField('firstName', value)"
      />
      <BaseInput
        label="Last Name"
        placeholder="Last Name"
        :value="formData.lastName"
        :error="errors.lastName"
        @onInput="(value) => changeField('lastName', value)"
      />
    </div>
    <BaseInput
      label="Email"
      placeholder="name@example.com"
      :value="formData.email"
      :error="errors.email"
      @onInput="(value) => changeField('email', value)"
    />
    <BaseInput
      label="Phone number"
      placeholder="+998 (99) 324-42-91"
      :value="formData.phoneNumber"
      :error="errors.phoneNumber"
      @onInput="(value) => changeField('phoneNumber', value)"
    />
    <BaseInput
      :class="$style.baseInput"
      label="Password"
      placeholder="min. 8 characters"
      :value="formData.password"
      type="password"
      :showPassword="showPassword"
      :error="errors.password"
      @onPasswordToggle="showPasswordClick"
      @onInput="(value) => changeField('password', value)"
    />

    <BaseButton
      variant="primary"
      :class="$style.baseBtn"
      @onClick="register"
      :loading="isLoading"
    >
      Register
    </BaseButton>
    <p :class="$style.text">
      Do you want to out ?
      <router-link to="/auth/login" :class="$style.link"> Login </router-link>
    </p>
  </form>
</template>

<script setup lang="ts">
import client from "../../api";

export interface ISignPage {
  name: "SignPage",
  data() {
    return {
      isLoading: false,
      showPassword: false,
      serverError: "",
      serverSuccess: "",
      formData: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
      },
      errors: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
      },
    };
  },

  methods: {
    showPasswordClick() {
      this.showPassword = !this.showPassword;
    },
    changeField(propertyName, value) {
      if (this.errors[propertyName] !== "") {
        this.errors[propertyName] = "";
      }
      this.formData[propertyName] = value;
    },
    register() {
      this.isLoading = true;

      client
        .post("/api/auth/sign-up", this.formData)
        .then((response) => {
          this.serverError = "";
          this.serverSuccess = response.data.message;

          this.formData.firstName = "";
          this.formData.lastName = "";
          this.formData.email = "";
          this.formData.phoneNumber = "";
          this.formData.password = "";

          localStorage.setItem("foodDeliveryAppToken", response.data.token);
          this.$router.push("/profile");
        })
        .catch((error) => {
          const serverError = error.response.data;

          this.alertMessage = serverError.message;

          if (serverError.errors.firstName) {
            this.errors.firstName = serverError.errors.firstName;
          }

          if (serverError.errors.lastName) {
            this.errors.lastName = serverError.errors.lastName;
          }

          if (serverError.errors.email) {
            this.errors.email = serverError.errors.email;
          }

          if (serverError.errors.phoneNumber) {
            this.errors.phoneNumber = serverError.errors.phoneNumber;
          }

          if (serverError.errors.password) {
            this.errors.password = serverError.errors.password;
          }
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
};
</script>

<style module lang="scss">
.signUp {
  width: 60%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

.alert {
  margin-bottom: 16px;
}

.name {
  color: $color-dark;
  font-size: 32px;
  font-family: $base-font;
  margin-bottom: 40px;
  font-weight: 700;
  letter-spacing: 0.1px;
}

.userInfo {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0 10px;
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
  .signUp {
    width: 95%;
  }
}
</style>

<template>
  <div :class="$style.login">
    <h1 :class="$style.name">Login</h1>
    <p :class="$style.text">
      Sign in with your data that you entered during your registration.
    </p>

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
    <!-- ========Base inputs========= -->
    <BaseInput
      label="Email"
      type="email"
      placeholder="name@example.com"
      :value="formData.email"
      :error="errors.email"
      @onInput="(value) => changeField('email', value)"
    />

    <BaseInput
      :class="$style.baseInput"
      label="Password"
      type="password"
      placeholder="min.8 characters"
      :value="formData.password"
      :showPassword="showPassword"
      :error="errors.password"
      @onPasswordToggle="showPasswordClick"
      @onInput="(value) => changeField('password', value)"
    />

    <!-- ===========Base button========== -->
    <BaseButton
      variant="primary"
      class="login__baseBtn"
      @onClick="login"
      :loading="isLoading"
    >
      Login
    </BaseButton>

    <router-link to="/auth/forgot-password" class="login__forgotLink"
      >Forgot password</router-link
    >

    <div class="login__subText">
      <p>
        Don`t have an account?<router-link to="/auth/sign" class="login__link">
          Sign up</router-link
        >
      </p>
    </div>
  </div>
</template>

<script setup langs="ts">
import { mapActions } from "vuex";

export interface ILogin {
  data() {
    return {
      isLoading: false,
      showPassword: false,
      serverError: "",
      serverSuccess: "",
      formData: {
        email: "",
        password: "",
      },
      errors: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions({
      loginAction: "auth/login",
    }),
    showPasswordClick() {
      this.showPassword = !this.showPassword;
    },
    changeField(propertyName, value) {
      if (this.errors[propertyName] !== "") {
        this.errors[propertyName] = "";
      }
      this.formData[propertyName] = value;
    },
    login() {
      this.isLoading = true;

      this.loginAction(this.formData)
        .then((response) => {
          this.serverError = "";
          this.serverSuccess = response.data.message;

          this.formData.email = "";
          this.formData.password = "";

          localStorage.setItem("foodDeliveryAppToken", response.data.token);
          this.$router.push("/");
        })
        .catch((error) => {
          const serverError = error.response.data;

          this.serverError = serverError.message;

          if (serverError.errors.email) {
            this.errors.email = serverError.errors.email;
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
/* FORM*/
.login {
  width: 50%;
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
  line-height: 82px;
  font-family: $base-font;
  font-weight: 700;
  letter-spacing: 0.1px;
}
.text {
  display: none;
}

.baseInput {
  margin-bottom: 28px !important;
}

.baseCheckbox {
  margin-bottom: 40px;
}

.baseBtn {
  width: 100%;
  margin-bottom: 35px;
}

.forgotLink {
  color: $color-primary;
  display: block;
  font-family: $base-font;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  margin-bottom: 110px;
  &:hover {
    color: $color-primary;
  }
}

.subText {
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
  .login {
    transform: translateX(-50%) translateY(-40%);
    width: 95%;
  }

  .name {
    font-size: 60px;
  }

  .text {
    display: block;
    color: $color-grey-dark;
    font-family: $base-font;
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 45px;
    line-height: 20px;
    letter-spacing: 0.1px;
  }

  .link {
    padding-bottom: 32px;
  }
}
</style>

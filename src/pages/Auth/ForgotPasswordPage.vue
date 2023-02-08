<!-- <template>
  <form class="forgotPassword" @submit.prevent>
    <h1>Reset password</h1>

    <BaseInput
      :class="$style.baseInput"
      label="Email"
      placeholder="name@example.com"
      :value="formData.email"
      :error="errors.email"
      @onInput="(value) => changeField('email', value)"
    />

    <div>
      <BaseButton
        variant="primary"
        class="forgotPassword__baseBtn"
        @onClick="reset"
        :loading="isLoading"
      >
        Reset
      </BaseButton>
    </div>
    <p class="forgotPassword__text">
      You already have account? Please
      <router-link to="/auth/login" class="forgotPassword__link"
        >Login</router-link
      >
    </p>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";

export interface IForgotPassword {
  email: string;
  password: string;
}

const formData = ref({
  email: "",
});

const errors = ref({
  email: "",
  password: "",
});

const changeField = (propertyName: "email" | "password", value: string) => {
  formData.value[propertyName] = value;
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

@media screen and (max-width: 768px) {
  .forgotPassword {
    width: 95%;
  }
}
</style> -->

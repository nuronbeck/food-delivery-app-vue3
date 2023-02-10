<template>
  <div class="page-content">
    <div class="container">
      <h3 :class="$style.name">Account</h3>
      <div :class="$style.info">
        <h2 :class="$style.title">Personal information</h2>
        <p :class="$style.text">Avatar</p>
        <div :class="$style.action">
          <img
            :class="$style.img"
            src="@/assets/profile/blank-profile-picture.jpg"
          />

          <BaseButton
            v-if="isEditing"
            :class="$style.discardBtn"
            @onClick="cancelEditing"
          >
            Cancel
          </BaseButton>

          <BaseButton
            v-else
            variant="primary-outline"
            @onClick="isEditing = true"
          >
            Change
          </BaseButton>
        </div>

        <div :class="$style.input">
          <BaseInput
            label="First name"
            placeholder="Jane"
            :value="formData.firstName"
            :error="errors.firstName"
            :disabled="!isEditing || isLoading"
            @onInput="(value) => changeField('firstName', value)"
          />

          <BaseInput
            label="Last name"
            placeholder="Robertson"
            :value="formData.lastName"
            :error="errors.lastName"
            :disabled="!isEditing || isLoading"
            @onInput="(value) => changeField('lastName', value)"
          />

          <BaseInput
            label="Email"
            placeholder="jane.robertson@example.com"
            :value="formData.email"
            :error="errors.email"
            :disabled="!isEditing || isLoading"
            @onInput="(value) => changeField('email', value)"
          />

          <BaseInput
            label="Phone number"
            placeholder="+998 (99) 324-42-91"
            :value="formData.phoneNumber"
            :error="errors.phoneNumber"
            :disabled="!isEditing || isLoading"
            @onInput="(value) => changeField('phoneNumber', value)"
          />
        </div>

        <div :class="$style.checkbox">
          <h3 :class="$style.title">Email notifications</h3>
          <div :class="$style.wrapper">
            <BaseCheckbox
              label="New deals"
              :checked="formData.emailNotifications.newDeals"
              @onChange="(value) => changeField('newDeals', value)"
            />

            <BaseCheckbox
              label="New restaurants"
              :checked="formData.emailNotifications.newRestaurants"
              @onChange="(value) => changeField('newRestaurants', value)"
            />

            <BaseCheckbox
              label="Order statuses"
              :checked="formData.emailNotifications.orderStatuses"
              @onChange="(value) => changeField('orderStatuses', value)"
            />

            <BaseCheckbox
              label="Password changes"
              :checked="formData.emailNotifications.passwordChanges"
              @onChange="(value) => changeField('passwordChanges', value)"
            />
            <BaseCheckbox
              label="Special offers"
              :checked="formData.emailNotifications.specialOffers"
              @onChange="(value) => changeField('specialOffers', value)"
            />
            <BaseCheckbox
              label="Newsletter"
              :checked="formData.emailNotifications.newsLetter"
              @onChange="(value) => changeField('newsLetter', value)"
            />
          </div>
        </div>

        <div :class="$style.divider"></div>

        <div :class="$style.btns">
          <BaseButton
            :class="$style.dangerBtn"
            variant="danger-outline"
            @onClick="logout"
            >Log out</BaseButton
          >
          <div>
            <BaseButton
              v-if="isEditing"
              :class="SaveBtn"
              @onClick="saveChangeClick"
              :loading="isLoading"
              >Save changes</BaseButton
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/stores/authStore";
import { ref } from "vue";
import { useRouter } from "vue-router";

export interface IAccountPage {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

const router = useRouter();
const AuthStore = useAuthStore();
const isLoading = ref(false);
const isEditing = ref(false);

const formDate = ref({
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
});

const errors = ref({
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
});

const initPage = () => {
  formData.firstName = userData.firstName;
  formData.lastName = userData.lastName;
  formData.email = userData.email;
  formData.phoneNumber = userData.phoneNumber;
};

const cancelEditing = () => {
  (isEditing = false), initPage();
};

const changeField = (propertyName: "email" | "password", value: string) => {
  formDate.value[propertyName] = value;
  formData.emailNotifications.value[propertyName] = value;
};

const saveChangeClick = () => {
  isLoading = true;

  setTimeout(() => {
    isLoading = false;
    isEditing = false;
  }, 2500);
};
const logout = () => {
  logoutUser();
  router.push("/");
};
</script>

<style module lang="scss">
.info {
  background: $color-white;
  border: 1px solid $color-grey-lightest;
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 24px;
  // height: 100vh;
}

.title {
  font-family: $base-font;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.1px;
  margin-bottom: 16px;
  color: $color-dark;
}

.text {
  font-family: $base-font;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 8px;
  color: $color-grey-dark;
}

.action {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.img {
  cursor: pointer;
  border-radius: 12px;
  margin-right: 24px;
  width: 76px;
  height: 76px;
}

.input {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 15px;
}

.btns {
  display: flex;
  justify-content: space-between;
}
.discardBtn {
  margin-right: 16px;
}
.SaveBtn {
  min-width: 120px;
}

.wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px 16px;
  margin-bottom: 36px;
}

.divider {
  margin-top: 20px;
  margin-bottom: 20px;
  height: 1px;
  width: 100%;
  background-color: $color-grey-light;
}

// @media screen and (max-width: 768px) {
//   .account {
//     &__input {
//       grid-template-columns: 1fr;
//     }

//     &__btns {
//       flex-direction: column;

//       div {
//         &:nth-child(2) {
//           display: flex;
//           justify-content: space-between;
//         }

//         button {
//           width: 100%;
//         }
//       }

//       &-dangerBtn {
//         margin-bottom: 40px;
//       }
//     }
//   }

//   .profile-notifications {
//     &__wrapper {
//       grid-template-columns: 1fr;
//     }
//   }
// }
</style>

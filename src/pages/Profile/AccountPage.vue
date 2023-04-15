<template>
  <div>
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
          @on-click="cancelEditing"
        >
          Cancel
        </BaseButton>

        <BaseButton
          v-else
          variant="primary-outline"
          @on-click="isEditing = true"
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
          @on-input="(value) => changeField('firstName', value)"
        />

        <BaseInput
          label="Last name"
          placeholder="Robertson"
          :value="formData.lastName"
          :error="errors.lastName"
          :disabled="!isEditing || isLoading"
          @on-input="(value) => changeField('lastName', value)"
        />

        <BaseInput
          label="Email"
          placeholder="jane.robertson@example.com"
          :value="formData.email"
          :error="errors.email"
          :disabled="!isEditing || isLoading"
          @on-input="(value) => changeField('email', value)"
        />

        <BaseInput
          label="Phone number"
          placeholder="+998 (99) 324-42-91"
          :value="formData.phoneNumber"
          :error="errors.phoneNumber"
          :disabled="!isEditing || isLoading"
          @on-input="(value) => changeField('phoneNumber', value)"
        />
      </div>

      <div :class="$style.checkbox">
        <h3 :class="$style.title">Email notifications</h3>
        <div :class="$style.wrapper">
          <BaseCheckbox
            label="New deals"
            :checked="formData.emailNotifications.newDeals"
            @on-change="
              () =>
                changeSettingField(
                  'newDeals',
                  !formData.emailNotifications.newDeals
                )
            "
          />

          <BaseCheckbox
            label="New restaurants"
            :checked="formData.emailNotifications.newRestaurants"
            @on-change="
              () =>
                changeSettingField(
                  'newRestaurants',
                  !formData.emailNotifications.newRestaurants
                )
            "
          />

          <BaseCheckbox
            label="Order statuses"
            :checked="formData.emailNotifications.orderStatuses"
            @on-change="
              () =>
                changeSettingField(
                  'orderStatuses',
                  !formData.emailNotifications.orderStatuses
                )
            "
          />

          <BaseCheckbox
            label="Password changes"
            :checked="formData.emailNotifications.passwordChanges"
            @on-change="
              () =>
                changeSettingField(
                  'passwordChanges',
                  !formData.emailNotifications.passwordChanges
                )
            "
          />
          <BaseCheckbox
            label="Special offers"
            :checked="formData.emailNotifications.specialOffers"
            @on-change="
              () =>
                changeSettingField(
                  'specialOffers',
                  !formData.emailNotifications.specialOffers
                )
            "
          />
          <BaseCheckbox
            label="Newsletter"
            :checked="formData.emailNotifications.newsLetter"
            @on-change="
              () =>
                changeSettingField(
                  'newsLetter',
                  !formData.emailNotifications.newsLetter
                )
            "
          />
        </div>
      </div>

      <div :class="$style.divider"></div>

      <div :class="$style.btns">
        <BaseButton
          :class="$style.dangerBtn"
          variant="danger-outline"
          @on-click="logout"
          >Log out</BaseButton
        >
        <div>
          <BaseButton
            v-if="isEditing"
            :class="$style.SaveBtn"
            @on-click="saveChangeClick"
            :loading="isLoading"
            >Save changes</BaseButton
          >
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
const isLoading = ref<boolean>(false);
const isEditing = ref(false);

const formData = ref({
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",

  emailNotifications: {
    newDeals: false,
    newRestaurants: false,
    orderStatuses: false,
    passwordChanges: false,
    specialOffers: false,
    newsLetter: false,
  },
});

const errors = ref({
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
});

const initPage = () => {
  // formData.value.firstName = userData.firstName;
  // formData.value.lastName = userData.lastName;
  // formData.value.email = userData.email;
  // formData.value.phoneNumber = userData.phoneNumber;
};

const cancelEditing = () => {
  isEditing.value = false;
};

const changeField = (
  propertyName: "firstName" | "lastName" | "email" | "phoneNumber",
  value: string
) => {
  formData.value[propertyName] = value;
};

const changeSettingField = (
  propertyName:
    | "newDeals"
    | "newRestaurants"
    | "orderStatuses"
    | "passwordChanges"
    | "specialOffers"
    | "newsLetter",
  value: boolean
) => {
  formData.value.emailNotifications[propertyName] = value;
};

const saveChangeClick = () => {
  isLoading.value = true;

  setTimeout(() => {
    isLoading.value = false;
  }, 2500);
};
const logout = () => {
  AuthStore.logout();
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

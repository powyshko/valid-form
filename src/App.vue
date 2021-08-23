<template>
  <div id="app">
    <form @submit.prevent="onSubmit" class="client-form">
      <div class="client-form__info">
        <!-- Last name -->
        <BaseInput
          class="client-form__item"
          v-model.trim="clients.lastname"
          :v="$v.clients.lastname"
          :errorArray="errorsLastname"
          >Фамилия</BaseInput
        >
        <!-- First name -->
        <BaseInput
          class="client-form__item"
          v-model.trim="clients.firstname"
          :v="$v.clients.firstname"
          :errorArray="errorsFirstname"
          >Имя</BaseInput
        >
        <!-- Middle name -->
        <BaseInput
          class="client-form__item"
          v-model.trim="clients.middlename"
          :v="$v.clients.middlename"
          :errorArray="errorsMiddlename"
          >Отчество</BaseInput
        >
        <!-- Birthday -->
        <BaseInput
          class="client-form__item"
          v-model.trim="clients.birthday"
          :v="$v.clients.birthday"
          :errorArray="errorsBirthday"
          type="date"
          >Дата рождения</BaseInput
        >
        <!-- Phone -->
        <BaseInput
          class="client-form__item"
          v-model.trim="clients.phone"
          :v="$v.clients.phone"
          :errorArray="errorsPhone"
          type="tel"
          >Номер телефона</BaseInput
        >
        <!-- Gender -->
        <BaseInput
          class="client-form__item"
          v-model.trim="clients.gender"
          :v="$v.clients.gender"
          :errorArray="errorsGender"
          >Пол</BaseInput
        >
        <!-- Group client -->
        <BaseSelectMultiple
          :options="groupClient"
          v-model="clients.groupClient"
          :v="$v.clients.groupClient"
          :errorArray="errorsGroupClient"
          :multiple="true"
          >Группа клиентов</BaseSelectMultiple
        >
        <!-- Doctors -->
        <BaseSelect
          :options="doctors"
          v-model="clients.doctor"
          :v="$v.clients.doctor"
          >Лечащий врач</BaseSelect
        >
        <!-- isSMS -->
        <BaseCheckbox v-model="clients.checkSMS"
          >Не отправлять СМС</BaseCheckbox
        >
      </div>
      <BaseH2>Адрес: </BaseH2>
      <div class="client-form__info">
        <!-- Postcode -->
        <BaseInput
          class="client-form__item"
          v-model.trim="clients.postcode"
          :v="$v.clients.postcode"
          :errorArray="errorsPostcode"
          >Индекс</BaseInput
        >
        <!-- Country -->
        <BaseInput
          class="client-form__item"
          v-model.trim="clients.country"
          :v="$v.clients.country"
          :errorArray="errorsCountry"
          >Страна</BaseInput
        >
        <!-- Region -->
        <BaseInput
          class="client-form__item"
          v-model.trim="clients.region"
          :v="$v.clients.region"
          :errorArray="errorsRegion"
          >Область</BaseInput
        >
        <!-- City -->
        <BaseInput
          class="client-form__item"
          v-model.trim="clients.city"
          :v="$v.clients.city"
          :errorArray="errorsCity"
          >Город</BaseInput
        >
        <!-- Street -->
        <BaseInput
          class="client-form__item"
          v-model.trim="clients.street"
          :v="$v.clients.street"
          :errorArray="errorsStreet"
          >Улица</BaseInput
        >
        <!-- House -->
        <BaseInput
          class="client-form__item"
          v-model.trim="clients.house"
          :v="$v.clients.house"
          :errorArray="errorsHouse"
          >Дом</BaseInput
        >
      </div>
      <BaseH2>Паспорт: </BaseH2>
      <div class="client-form__info">
        <BaseSelect
          :options="documents"
          v-model="clients.typeDocument"
          :v="$v.clients.typeDocument"
          :errorArray="errorsTypeDocument"
          >Тип документа</BaseSelect
        >
        <!-- Series -->
        <BaseInput
          class="client-form__item"
          v-model.trim="clients.seriesDocument"
          :v="$v.clients.seriesDocument"
          :errorArray="errorsSeriesDocument"
          >Серия</BaseInput
        >
        <!-- NumDocument -->
        <BaseInput
          class="client-form__item"
          v-model.trim="clients.numDocument"
          :v="$v.clients.numDocument"
          :errorArray="errorsNumDocument"
          >Номер</BaseInput
        >
        <!-- issuedBy -->
        <BaseInput
          v-model.trim="clients.issuedBy"
          :v="$v.clients.issuedBy"
          :errorArray="errorsIssuedBy"
          >Кем выдан</BaseInput
        >
        <!-- dateOfIssue -->
        <BaseInput
          class="client-form__item"
          v-model.trim="clients.dateOfIssue"
          :v="$v.clients.dateOfIssue"
          :errorArray="errorsDateOfIssue"
          type="date"
          >Дата выдачи</BaseInput
        >
      </div>
      <Message v-if="msg">{{ msg }}</Message>
      <BaseButton type="submit">Отправить</BaseButton>
    </form>
  </div>
</template>

<script>
import BaseInput from "@/components/UI/BaseInput";
import BaseCheckbox from "@/components/UI/BaseCheckbox";
import BaseSelect from "@/components/UI/BaseSelect";
import BaseSelectMultiple from "@/components/UI/BaseSelectMultiple";
import BaseButton from "@/components/UI/BaseButton";
import BaseH2 from "@/components/typography/BaseH2";
import Message from "@/components/UI/Message";

import {
  required,
  minLength,
  maxLength,
  numeric,
} from "vuelidate/lib/validators";

export default {
  name: "App",
  components: {
    BaseInput,
    BaseCheckbox,
    BaseButton,
    BaseH2,
    BaseSelect,
    BaseSelectMultiple,
    Message,
  },
  data() {
    return {
      groupClient: [
        {
          option: 1,
          value: "VIP",
        },
        {
          option: 2,
          value: "Проблемные",
        },
        {
          option: 3,
          value: "ОМС",
        },
      ],
      doctors: [
        {
          option: 1,
          value: "Иванов",
        },
        {
          option: 2,
          value: "Захоров",
        },
        {
          option: 3,
          value: "Чернышева",
        },
      ],
      documents: [
        {
          option: 1,
          value: "Паспорт",
        },
        {
          option: 2,
          value: "Свидетельство о рождении",
        },
        {
          option: 3,
          value: "Вод. удостоверение",
        },
      ],
      clients: {
        lastname: "",
        firstname: "",
        middlename: "",
        birthday: "",
        phone: "",
        gender: "",
        groupClient: [],
        doctor: "",
        checkSMS: false,
        postcode: "",
        country: "",
        region: "",
        city: "",
        street: "",
        house: "",
        typeDocument: "",
        seriesDocument: "",
        numDocument: "",
        issuedBy: "",
        dateOfIssue: "",
      },
      msg: "",
    };
  },
  validations: {
    clients: {
      lastname: {
        required,
      },
      firstname: {
        required,
      },
      middlename: {
        isString(value) {
          return isNaN(value) || value == "";
        },
      },
      birthday: {
        required,
      },
      phone: {
        required,
        minLength: minLength(11),
        maxLength: maxLength(11),
        isphone(value) {
          return value[0] === "7";
        },
      },
      gender: {
        isGender(value) {
          return (
            value.toLowerCase() === "женщина" ||
            value.toLowerCase() === "мужчина" ||
            value === ""
          );
        },
      },
      groupClient: {
        required,
      },
      doctor: {},
      checkSMS: {},
      postcode: {
        minLength: minLength(6),
        numeric,
      },
      country: {
        isString(value) {
          return isNaN(value) || value == "";
        },
      },
      region: {
        isString(value) {
          return isNaN(value) || value == "";
        },
      },
      city: {
        required,
        isString(value) {
          return isNaN(value) || value == "";
        },
      },
      street: {
        isString(value) {
          return isNaN(value) || value == "";
        },
      },
      house: {
        numeric,
      },
      typeDocument: {
        required,
      },
      seriesDocument: {
        minLength: minLength(4),
        maxLength: maxLength(4),
        numeric,
      },
      numDocument: {
        minLength: minLength(6),
        maxLength: maxLength(6),
        numeric,
      },
      issuedBy: {
        isString(value) {
          return isNaN(value) || value == "";
        },
      },
      dateOfIssue: {
        required,
      },
    },
  },
  computed: {
    errorsLastname() {
      const errors = [];
      !this.$v.clients.lastname.required &&
        errors.push("Поле обязательно для заполнения");
      return errors;
    },
    errorsFirstname() {
      const errors = [];
      !this.$v.clients.lastname.required &&
        errors.push("Поле обязательно для заполнения");
      return errors;
    },
    errorsMiddlename() {
      const errors = [];
      !this.$v.clients.middlename.isString &&
        errors.push(`Отчество не должно быть числом`);

      return errors;
    },
    errorsBirthday() {
      const errors = [];
      !this.$v.clients.birthday.required &&
        errors.push("Поле обязательно для заполнения");
      return errors;
    },
    errorsPhone() {
      const errors = [];
      !this.$v.clients.phone.required &&
        errors.push("Поле обязательно для заполнения");
      !this.$v.clients.phone.minLength &&
        errors.push(
          `Номер телефона не должен быть меньше ${this.$v.clients.phone.$params.minLength.min}`
        );
      !this.$v.clients.phone.maxLength &&
        errors.push(
          `Номер телефона не должен быть больше ${this.$v.clients.phone.$params.maxLength.max}`
        );
      !this.$v.clients.phone.isPhone &&
        errors.push(`Номер телефона должен начинаться с 7`);
      return errors;
    },
    errorsGender() {
      const errors = [];
      !this.$v.clients.gender.isGender &&
        errors.push(`Введите Женщина / Мужчина`);
      return errors;
    },
    errorsGroupClient() {
      const errors = [];
      !this.$v.clients.groupClient.required &&
        errors.push("Поле обязательно для заполнения");
      return errors;
    },
    errorsPostcode() {
      const errors = [];
      !this.$v.clients.postcode.minLength &&
        errors.push(
          `индекс не должен быть меньше ${this.$v.clients.postcode.$params.minLength.min}`
        );
      !this.$v.clients.postcode.numeric &&
        errors.push(`индекс должен быть числом`);
      return errors;
    },
    errorsCountry() {
      const errors = [];
      !this.$v.clients.country.isString &&
        errors.push(`Страна не может быть числом`);

      return errors;
    },
    errorsRegion() {
      const errors = [];
      !this.$v.clients.region.isString &&
        errors.push(`Область не может быть числом`);

      return errors;
    },
    errorsCity() {
      const errors = [];
      !this.$v.clients.city.required &&
        errors.push("Поле обязательно для заполнения");
      !this.$v.clients.city.isString &&
        errors.push(`Город не может быть числом`);

      return errors;
    },
    errorsStreet() {
      const errors = [];
      !this.$v.clients.street.isString &&
        errors.push(`Улица не может быть числом`);

      return errors;
    },
    errorsHouse() {
      const errors = [];
      !this.$v.clients.house.numeric &&
        errors.push(`№ дома должен быть числом`);

      return errors;
    },
    errorsTypeDocument() {
      const errors = [];
      !this.$v.clients.typeDocument.required &&
        errors.push("Поле обязательно для заполнения");
      return errors;
    },
    errorsSeriesDocument() {
      const errors = [];
      !this.$v.clients.seriesDocument.minLength &&
        errors.push(
          `Серия паспорта не должна быть меньше ${this.$v.clients.seriesDocument.$params.minLength.min} чисел`
        );
      !this.$v.clients.seriesDocument.maxLength &&
        errors.push(
          `Серия паспорта не должна быть больше ${this.$v.clients.seriesDocument.$params.maxLength.max} чисел`
        );

      !this.$v.clients.seriesDocument.numeric && errors.push(`Введите число`);
      return errors;
    },
    errorsNumDocument() {
      const errors = [];
      !this.$v.clients.numDocument.minLength &&
        errors.push(
          `№ паспорта не должен быть меньше ${this.$v.clients.numDocument.$params.minLength.min} чисел`
        );
      !this.$v.clients.numDocument.maxLength &&
        errors.push(
          `№ паспорта не должен быть больше ${this.$v.clients.numDocument.$params.maxLength.max} чисел`
        );

      !this.$v.clients.numDocument.numeric && errors.push(`Введите число`);
      return errors;
    },
    errorsIssuedBy() {
      const errors = [];
      !this.$v.clients.issuedBy.isString && errors.push(`Не может быть числом`);
      return errors;
    },
    errorsDateOfIssue() {
      const errors = [];
      !this.$v.clients.dateOfIssue.required &&
        errors.push("Поле обязательно для заполнения");
      return errors;
    },
  },
  methods: {
    onSubmit(e) {
      this.$v.clients.$touch();
      if (!this.$v.clients.$invalid) {
        const clients = {
          ...this.clients,
        };
        if (clients) {
          this.msg = "Клиент успешно создан";
          setTimeout(() => {
            this.msg = "";
          }, 3000);
          this.clients.lastname = "";
          this.clients.firstname = "";
          this.clients.middlename = "";
          this.clients.birthday = "";
          this.clients.phone = "";
          this.clients.gender = "";
          this.clients.groupClient = [];
          this.clients.doctor = "";
          this.clients.checkSMS = false;
          this.clients.postcode = "";
          this.clients.country = "";
          this.clients.region = "";
          this.clients.city = "";
          this.clients.street = "";
          this.clients.house = "";
          this.clients.typeDocument = "";
          this.clients.seriesDocument = "";
          this.clients.numDocument = "";
          this.clients.issuedBy = "";
          this.clients.dateOfIssue = "";
          this.$v.clients.$reset();
        }
      }
    },
  },
};
</script>

<style lang="sass">
.client-form
	max-width: 60%
	margin: 0 auto
	padding: 50px 10px 50px 10px
	font-size: 16px

	@media (max-width: 550px)
		max-width: 100%

	&__info
		margin: 20px 0px 20px 0px
		display: flex
		align-items: flex-start
		justify-content: space-between
		flex-wrap: wrap

		@media (max-width: 768px)
			flex-direction: column

	&__item
		width: 48%

		@media (max-width: 768px)
			width: 100%

	&__subtitle
		width: 100%
</style>

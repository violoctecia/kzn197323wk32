<script setup>
import { useForm, ErrorMessage, Field } from 'vee-validate';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    name: Yup.string()
        .required('Имя обязательно для заполнения')
        .min(2, 'Имя должно содержать не менее 2 символов'),
    phone: Yup.string()
        .required('Номер телефона обязателен для заполнения')
        .matches(/^\+?[1-9]\d{1,14}$/, 'Неправильный формат номера телефона')
});

const { handleSubmit, isSubmitting, isValid } = useForm({
    validationSchema,
    initialValues: {
        name: '',
        phone: '',
    },
});

const onSubmit = handleSubmit(values => {
    console.log('Данные формы:', values);
});
</script>

<template>
    <section>
        <div class="container">
            <img src="/images/human.svg" alt=" " loading="lazy">
            <div class="form">
                <form @submit.prevent="onSubmit" novalidate>
                    <span class="title">Готовы сделать заказ или есть вопросы?</span>
                    <div class="inputs">
                        <div class="input">
                            <Field name="name" placeholder="Ваше имя" />
                            <ErrorMessage name="name" />
                        </div>
                        <div class="input">
                            <Field name="phone" placeholder="Номер телефона" pattern="[0-9]*" />
                            <ErrorMessage name="phone" />
                        </div>
                    </div>
                    <button type="submit" class="button">
                        Оставить заявку
                    </button>
                </form>
                <span>Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности и обработкой персональных данных.</span>
            </div>
        </div>
    </section>
</template>


<style scoped>
section {
    background: var(--dark-blue);
}

.container {
    padding-top: 30px;
    max-width: 920px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.form {
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    span {
        font-weight: 400;
        font-size: 10px;
        text-align: center;
        color: #9B9BAF;
    }
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: var(--white);
        border-radius: 20px;
        padding: 25px;

        .title {
            font-weight: 500;
            font-size: 20px;
            text-align: center;
            color: var(--dark-blue);
            margin-bottom: 15px;
        }


        .inputs {
            margin-bottom: 25px;
            display: flex;
            flex-direction: column;
            gap: 15px;
            width: 100%;

            .input {
                display: flex;
                flex-direction: column;
                gap: 8px;

                input {
                    width: 100%;
                    border-radius: 60px;
                    padding: 15px 25px;
                    background: #f6f7f8;

                    font-family: var(--second-family), sans-serif;
                    font-weight: 400;
                    font-size: 16px;
                    color: var(--dark-blue);
                }

                span {
                    text-align: start;
                    padding-left: 25px;
                    font-family: var(--second-family), sans-serif;
                    font-weight: 500;
                    font-size: 11px;
                    color: red;
                }
            }
        }
    }
}

input::placeholder {
    font-family: var(--second-family), sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #9B9BAF;
}
@media (max-width: 900px) {
    .container {
        padding-top: 45px;
        max-width: none;
        flex-direction: column-reverse;
    }
    img {
        max-width: 460px;
        width: 100%;
    }
    .form {
        max-width: 600px;
        form {

            .title {
                margin-bottom: 17px;
                max-width: 95%;
            }


            .inputs {

                .input {
                    gap: 5px;

                    span {
                        padding-left: 15px;
                    }
                }
            }
        }
    }
}
</style>
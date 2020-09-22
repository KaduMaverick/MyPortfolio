<template>
  <section class="contact">
      <form class="form" name="contactus" action="/contact" method="post"  netlify netlify-honeypot="bot-field">
        <div class="form__group">
          <input
            type="text"
            placeholder=""
            class="form__input"
            id="first-name"
          />
          <label for="first-name" class="form__label">First Name</label>
        </div>
        <div class="form__group">
          <input
            type="password"
            placeholder=""
            class="form__input"
            id="last-name"
          />
          <label for="last-name" class="form__label">Last Name</label>
        </div>
        <div class="form__group">
          <input
            type=""
            placeholder=""
            class="form__input"
            id="email"
          />
          <label for="email" class="form__label">Email</label>
        </div>

        <div class="form__group">
             <MazPhoneNumberInput v-model="yourValue" />
        </div>

        <div class="form__group">
          <textarea
            type="password"
            placeholder=""
            class="form__input"
            id="message"
          />
          <label for="message" class="form__label">message</label>
        </div>
      </form>
  </section>
</template>
<script>


export default {
    
}
</script>

<style lang="scss">
    .contact{
        max-width: 500px;
        margin: 0 auto;
        margin-top: 300px;
    }

    .form{

      &__group{
        width: 100%;
        position: relative;
        margin-bottom: 20px;
      }

      &__label{
        position: absolute;
        font-size: 14px;
        top: 1.1rem;
        left: 1.1rem;
        display: none;
      }
      
      &__input{
        width: 100%;
        outline: none;
        border: 1px solid #444444;
        border-radius: 5px;
        padding: 1.1rem;
      }

      
      
    }
</style>
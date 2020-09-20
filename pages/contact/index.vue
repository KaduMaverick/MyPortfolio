<template>
  <section class="contact">
      <form class="form">
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
            type="password"
            placeholder=""
            class="form__input"
            id="email"
          />
          <label for="email" class="form__label">Email</label>
        </div>

        <MazPhoneNumberInput v-model="yourValue" />
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
</style>
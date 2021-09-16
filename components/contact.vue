<template>
  <div class="contact-view">
    <div class="lg:w-1/2 w-full" style="">
      <div>
        <h2 class="sharp-h2 mb-3 xl:block lg:block hidden">
          Need help? Reach out to us
        </h2>
        <h2 class="sharp-h2 lg:mb-3 mb-4 lg:hidden block">
          We could<br />get the best loans for<br />you in the centralised<br />Market
        </h2>
        <p class="inter">Xante@gmail.com</p>
      </div>
      <div class="lg:mt-96 xl:block lg:block hidden">
        <h4 class="sharp-sans font-semi-bold mb-3">Connect with us</h4>
        <ul class="flex items-center gap-4 inter">
          <li><a href="">Facebook</a></li>
          <li><a href="">Twitter</a></li>
          <li><a href="">Linkedin</a></li>
          <li><a href="">Instagram</a></li>
        </ul>
      </div>
    </div>

    <div class="lg:w-1/2 w-full">
      <h4 class="inter xl:block lg:block hidden">Send us a message</h4>
      <form
        id="contact-form"
        class="w-full lg:mt-10 mt-12 grid lg:grid-cols-2 grid-cols-1 gap-8"
      >
        <div class="w-full flex flex-col items-start">
          <label for="fname">First name</label>
          <input
            class="w-full"
            type="text"
            name="fname"
            placeholder="Enter first name"
          />
        </div>
        <div class="w-full flex flex-col items-start">
          <label for="lname">Last name</label>
          <input
            class="w-full"
            type="text"
            name="lname"
            placeholder="Enter last name"
          />
        </div>
        <div class="w-full flex flex-col items-start lg:col-span-2">
          <label for="email">Email address</label>
          <input
            class="w-full"
            type="email"
            name="email"
            placeholder="Enter email address here"
          />
        </div>
        <div class="w-full flex flex-col items-start lg:col-span-2">
          <label for="msg">Message</label>
          <textarea
            class="w-full h-48"
            type="text"
            name="msg"
            placeholder="Start typing here"
          ></textarea>
        </div>
        <div class="lg:col-span-2 w-full text-center">
          <input type="submit" value="Send Message" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.contact-view {
  padding: 160px 120px 228px 120px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 32px;
}

#contact-form label {
  font-family: inter;
  margin-bottom: 8px;
}

#contact-form input,
textarea {
  background: #0b0f19;
  border-radius: 2px;
  padding: 19px 16px;
}

#contact-form input ::placeholder {
  color: #afadb4;
  font-family: inter;
}

#contact-form input[type="submit"] {
  width: 378px;
  background: #281e5d;
  /* margin: 0 101px; */
  font-family: inter;
}

@media screen and (max-width: 1024px) {
  .contact-view {
    padding: 160px 50px 195px 50px;
  }
}

@media screen and (max-width: 768px) {
  .contact-view {
    display: block;
  }

  .contact-view {
    padding: 120px 24px 195px 24px;
  }

  #contact-form input[type="submit"] {
    width: 327px;
  }
}
</style>
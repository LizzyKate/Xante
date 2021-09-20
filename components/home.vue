<template>
  <section class="pt-12 cover">
    <div class="flex wrapper items-center justify-between" style="">
      <div class="w-1/2 crypto">
        <!-- mb-20 -->
        <h1 class="font-bold">
          Smart & Intelligent Search across Cryptocurrency & Traditional Markets
          for the best return on your assets.
        </h1>
        <p class="mt-6 font-thin">
          XanTe focuses on finding the best yields and return across financial
          markets by connecting Lenders and Borrowers, aggregating data points
          in order to present consumers with offers in real time.
        </p>
        <div class="flex space-x-4 items-center mt-14">
          <nuxt-link to="" class="central">Centralised</nuxt-link>
          <nuxt-link to="" class="central">Decentralised</nuxt-link>
        </div>
      </div>
      <div class="w-1/2 relative">
        <img src="/images/network.png" class="w-full" alt="" />
        <div class="absolute first">
          <img src="/images/first_trans.png" alt="" />
        </div>
        <div class="second absolute">
          <img src="/images/second.png" alt="" />
        </div>
      </div>
    </div>
    <div class="comparing flex justify-between items-center">
      <div class="lend w-1/2 relative">
        <h2>Compare borrowing and lending</h2>
        <p class="mt-4 font-thin">
          XanTe searches across centralised and Decentralised cryptocurrency and
          traditional financial markets.
        </p>
        <div class="mt-8">
          <nuxt-link to="/market" class="now">Compare Now</nuxt-link>
        </div>
        <div class="absolute third">
          <img src="/images/third.png" alt="" />
        </div>
      </div>
      <div class="w-1/2">
        <img src="/images/compare.png" class="w-full" alt="" />
      </div>
    </div>
    <div class="data flex justify-between items-center">
      <div class="w-1/2">
        <img src="/images/phone.png" class="w-1/2" alt="" />
      </div>
      <div class="points w-1/2 relative">
        <h2>
          XanTe compares and displays aggregated data points to enable users
          make smart and informed decisions.
        </h2>
        <p class="mt-4 font-thin">
          XanTe brings lenders and borrowers to a unified platform across
          decentralised protocols and centralised providers.
        </p>
        <div class="absolute fourth">
          <img src="/images/fourth.png" alt="" />
        </div>
      </div>
    </div>
    <div class="smart flex justify-between items-center">
      <div class="finance w-1/2 relative">
        <h2>Smart Financial Decisions</h2>
        <p class="mt-4 font-thin">
          XanTe empowers users to make smart decisions by providing useful
          financial decisioning tools like Earnings Calculator, Reward finders,
          Wallet aggregators
        </p>
        <div class="absolute third">
          <img src="/images/third.png" alt="" />
        </div>
      </div>
      <div class="w-1/2">
        <img src="/images/smart.png" class="w-full" alt="" />
      </div>
    </div>
    <div class="users flex justify-between items-center">
      <div class="w-1/2">
        <img src="/images/users.png" class="w-4/5" alt="" />
      </div>
      <div class="use w-1/2 relative">
        <h2 class="font-thin">
          <b>XanTe</b> empowers users to make smart decisions by providing
          useful financial decisioning tools like Earnings Calculator, Reward
          finders, Wallet aggregators
        </h2>
        <div class="absolute fifth">
          <img src="/images/fourth.png" alt="" />
        </div>
      </div>
    </div>
    <div class="analysis wrapper">
      <div class="flex items-center justify-between">
        <div class="w-1/2">
          <h2 class="sans">Market Analysis</h2>
          <p class="mt-2 w-1/2">
            XanTe provides a market data, overview, trends and statistics
          </p>
          <!-- <div class="mt-11 flex space-x-4 "></div> -->
        </div>
        <div class="w-1/2 justify-end flex items-center space-x-3">
          <nuxt-link to="/market" class="link"
            >See full market anaylsis</nuxt-link
          >
          <nuxt-link to="/compare">
            <img src="/images/forward.png" alt="" />
          </nuxt-link>
        </div>
      </div>
      <div class="flex items-end justify-between mt-14">
        <div class="w-1/2">
          <img src="/images/graph.png" alt="" />
        </div>
        <div class="grid grid-cols-2 gap-2 w-1/2">
          <div class="coin py-12 flex items-center justify-center">
            <img src="/images/bitcoin.png" alt="" />
          </div>
          <div class="coin py-12 flex items-center justify-center">
            <img src="/images/lite.png" alt="" />
          </div>
          <div class="coin py-12 flex items-center justify-center">
            <img src="/images/triple.png" alt="" />
          </div>
          <div class="coin py-12 flex items-center justify-center">
            <img src="/images/tether.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.cover {
  background: rgba(145, 20, 255, 0.08);
}
.crypto h1 {
  font-family: 'Sharp-sans' !important;
  line-height: 60px !important;
}
.crypto p {
  width: 81%;
  line-height: 24px !important;
}
.central {
  background: #3f318c;
  padding: 20px 70px;
  border-radius: 4px;
}
.comparing {
  background: #081b3d;
  padding: 148px 181px;
}
.lend h2 {
  font-family: 'Sharp-sans' !important;
  width: 40%;
  font-weight: 600;
  line-height: 48px;
}
.lend p {
  width: 55%;
  line-height: 24px !important;
}
.data {
  background: #0a132b;
  padding: 23px 181px 116px 181px;
}
.points h2 {
  font-family: 'Sharp-sans' !important;
}
.points p {
  width: 50%;
  line-height: 24px !important;
}
.smart {
  background: #081b3d;
  padding: 64px 181px 86px 181px;
}
.smart h2 {
  font-family: 'Sharp-sans' !important;
  width: 80%;
}
.smart p {
  width: 70%;
  line-height: 24px !important;
}
.users {
  background: #0a132b;
  padding: 22px 181px 129px 181px;
}
.use h2 {
  /* font-family: 'Sharp-sans' !important; */
  font-weight: 400;
  font-size: 27px;
}
.analysis {
  background: #081b3d;
  padding-top: 42px !important;
  padding-bottom: 51px !important;
}
.link {
  color: #a2f2cd;
  font-size: 16px;
  font-family: 'Mulish';
  font-weight: 600;
}
.coin {
  background: #0a132b;
  border-radius: 10px;
}
.now {
  width: 171px;
  height: 53px;
  background: #056237;
  border-radius: 4px;
  padding: 19px 45px;
  font-family: 'Mulish';
  font-size: 12px;
}
.first {
  bottom: -39px;
  left: -303px;
  z-index: 50;
}
.second {
  bottom: -260px;
  right: 0px;
  z-index: 50;
}
.third {
  left: -79px;
  top: 261px;
  z-index: 50;
}
.fourth {
  top: 330px;
  right: -83px;
  z-index: 50;
}
.fifth {
  top: 255px;
  right: 0px;
  z-index: 50;
}
</style>
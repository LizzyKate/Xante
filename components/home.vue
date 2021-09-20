<template>
  <section class="xl:pt-12 lg:pt-32 pt-24 cover">
    <div class="xl:flex block wrapper items-center justify-between" style="">
      <div class="xl:w-1/2 w-full crypto">
        <!-- mb-20 -->
        <h1 class="font-bold xl:text-left text-center">
          Smart & Intelligent Search across Cryptocurrency & Traditional Markets
          for the best return on your assets.
        </h1>
        <p class="mt-6 font-thin xl:text-left text-center">
          XanTe focuses on finding the best yields and return across financial
          markets by connecting Lenders and Borrowers, aggregating data points
          in order to present consumers with offers in real time.
        </p>
        <div class="xl:flex block xl:space-x-4 items-center mt-14">
          <div>
            <button class="central xl:w-64 py-5 w-full">Centralised</button>
          </div>
          <div class="xl:mt-0 mt-6">
            <button class="central xl:w-64 py-5 w-full">Decentralised</button>
          </div>
        </div>
      </div>
      <div class="xl:w-1/2 w-full relative xl:mt-0 mt-8">
        <img src="/images/network.png" class="w-full" alt="" />
        <div class="absolute first xl:block hidden">
          <img src="/images/first_trans.png" alt="" />
        </div>
        <div class="second absolute xl:block hidden">
          <img src="/images/second.png" alt="" />
        </div>
      </div>
    </div>
    <div class="comparing xl:flex block justify-between items-center">
      <div class="lend xl:w-1/2 w-full relative">
        <h2 class="xl:w-2/5 w-full xl:text-left text-center">
          Compare borrowing and lending
        </h2>
        <p class="mt-4 font-thin xl:text-left text-center">
          XanTe searches across centralised and Decentralised cryptocurrency and
          traditional financial markets.
        </p>
        <div class="mt-8">
          <button class="now w-40 w-full">Compare Now</button>
        </div>
        <div class="absolute third xl:block hidden">
          <img src="/images/third.png" alt="" />
        </div>
      </div>
      <div class="xl:w-1/2 w-full xl:mt-0 mt-8">
        <img src="/images/compare.png" class="w-full" alt="" />
      </div>
    </div>
    <div class="data xl:flex block justify-between items-center">
      <div class="xl:w-1/2 w-full">
        <img src="/images/phone.png" class="xl:w-1/2 w-full" alt="" />
      </div>
      <div class="points xl:mt-0 mt-12 xl:w-1/2 w-full relative">
        <h2 class="xl:text-left text-center">
          XanTe compares and displays aggregated data points to enable users
          make smart and informed decisions.
        </h2>
        <p class="mt-4 xl:w-1/2 w-full xl:text-left text-center font-thin">
          XanTe brings lenders and borrowers to a unified platform across
          decentralised protocols and centralised providers.
        </p>
        <div class="absolute fourth xl:block hidden">
          <img src="/images/fourth.png" alt="" />
        </div>
      </div>
    </div>
    <div class="smart xl:flex block justify-between items-center">
      <div class="finance xl:w-1/2 w-full relative">
        <h2 class="xl:text-left text-center">Smart Financial Decisions</h2>
        <p class="mt-4 font-thin xl:text-left text-center">
          XanTe empowers users to make smart decisions by providing useful
          financial decisioning tools like Earnings Calculator, Reward finders,
          Wallet aggregators
        </p>
        <div class="absolute third xl:block hidden">
          <img src="/images/third.png" alt="" />
        </div>
      </div>
      <div class="xl:w-1/2 w-full xl:mt-0 mt-8">
        <img src="/images/smart.png" class="w-full" alt="" />
      </div>
    </div>
    <div class="users xl:flex block justify-between items-center">
      <div class="xl:w-1/2 w-full">
        <img src="/images/users.png" class="xl:w-4/5 w-full" alt="" />
      </div>
      <div class="use xl:w-1/2 w-full relative">
        <h2 class="font-thin xl:text-left text-center">
          <b>XanTe</b> empowers users to make smart decisions by providing
          useful financial decisioning tools like Earnings Calculator, Reward
          finders, Wallet aggregators
        </h2>
        <div class="absolute xl:block hidden fifth">
          <img src="/images/fourth.png" alt="" />
        </div>
      </div>
    </div>
    <div class="analysis wrapper">
      <div class="xl:flex block items-center justify-between">
        <div class="xl:w-1/2 w-full new">
          <h2 class="sans xl:text-left text-center">Market Analysis</h2>
          <p class="mt-2 xl:w-1/2 w-full xl:text-left text-center">
            XanTe provides a market data, overview, trends and statistics
          </p>
          <!-- <div class="mt-11 flex space-x-4 "></div> -->
        </div>
        <div
          class="
            xl:w-1/2
            w-full
            xl:mt-0
            mt-8
            xl:justify-end
            justify-center
            flex
            items-center
            space-x-3
          "
        >
          <nuxt-link to="/market" class="link"
            >See full market anaylsis</nuxt-link
          >
          <nuxt-link to="/compare">
            <img src="/images/forward.png" alt="" />
          </nuxt-link>
        </div>
      </div>
      <div class="xl:flex block items-end justify-between mt-14">
        <div class="xl:w-1/2 w-full">
          <img src="/images/graph.png" class="xl:mx-0 mx-auto" alt="" />
        </div>
        <div class="grid grid-cols-2 gap-2 xl:w-1/2 w-full xl:mt-0 mt-8">
          <div class="coin xl:py-12 py-6 flex items-center justify-center">
            <img src="/images/bitcoin.png" class="w-2/5" alt="" />
          </div>
          <div class="coin xl:py-12 py-6 flex items-center justify-center">
            <img src="/images/lite.png" class="w-2/5" alt="" />
          </div>
          <div class="coin xl:py-12 py-6 flex items-center justify-center">
            <img src="/images/triple.png" class="w-2/5" alt="" />
          </div>
          <div class="coin xl:py-12 py-6 flex items-center justify-center">
            <img src="/images/tether.png" class="w-2/5" alt="" />
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
  font-family: 'Mulish';
  border-radius: 4px;
}
.comparing {
  background: #081b3d;
  padding: 148px 181px;
}
.lend h2 {
  font-family: 'Sharp-sans' !important;

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
@media screen and (max-width: 700px) {
  .crypto h1 {
    line-height: 43px !important;
  }
  .crypto p {
    width: 100%;
    text-align: center;
  }
  .comparing,
  .data,
  .users,
  .smart {
    padding: 24px 24px;
  }
  .lend h2 {
    line-height: 38px;
  }
  .lend p {
    width: 100%;
  }

  .points h2 {
    font-size: 20px !important;
  }

  .smart h2 {
    width: 100%;
  }
  .smart p {
    width: 100%;
  }
  .use h2 {
    font-size: 20px !important;
    line-height: 37px !important;
  }
}
@media only screen and (min-width: 701px) and (max-width: 1200px) {
  .wrapper {
    padding: 0 80px !important;
  }
  .analysis {
    padding: 50px 80px !important;
  }
  .crypto h1 {
    line-height: 43px !important;
  }
  .crypto p {
    width: 100%;
    text-align: center;
    font-size: 20px !important;
    line-height: 32px !important;
  }
  .comparing,
  .data,
  .users,
  .smart {
    padding: 80px 80px;
  }
  .lend h2 {
    line-height: 38px;
  }
  .lend p {
    width: 100%;
    font-size: 20px !important;
    line-height: 32px !important;
  }
  .now {
    font-size: 18px;
  }
  .central {
    font-size: 20px;
  }
  .points h2 {
    font-size: 30px !important;
    line-height: 52px !important;
  }
  .points p,
  .smart p {
    font-size: 20px !important;
    line-height: 32px !important;
  }

  .smart h2 {
    width: 100%;
  }
  .smart p {
    width: 100%;
  }
  .use h2,
  .new h2 {
    font-size: 30px !important;
    line-height: 50px !important;
  }
  .new p {
    font-size: 24px;
  }
}
</style>
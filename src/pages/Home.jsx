import HomeHero from "../components/HomeHero"
import HomeEvents from "../components/HomeEvents"
import HomeWhoWeAre from "../components/HomeWhoWeAre"
import HomeMagazine from "../components/HomeMagazine"
import HomeNewsletter from "../components/HomeNewsletter"
import Carousel from "../components/HomeCarousel"
import SponsorInvite from "../components/HomeInvite"

function Home() {
  return (
    <main>
  <HomeHero />
  <HomeWhoWeAre />
  <HomeEvents />
  <Carousel />
  <HomeMagazine />
  
  <HomeNewsletter />
</main>
  )
}

export default Home

import Hero from '../../components/HeroSection/Hero'
import Feature from '../../components/FeatureSection/Feature'
import FAQSection from '../../components/FAQSection/FAQSection'
import './Home.css'

const Home = ({ featureRef, faqRef }) => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  return (
    <div className="home">
      <Hero featureRef={featureRef} />
      <Feature featureRef={featureRef} />
      <FAQSection faqRef={faqRef} />
    </div>
  )
}

export default Home
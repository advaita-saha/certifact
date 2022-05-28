import Hero from '../../components/HeroSection/Hero'
import Feature from '../../components/FeatureSection/Feature'
import FAQSection from '../../components/FAQSection/FAQSection'
import './Home.css'

const Home = ({ featureRef, faqRef }) => {
  return (
    <div className="home">
      <Hero featureRef={featureRef} />
      <Feature featureRef={featureRef} />
      <FAQSection faqRef={faqRef} />
    </div>
  )
}

export default Home
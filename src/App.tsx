import './App.css'
import Header from './components/header';
import IntroCard from './components/introCard';
import ListCard from './components/listCard';
import FruitTable from './components/fruitTable';
import FruitCard from './components/fruitCard';
import InfoCard from './components/infoCard';
import Footer from './components/footer';
import { intro, lists, table, fruits, reminder, footer } from './data/content';

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <IntroCard {...intro} />

        <div className="row mb-2">
          {lists.map((list) => (
            <ListCard key={list.title} {...list} />
          ))}
        </div>

        <FruitTable {...table} />

        <div className="row mb-1">
          {fruits.map((fruit) => (
            <FruitCard key={fruit.name} {...fruit} />
          ))}
        </div>

        <InfoCard {...reminder} />
      </div>

      <Footer {...footer} />
    </>
  )
}

export default App

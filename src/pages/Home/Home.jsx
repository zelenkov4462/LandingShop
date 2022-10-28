import Preview from '../../pageComponents/home/Preview/Preview';
import Divider from '../../components/atoms/Divider/Divider';
import Catalog from '../../pageComponents/home/Catalog/Catalog';
import BD from '../../BD';
import Offer from '../../pageComponents/home/Offer/Offer';
import Subscribe from '../../pageComponents/home/Subscribe/Subscribe';
import Blog from '../../pageComponents/home/Blog/Blog';
import Header from '../../components/molecules/Header/Header';
import Footer from '../../components/molecules/Footer/Footer';

const Home = () => {
  return (
    <>
      <Header/>
      <main>
        <Preview/>
        <Divider/>
        <Catalog section={ BD.women } link='women' title="WOMEN'S"/>
        <Catalog section={ BD.men } link='men' title="MEN'S"/>
        <Offer/>
        <Subscribe/>
        <Blog/>
      </main>
      <Footer/>
    </>
  );
};

export default Home;
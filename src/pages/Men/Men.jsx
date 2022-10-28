import Header from '../../components/molecules/Header/Header';
import Footer from '../../components/molecules/Footer/Footer';
import Path from '../../components/atoms/Path/Path';
import BD from '../../BD';
import CatalogFiltered from '../../components/molecules/CatalogFiltered/CatalogFiltered';

const Men = () => {
  return (
    <>
      <Header/>
      <main>
        <Path link='Men'/>
        <CatalogFiltered section={ BD.men } link='men'/>
      </main>
      <Footer/>
    </>
  );
};

export default Men;
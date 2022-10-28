import Header from '../../components/molecules/Header/Header';
import Footer from '../../components/molecules/Footer/Footer';
import Path from '../../components/atoms/Path/Path';
import BD from '../../BD';
import CatalogFiltered from '../../components/molecules/CatalogFiltered/CatalogFiltered';

const Women = () => {
  return (
    <>
      <Header/>
      <main>
        <Path link='Women'/>
        <CatalogFiltered section={ BD.women } link='women'/>
      </main>
      <Footer/>
    </>
  );
};

export default Women;
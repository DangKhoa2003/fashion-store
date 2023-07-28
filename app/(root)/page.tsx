import getBillboards from '@/actions/get-billboards';
import Banner from '@/components/ui/banner';
import ContentModels from '@/components/ui/content-models';
import DashedContainer from '@/components/ui/dashed-container';

import JoinNow from '@/components/ui/join-now';
import Models from '@/components/ui/models';
import ProductList from '@/components/product-list';
import getProducts from '@/actions/get-products';
import getCategories from '@/actions/get-categories';
import Post from '@/components/ui/post';
import OurStrength from '@/components/our-strength';
import NavMobile from '@/components/nav-mobile';

export const revalidate = 0;

const Home = async () => {
      const products = await getProducts({
            isFeatured: true,
      });
      const billboards = await getBillboards();
      const categories = await getCategories();
      return (
            <div className="relative top-0 left-0">
                  {/* head */}
                  <DashedContainer />
                  <ContentModels />
                  <Models />
                  <JoinNow />
                  {/* Mobile */}
                  <NavMobile categories={categories} />
                  {/* Banner */}
                  <Banner billboards={billboards} />

                  <ProductList items={products} title="Collection" />
                  {/* Our Strength */}
                  <OurStrength />
                  {/* Post */}
                  <Post />
            </div>
      );
};

export default Home;

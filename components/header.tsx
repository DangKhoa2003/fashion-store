import getCategories from '@/actions/get-categories';
import Navigation from '@/components/navigation';

export const revalidate = 0;

const Header = async () => {
      const categories = await getCategories();

      return <Navigation categories={categories} />;
};

export default Header;

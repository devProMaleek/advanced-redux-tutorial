import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const products = [
    {
      id: 'p1',
      price: 6,
      title: 'My First Book',
      description: 'The first book I ever wrote',
    },
    {
      id: 'p2',
      price: 5,
      title: 'My Second Book',
      description: 'The second book I ever wrote',
    },

    {
      id: 'p3',
      price: 11,
      title: 'My third Book',
      description: 'The third book I ever wrote',
    },
    {
      id: 'p4',
      price: 15,
      title: 'My fourth Book',
      description: 'The fourth book I ever wrote',
    },
    {
      id: 'p5',
      price: 12,
      title: 'My fifth Book',
      description: 'The fifth book I ever wrote',
    },
    {
      id: 'p6',
      price: 5,
      title: 'My sixth Book',
      description: 'The sixth book I ever wrote',
    },
    {
      id: 'p7',
      price: 6,
      title: 'My seventh Book',
      description: 'The seventh book I ever wrote',
    },
    {
      id: 'p8',
      price: 5,
      title: 'My eighth Book',
      description: 'The eighth book I ever wrote',
    },
  ];

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;

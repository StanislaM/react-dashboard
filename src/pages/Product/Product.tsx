import Single from '../../components/Single/Single';
import { singleProduct } from '../../data';
import './Product.scss';

const Product = () => {
    //Fetch data and send to Single component

    return (
        <div className="product">
            <Single {...singleProduct} />
        </div>
    );
};

export default Product;

import Single from '../../components/Single/Single';
import { singleUser } from '../../data';
import './User.scss';

const User = () => {
    //Fetch data and send to Single component

    return (
        <div className="user">
            <Single {...singleUser} />
        </div>
    );
};

export default User;

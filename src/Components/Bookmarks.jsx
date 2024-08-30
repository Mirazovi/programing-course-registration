
import PropTypes from 'prop-types';
import Bookmark from './Bookmark';
const Bookmarks = ({cart}) => {
    return (
        <div className=' p-4 bg-[#ffffff] rounded-xl'>
            <h1 className='font-bold text-center text-2xl'>Course Name</h1>
            <ol>
            {
                cart.map((card,idx) => <Bookmark key={idx} card={card}></Bookmark>)
            }
            </ol>
            <div className='py-2'>
            <hr />
            </div>
            <h2 className='font-bold text-2xl'>Total Price :</h2>
        </div>
    );
};
Bookmarks.propTypes ={
    cart:PropTypes.object
}
export default Bookmarks;
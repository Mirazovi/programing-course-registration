
import PropTypes from 'prop-types';
const Bookmark = ({card}) => {
    return (
        <div>
            <li className='text-xl space-y-1'>{card.title}</li>
           
        </div>
    );
};
Bookmark.propTypes = {
    card:PropTypes.object
}
export default Bookmark;
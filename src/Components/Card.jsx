import PropTypes from 'prop-types';

const Card = ({card,handleGetTitle}) => {
    const {cover_img,paragraph,title,price,credit} = card;
    return (
        <div className='border-2 p-4 rounded-xl flex flex-col bg-[#ffffff]'>
            <img className='w-full' src={cover_img} alt="" />
            <h1 className='text-2xl font-bold py-2'>{title}</h1>
            <p className='text-xl'>{paragraph}</p>
            <div className='flex justify-between items-center py-2 text-xl font-bold flex-grow'>
                <h3>${price}BDT</h3>
                <h3 className='flex gap-2 items-center '> <span className='text-2xl'><AkarIconsBookOpen/></span> {credit} hrs</h3>
            </div>
            <button onClick={()=>handleGetTitle(card)} className='w-full py-2 px-4 rounded-lg text-white bg-sky-600 text-xl'>Select</button>
        </div>
    );
};
Card.propTypes = {
    card: PropTypes.object,
    handleGetTitle:PropTypes.func
}

export function AkarIconsBookOpen(props) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 6s1.5-2 5-2s5 2 5 2v14s-1.5-1-5-1s-5 1-5 1zm10 0s1.5-2 5-2s5 2 5 2v14s-1.5-1-5-1s-5 1-5 1z"></path></svg>
    )
  }
export default Card;
import Card from "./Card";
import PropTypes from 'prop-types';

const Cards = ({handleGetTitle,}) => {
    const courseRegistration = [
        {
          "id": 1,
          "cover_img": "https://i.ibb.co/jgJKYGw/Rectangle-2.png",
          "title": "The Art of Coding",
          "paragraph": "Explore the intricacies of coding with this comprehensive guide to modern programming languages.",
          "price": 15000,
          "credit": 1
        },
        {
          "id": 2,
          "cover_img": "https://i.ibb.co/BLbqr4S/Rectangle-2-1.png",
          "title": "Mastering Data Science",
          "paragraph": "Unlock the potential of data with techniques and tools for data science and machine learning.",
          "price": 10000,
          "credit": 2
        },
        {
          "id": 3,
          "cover_img": "https://i.ibb.co/qJjNV32/Rectangle-2-2.png",
          "title": "Web Development Essentials",
          "paragraph": "A beginner's guide to creating dynamic and responsive websites using HTML, CSS, and JavaScript.",
          "price": 25000,
          "credit": 10
        },
        {
          "id": 4,
          "cover_img": "https://i.ibb.co/cLV7CGF/Rectangle-2-3.png",
          "title": "Introduction to AI",
          "paragraph": "An overview of artificial intelligence, its history, applications, and future trends.",
          "price": 35000,
          "credit": 5
        },
        {
          "id": 5,
          "cover_img": "https://i.ibb.co/yBXpZxK/Rectangle-2-4.png",
          "title": "Cybersecurity Fundamentals",
          "paragraph": "Learn the basics of cybersecurity, including how to protect networks and data from cyber threats.",
          "price": 19000,
          "credit": 5
        },
        {
          "id": 6,
          "cover_img": "https://i.ibb.co/WgBW2B8/Rectangle-2-5.png",
          "title": "Cloud Computing Demystified",
          "paragraph": "Understand the principles of cloud computing and how it is transforming businesses worldwide.",
          "price": 23000,
          "credit": 2
        },
        {
          "id": 7,
          "cover_img": "https://i.ibb.co/tPVxJ3D/Rectangle-2-6.png",
          "title": "Digital Marketing Strategies",
          "paragraph": "Discover effective digital marketing strategies to enhance your online presence and reach more customers.",
          "price": 35000,
          "credit": 5
        },
        {
          "id": 8,
          "cover_img": "https://i.ibb.co/svfNwvn/Rectangle-3.png",
          "title": "Blockchain Basics",
          "paragraph": "Learn the fundamental concepts of blockchain technology and its impact on industries worldwide.",
          "price": 19000,
          "credit": 6
        },
        {
          "id": 9,
          "cover_img": "https://i.ibb.co/ccN1dGM/Rectangle-3-1.png",
          "title": "Project Management Principles",
          "paragraph": "A practical guide to project management, covering methodologies, tools, and best practices.",
          "price": 23000,
          "credit": 8
        }
      ]
      
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                courseRegistration.map((card,idx) => <Card 
                key={idx}
                 card={card}
                 handleGetTitle={handleGetTitle}
                 ></Card>)
            }
        </div>
    );
};
Cards.propTypes ={
    handleGetTitle:PropTypes.func
}
export default Cards;
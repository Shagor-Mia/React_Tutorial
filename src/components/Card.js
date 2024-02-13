
const date = new Date()
const Day  = date.getDate();
const month = date.getMonth();
const year  = date.getFullYear();

function Card(props){
    const{title,wordDesc}=props;
   return <div className='card'>
       <h3 className='card_title'>{title}</h3>
        <p className='card_word'>{wordDesc}</p>
        <h5 className='card_footer'>{Day +"/"+ month +"/"+year}</h5>
       </div>
}
export default Card;
 
import React,{useState} from 'react';
import './AddMovie.css'
import Modal from 'react-modal';


 
Modal.setAppElement('#root')
 const AddMovie=({addNewMovie})=>{
  const [modalIsOpen,setIsOpen] = useState(false);
  const [name,setName]=useState('');
  const [date,setDate]=useState('');
  const [image,setImage]=useState('');
  const [rating,setRating]=useState('');
  const [type,setType]=useState('');
  const [description,setDescription]=useState('')
  const openModal=()=> {
    setIsOpen(true);
  }

 const closeModal=()=>{
    setIsOpen(false);
  }
  const handelAdd=(e)=>{
    let newMovie ={
      name :name,
      type:type,
      date:date,
      image:image,
      rating:rating,
      description:description
    };
    addNewMovie(e,newMovie);
    setIsOpen(false);
    setName('');
    setRating('');
    setType('');
    setDescription('');
    setImage('');
    setDate('');
  }
 
    return (
      <div className ="Add-btn-container">
        <button className="Add-btn" onClick={openModal}>+</button>
        <Modal
        className="Add-Modal"
          isOpen={modalIsOpen}
          
          onRequestClose={closeModal}
          
        >
 
          <h1 className="addMovie-h1">Add A Movie</h1>
          
          <form>
           <label>Movie Name</label>
           <input type="text" name="name"
            required value={name} 
            onChange={(e)=>setName(e.target.value)} />
           <label>Movie Rate</label>
           <div className="rating-searsh"></div>
           <input type="number" name="rating" required value={rating} 
            onChange={(e)=>setRating(e.target.value)}/>
           <label>Movie Replace Date</label>
           <input type="number" name="date" required value={date} 
            onChange={(e)=>setDate(e.target.value)}/>
           <label>Movie Image</label>
           <input type="url" name="image" required value={image} 
            onChange={(e)=>setImage(e.target.value)}/>
           <label>Movie type</label>
           <input type="text" name="type" required
           value={type} 
           onChange={(e)=>setType(e.target.value)}/>
           <label>Movie Summary</label>
           <textarea type="text" name="description" required value={description} 
            onChange={(e)=>setDescription(e.target.value)}/>

          </form>

          <button className="Modal-btn" onClick={handelAdd}>Submit</button>
          <button className="Modal-btn"onClick={closeModal}>close
          </button>
        </Modal>
      </div>
    );
}
 
export default AddMovie;
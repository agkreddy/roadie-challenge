import React from 'react';
import ReactDOM from 'react-dom';

import Modal from 'react-modal';
 
import './index.css';

import * as serviceWorker from './serviceWorker';


const customStyles = {
  content : {
    width                 : '60%',
    height                : '90%',
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
 
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')
 
class ModelApp extends React.Component {
  constructor(props) {
    super(props);
 
    this.handleScoreChange = this.handleScoreChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescChange = this.handleDescChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);

    this.state = {
      modalIsOpen: false
    };
 
    this.review ={
        "reviewedBy" : '',
        "ratingScore" : '',
        "revieweTitle" : '',
        "revieweDesc" : '',
        "reviewedDate" : ''
    };

    this.reviews =[{
        "reviewedBy" : 'Gopal',
        "ratingScore" : '3',
        "revieweTitle" : 'Perfect',
        "revieweDesc" : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
        "reviewedDate" : '01/01/20'
    },{
        "reviewedBy" : 'Ravi',
        "ratingScore" : '5',
        "revieweTitle" : 'Great',
        "revieweDesc" : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
        "reviewedDate" : '01/02/20'
    },{
        "reviewedBy" : 'Harry',
        "ratingScore" : '4',
        "revieweTitle" : 'Good',
        "revieweDesc" : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
        "reviewedDate" : '01/03/20'
    },{
        "reviewedBy" : 'Josh',
        "ratingScore" : '2',
        "revieweTitle" : 'Okay',
        "revieweDesc" : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
        "reviewedDate" : '01/04/20'
    }];

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.cancelModal = this.cancelModal.bind(this);
  }
 
  openModal() {
    this.setState({modalIsOpen: true});
  }
 
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }
 
  closeModal() {
      console.log('review = '+ JSON.stringify(this.review));
    this.reviews.push(this.review);
    this.setState({modalIsOpen: false});
  }

  cancelModal() {

    this.setState({modalIsOpen: false});
    }
  
  handleScoreChange(event){
    this.review.ratingScore =  event.target.value;;
    console.log("This is the form change function inside -Form-");
  }

  handleNameChange(event){
    this.review.reviewedBy =  event.target.value;;
    console.log("This is the form change function inside -Form-");
  }


  handleDescChange(event){
    this.review.revieweDesc =  event.target.value;;
    console.log("This is the form change function inside -Form-");
  }

  handleTitleChange(event){
    this.review.revieweTitle =  event.target.value;;
    console.log("This is the form change function inside -Form-");
  }

  
  render() {
    return (
      <div>

          <div className="btn-float-right">
        <button className="btn btn-primary btn-space" onClick={this.openModal}>Open Modal</button>
        <button type="button" className="btn btn-primary btn-space">ADD TO CART</button>
</div>
        
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <h2 ref={subtitle => this.subtitle = subtitle}>ADD REVIEW</h2>

          <form>
            <div className="form-group">
            <label for="rating">Rating</label>
            <select value={this.review.ratingScore} onChange={this.handleScoreChange} className="form-control" id="rating">
                <option value="1">One Star</option>
                <option value="21">Two Star</option>
                <option value="3">Three Star</option>
                <option value="4">Four Star</option>
                <option value="5">Five Star</option>
            </select>
            </div>
            <div className="form-group">
                <label for="name">Your Name</label>
                <input value={this.review.reviewedBy} type="text" onChange={this.handleNameChange} className="form-control" placeholder="Enter text here" id="name"/>
            </div>
            <div className="form-group">
                <label for="reviewTitle">Review Title:</label>
                <input value={this.review.revieweTitle} type="text" onChange={this.handleTitleChange} className="form-control" placeholder="Enter text here" id="reviewTitle"/>
            </div>
            <div className="form-group">
                <label for="reviewDesc">Review Title:</label>
                <textarea value={this.review.revieweDesc} onChange={this.handleDescChange} className="form-control"  placeholder="Enter text here" id="reviewDesc"></textarea>
            </div>
            </form>
            <div className="btn-float-right">
          <button  className="btn btn-primary btn-space" onClick={this.cancelModal}>Cancel</button>
          <button  className="btn btn-primary" onClick={this.closeModal}>Submit</button>
          </div>
        </Modal>
      </div>
    );
  }
}
 
ReactDOM.render(<ModelApp />, document.getElementById('root'));

serviceWorker.unregister();

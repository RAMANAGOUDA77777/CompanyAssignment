import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
const SecondProfile = () => {

 //-------------modal-------------------------------------

const [modalIsOpen, setModalIsOpen] = useState(false);
        const openModal = () => {
            setModalIsOpen(true);
        };
        const closeModal = () => {
            setModalIsOpen(false);
        };

 //-----------members popup--------------------------------------------- 

 const [showPopup, setShowPopup] = useState(false);
  const handleClick = () => {
    setShowPopup(!showPopup);
  };
  const close = () => {
    setShowPopup(false);
  };

//----------------chat box-------------------------------------

const [popup, setPopup] = useState(false);
const click = () => {
  setPopup(!popup);
};
const handleClose = () => {
  setPopup(false);
};
   
    return ( 
        <>
            <div id="profile-container">
                <section id="box-container">
                <ul>
                    <Link to="/profile"><li>Profile</li></Link>
                    <hr />
                    <Link to="/post"> <li>Posts</li></Link>
                    <hr />
                    <Link to="/gallery"><li>Gallery</li></Link>
                    <hr />
                    <Link to="/todo"><li>ToDo</li></Link>
                </ul>
                </section>
                <aside id="profile-detailes">
                <article>
                    <h1>Profile</h1>
                    <button onClick={openModal} id="btn">
                            <div id="side-image"> 
                                <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1003.jpeg" alt="" />
                                <p>Clementine Bauch</p>
                            </div>
                    </button>
                </article>
                <hr />
                <div id="details">
                        <section id="aside-container">
                            <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1003.jpeg" alt="" />
                            <h1>Clementine Bauch</h1>
                            <p>Username    : <strong>Bauch</strong></p>
                            <p>e-mail  : <strong>clem@april.biz</strong></p>
                            <p>Phone  :  <strong>56892012203</strong></p>
                            <p>Website  :  <strong>clementine.com</strong></p>
                            <hr />
                            <h2>Company</h2>
                            <p>Name   :  <strong>Lorem ipsum</strong></p>
                            <p>catchphrase   : <strong>Multi-layered client-server </strong> </p>
                            <p>bs  : <strong> real-time e-markets</strong></p>
                        </section>
                        <section className="side-container">
                            <h1>Address:</h1>
                            <p>Street  : <strong>No 6</strong></p>
                            <p>Suit  :  <strong>Apt.2015</strong></p>
                            <p>City  :  <strong>Berlin</strong></p>
                            <p>Zipcode  : <strong>52102-6850</strong></p>
                            <img src="https://i.stack.imgur.com/B6fEt.png" alt="" />
                            <div>
                                <p>Lat: <strong>-37.3159</strong></p>
                                <p>Long: <strong>81.1496</strong></p>
                            </div>
                            <article>
                                <button onClick={handleClick}>
                                    <section>
                                    <i className='bx bx-message' ></i>Chats
                                    </section>
                                    <i className='bx bx-chevron-up'></i>
                                </button>
                            </article>
                        </section>
                </div>
                </aside>
              
                <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        style={{
                            overlay: {
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                         },
                        content: {
                            top: "50%",
                            left: "85%",
                            transform: "translate(-50%, -50%)",
                            borderRadius: "15px",
                            width: "350px",
                            height: "450px",
                            backgroundColor: "white",
                            
                            },
                        }}
                        >
                        <div id="popup-design">
                           <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1003.jpeg" alt="" />
                           <h1>Clementine Bauch</h1>
                           <p>clem@april.biz</p>
                           <hr />
                           <section>
                              <Link to="/profile">
                                    <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg" alt="" />
                                    <p>Leanne Graham</p>
                              </Link>
                           </section>
                           <hr />
                           <section>
                              <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1004.jpeg" alt="" />
                              <p>Patricia Lebsack</p>
                           </section>
                           <Link to="/"><button>Sign out</button></Link>
                        </div>
                </Modal>
           
            </div>

            <div className="ChatBox">
                        {showPopup && (
                                <div className="popup" style={{position: 'fixed', top: 425}}>
                                    <div id="members-btn">
                                        <section>
                                                    <i className='bx bx-message' ></i>
                                                    Chats
                                        </section>
                                        <section>
                                                   <i className='bx bx-chevron-up'></i>
                                                   <span id="backButton" onClick={close}>X</span>
                                        </section>
                                    </div>
                                    <div id="chat-members">
                                        <ul>
                                            <li onClick={click} id="live">
                                                <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg" alt="" />
                                                <p>Leanne Graham</p>
                                            </li>
                                            <li>
                                                <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1002.jpeg" alt="" />
                                                <p>Ervin Howell</p>
                                            </li>
                                            <li>
                                                <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1003.jpeg" alt="" />
                                                <p>Clementine Bauch</p>
                                            </li>
                                            <li>
                                                <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1004.jpeg" alt="" />
                                                <p>Patricia Lebsack</p>
                                            </li>
                                            <li>
                                                <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1005.jpeg" alt="" />
                                                <p>Chelsey Dietrich</p>
                                            </li>
                                            <li>
                                                <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1007.jpeg" alt="" />
                                                <p>Kurtis Weissnat</p>
                                            </li>
                                            <li id="round">
                                                <div></div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                        )}
            </div>  

            <div className="Box">
                    {popup && (
                        <div className="up" style={{position: 'fixed', top:400}}>
                            <section>
                                <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg" alt="" />
                                <p>Leanne Graham</p>
                                <aside className="close">
                                    <i className='bx bx-chevron-up'></i>
                                    <span id="closeButton" onClick={handleClose}>X</span>
                                </aside>
                            </section>
                            <article>
                                <span>Hii </span>
                                <span> Good Morning </span>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit!</p>
                            </article>
                        </div>
                    )}
            </div>       
        </>
     );
}
 
export default SecondProfile;

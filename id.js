import './Id.css'
export default function Profile() {
    return (
        <div className="profile--main">
            <img src="../images/Profilepix.jpg" className="profile--img" alt="Profile" />
            <div className="profile--txt">
                <h3>Ademola Ohu</h3>
                <p>Frontend Developer</p>
                <p>Connect with me</p>
            </div>
            <div className="div--btn">
                <button className="btn">
                    <img src="../images/mailicon1.png" className="btn-icon" alt="Email" />Email
                </button>
                <button className="btn">
                    <img src="../images/LI-Logo.png" className="btn-icons" alt="LinkedIn" />
                </button>
            </div>
            <main>
                <h4>About</h4>
                <p>Experienced Remote Support Engineer with a demonstrated history of working in telecommunications, now transitioning to a Frontend Developer role.</p>
            </main>
        </div>
    );
}

































// export default function Profile() {
//     return(
//         <div className="profile--main">
//             <img src="../images/Profilepix.jpg" className="profile--img" />
//             <div className='profile--txt'>
//                 <h3 style={{margin:"0px"}}>Ademola Ohu</h3>
//                 <p style={{margin:"0px"}}>Frontend Developer</p>
//                 <p style={{margin:"0px"}}>connect with me</p>
//             </div>
//             <div className='div--btn'>
//                 <button className='btn'><img src="../images/mailicon1.png" style={{paddingTop:"3px"}}/>Email</button>
//                 <button className='btn'><img src='../images/LI-Logo.png' style={{width:"70px"}}/></button>
//             </div>
//             <main>
//                 <h4 style={{margin:"0px"}}>About</h4>
//                 <p style={{margin:"0px"}}>Experienced Remote Support Engineer with a demonstrated history 
//                 of working in telecommunications, and now I am taking a new career as a Frontend Developer.</p>
//             </main>
//         </div>
//     )
// }
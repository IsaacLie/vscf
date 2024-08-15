import Nav from "../Components/Nav";
import Hero from "../Components/Hero";

export default function VSCF(){
    return(
     <>
      <Nav/>
      <Hero/>

    <div className="Home-container">
        <div className="desc-wrapper">
            <div className="desc-title">
            <h1>ABOUT US</h1>
            </div>
            <p>
                The Vision Sandakan Chess Federation (VSCF), an official school community dedicated to bringing chess enthusiasts together for exciting 1v1 matches. 
                Founded on July 1st, 2024, by Isaac and Jackson, VSCF aims to create a competitive and engaging environment for all chess players at Vision School. 
                Our mission is to foster a sense of camaraderie and continuous improvement among our members as they strive to climb the leaderboards. 
            </p>   
            <p>
                We organize both online and over-the-board (OTB) tournaments to provide diverse and challenging experiences for our players.
                Membership is open to anyone in Vision School, and for a nominal fee of RM3, members can participate in our rating system and gain official VSCF ratings.
                Our community is proud of its achievements, including having a member secure a top 5 position in the MSSS Sabah tournament.
            </p> 
            <p>
                Looking ahead, our goal is to expand our community and encourage more students to join VSCF, ensuring that each member has their own rating.
                Stay connected with us for the latest updates by following our Instagram page @vscf_chess and joining our WhatsApp group VSCF Community.
                Join VSCF today and be part of a vibrant chess community where every game is a new opportunity to learn and excel!
            </p>
        </div>
    </div>
     </>
    )
}
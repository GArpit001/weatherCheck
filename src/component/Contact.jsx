import React from 'react'

const Contact = () => {

        const centers = {
            display : 'grid',
            placeItems: 'center ',
            minHeight: "541px",

            backgroundColor: "lightblue"

            // justifyContent : "center" , 


        }

    return (
        <div style={centers}>

            <div >
                {/* Hello I am Contact Route */}
                <h5> <i className="fa-brands fa-instagram" style={{ color: "red" , "fontSize" : "2rem" , padding:"8px" }}></i> Instagram page : @princeverma2754</h5>
                <h5> <i className="fa-regular fa-address-book" style={{ color: "blue" , "fontSize" : "2rem" , padding:"8px" }}></i> Contact Me : +91 8848682116</h5>
                <h5> <i className="fa-solid fa-envelope-circle-check" style={{ color: "#d638ff" , "fontSize" : "2rem" , padding:"8px"  }}></i> Gmail : pg8864etw@gmail.com</h5>



            </div>

        </div>
    )
}

export default Contact

import React from 'react'
import { useState } from 'react';


const Section = ({title, description, isVisible, setIsVisible, setIsNotVisible}) => {
    return(
        //Accordion (collapsible) Component
        <div className='section-content'>
            <h3>{title}</h3>
            {
                isVisible 
                ? <button onClick={() => setIsNotVisible()}>Hide</button> 
                : <button onClick={() => setIsVisible()}>Show</button>
            }
            
            <p>{isVisible && description}</p>
        </div>
    )
}

const InstaMart = () => {
    const [visibleSection, setVisibleSection] = useState('');

    return(
        <div className='insta-section'>
            {Array(5).fill('').map((item, index) => {
                return  <Section 
                    title={"Section-"+index} 
                    description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex tenetur accusantium dignissimos. Soluta explicabo veritatis molestias beatae minima quam officiis aspernatur voluptas aperiam provident magni, nobis, dignissimos animi amet eos a nostrum deserunt rerum ullam?"}
                    isVisible={visibleSection === 'section'+index}
                    setIsVisible={() => {
                        setVisibleSection('section'+index);
                    }}
                    setIsNotVisible={() => {
                        setVisibleSection('');
                    }}
            />
            })}
        </div>
    )
}
export default InstaMart;




//This code is "TRASHHH!!!! => not reusable, complex, not maintainable, not readable, etc."

// import React from 'react'
// import { useState } from 'react';


// const Section = ({title, description, isVisible, setIsVisible}) => {
//     return(
//         //Accordion (collapsible) Component
//         <div className='section-content'>
//             <h3>{title}</h3>
//             {
//                 isVisible 
//                 ? <button onClick={() => setIsVisible(false)}>Hide</button> 
//                 : <button onClick={() => setIsVisible(true)}>Show</button>
//             }
            
//             <p>{isVisible && description}</p>
//         </div>
//     )
// }

// const InstaMart = () => {
    //Here we are keeping track of each section i.e which one is visible and which is not, so to optimize it more we just need to keep track of only one section which is visible, depending on the value of state respective section will conditionally be visible.
//     const [sectionConfig, setSectionConfig] = useState({
//         section1: true,
//         section2: false,
//         section3: false,
//     });

//     return(
//         <div className='insta-section'>
//             <Section 
//                 title={"Aboutus"} 
//                 description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex tenetur accusantium dignissimos. Soluta explicabo veritatis molestias beatae minima quam officiis aspernatur voluptas aperiam provident magni, nobis, dignissimos animi amet eos a nostrum deserunt rerum ullam?"}
//                 isVisible={sectionConfig.section1}
//                 setIsVisible={()=> setSectionConfig({
//                     section1: true,
//                     section2: false,
//                     section3: false
//                 })}
//             />
//             <Section 
//                 title={"Aboutus"} 
//                 description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex tenetur accusantium dignissimos. Soluta explicabo veritatis molestias beatae minima quam officiis aspernatur voluptas aperiam provident magni, nobis, dignissimos animi amet eos a nostrum deserunt rerum ullam?"}
//                 isVisible={sectionConfig.section2}
//                 setIsVisible={()=> setSectionConfig({
//                     section1: false,
//                     section2: true,
//                     section3: false
//                 })}
//             />
//             <Section 
//                 title={"Aboutus"} 
//                 description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex tenetur accusantium dignissimos. Soluta explicabo veritatis molestias beatae minima quam officiis aspernatur voluptas aperiam provident magni, nobis, dignissimos animi amet eos a nostrum deserunt rerum ullam?"}
//                 isVisible={sectionConfig.section3}
//                 setIsVisible={()=> setSectionConfig({
//                     section1: false,
//                     section2: false,
//                     section3: true
//                 })}
//             />
//         </div>
//     )
// }
// export default InstaMart;

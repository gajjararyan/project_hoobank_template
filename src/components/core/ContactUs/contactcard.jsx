// import React from 'react';
// import styled from 'styled-components';

// const CardContainer = styled.div`
//   display: flex;
//   background: #1b172a;
//   border-radius: 12px;
//   overflow: hidden;
//   box-shadow: 0 4px 8px rgba(0,0,0,0.2);
//   color: white;
// `;

// const FormSection = styled.div`
//   padding: 32px;
//   flex: 1;
// `;

// const ImageSection = styled.div`
//   flex: 1;
//   background: url('../../../assets/aiboy.jpg') center/cover no-repeat;
//   display: flex;
//   align-items: flex-end;
//   padding: 20px;
//   box-sizing: border-box;
// `;

// const Quote = styled.div`
//   font-style: italic;
//   font-size: 14px;
//   color: #bbb;
//   text-align: right;
// `;

// const FormTitle = styled.h2`
//   font-size: 24px;
//   margin-bottom: 16px;
// `;

// const FormSubtitle = styled.p`
//   margin-bottom: 32px;
// `;

// const Input = styled.input`
//   width: calc(50% - 10px);
//   padding: 10px;
//   margin: 5px;
//   border: none;
//   border-radius: 4px;
//   margin-bottom: 20px;
// `;

// const FullWidthInput = styled(Input)`
//   width: calc(100% - 20px);
// `;

// const MessageInput = styled.textarea`
//   width: calc(100% - 20px);
//   padding: 10px;
//   margin: 5px;
//   border: none;
//   border-radius: 4px;
//   height: 100px;
// `;

// const SubmitButton = styled.button`
//   background: #6a0dad;
//   color: white;
//   padding: 12px 24px;
//   border: none;
//   border-radius: 24px;
//   cursor: pointer;
//   transition: background 0.3s;

//   &:hover {
//     background: #8a2be2;
//   }
// `;

// const ContactCard = () => {
//   return (
//     <CardContainer>
//       <FormSection>
//         <FormTitle>Let's connect </FormTitle>
//         <FormSubtitle>
//           Let's align our constellations! Reach out and let the magic of collaboration illuminate our skies.
//         </FormSubtitle>
//         <form>
//           <Input type="text" placeholder="Last Name" style={{marginRight: '10px'}} />
//           <Input type="text" placeholder="First Name" />
//           <FullWidthInput type="email" placeholder="Email" />
//           <FullWidthInput type="tel" placeholder="Phone Number" />
//           <MessageInput placeholder="Message" />
//           <SubmitButton type="submit">Send it  🚀</SubmitButton>
//         </form>
//       </FormSection>
//       <ImageSection>
//         <Quote>
//           “Two lunar months revealed Earth's fragile beauty against vast silence, transforming my view of our place in the universe.”<br/>
//           <strong>Irinel Traista</strong>
//         </Quote>
//       </ImageSection>
//     </CardContainer>
//   );
// }

// export default ContactCard;
import React from 'react';

const ContactCard = () => {
  return (
    <div className="flex bg-[#141721] rounded-lg overflow-hidden shadow-md text-white">
      <div className="p-8 flex-1">
        <h2 className="text-3xl font-bold mb-4">Let's connect 🤝</h2>
        <p className="text-lg mb-8"> 
        Let's achieve success together your business with Stark Technologies.
        </p>
        <form>
          <input
            type="text"
            placeholder="First Name"
            className="w-50 p-3 rounded border border-gray-700 mb-4 mr-2 bg-[#22242e]"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-60 p-3 rounded border border-gray-700 mb-4 bg-[#22242e]"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-9/12 p-3 rounded border border-gray-700 mb-4 bg-[#22242e]"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-9/12 p-3 rounded border border-gray-700 mb-4 bg-[#22242e]"
          />
          <textarea
            placeholder="Message"
            className="w-full p-3 rounded border border-gray-700 mb-4 bg-[#22242e]"
          />
          <button
            type="submit"
            className="bg-purple-700 text-white py-3 px-6 rounded-full border-2 border-transparent hover:bg-purple-900 transition duration-300"
          >
            Send to Stark 🚀
          </button>
        </form>
      </div>
      <div className="flex-1 bg-cover bg-center bg-[url('../../../assets/aiboy.jpg')]">
        <div className="p-8 flex flex-col justify-end h-full bg-[#141721] bg-opacity-50">
          <div className="italic text-sm text-gray-500 text-right mb-4">
            “Unlocking growth with Stark Technologies illuminated our path to success, transforming our business with innovative IT solutions.”
            <br />
            <strong>Stark Technologies</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;

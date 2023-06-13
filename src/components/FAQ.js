import React, { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const faqs = [
  {
    question: 'How soon will my order ship?',
    answer: 'Tincidunt purus at amet, eu nisl urna at. Pellentesque diam dictum consectetur leo ipsum. Lectus gravida id aliquam '
},
  {
    question: 'Tincidunt dolor id',
    answer: 'Tincidunt purus at amet, eu nisl urna at. Pellentesque diam dictum consectetur leo ipsum. Lectus gravida id aliquam '
  },
  {
    question: 'Are there any return exclusions?',
    answer: 'Tincidunt purus at amet, eu nisl urna at. Pellentesque diam dictum consectetur leo ipsum. Lectus gravida id aliquam '
  },
  {
    question: 'Will I be charged for a replacement item?',
    answer: 'Tincidunt purus at amet, eu nisl urna at. Pellentesque diam dictum consectetur leo ipsum. Lectus gravida id aliquam '
  },
  {
    question: 'How can I track my orders & payment?',
    answer: 'Tincidunt purus at amet, eu nisl urna at. Pellentesque diam dictum consectetur leo ipsum. Lectus gravida id aliquam '
  },
  // add more questions and answers here
];

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const toggleAnswer = (index) => {
    if (open === index) {
      setOpen(null);
    } else {
      setOpen(index);
    }
  };

  return (
    <div>
        <div className='container'>
            <h1>Frequent ask questions</h1>
            <p  style={{marginBottom:"3%"}}>Pellentesque cras adipiscing tempus libero vel nullam mauris tellus. Aliquam ultrices tellus consequat amet, lectus aliquam est in neque.</p>
       
        {faqs.map((faq, index) => (
        <div  key={index} style={{ width: '50%', margin: '0 auto' }}>
          <div onClick={() => toggleAnswer(index)}  style={{ fontWeight: 'bold' }}>
            {faq.question} {open === index ? '\u25b2' : '\u25bc'}
          </div>
          {open === index && (
            <p>{faq.answer}</p>
          )}
          <hr />
        </div>
      ))}
    </div>
    </div>
   
  );
};

export default FAQ;
import React from 'react';

import '../styles/contact.css'

function Contact() {
      return (
            <div className='contact d-flex align-items-center justify-content-center'>
                  <div className="info text-center">
                        <h2>Website developed by Code Ninja!</h2>
                        <h4>Phone number : +998992293737</h4>
                        <div className="telegram d-flex align-items-center justify-content-center gap-1">
                              <i className='ri-telegram-fill text-info'></i>
                              <a href='https://t.me/code_ninja_dev' className='text-decoration-none text-black'>@code_ninja_dev</a>
                        </div>
                  </div>
            </div>
      );
}

export default Contact;
import React from 'react'
import { MailOutlined, PhoneOutlined, GlobalOutlined } from '@ant-design/icons'

function Contact(props) {
  const { email, phone, website } = props

  return (
    <>
      <div>
        <MailOutlined /> {email}
      </div>
      <div>
        <PhoneOutlined /> {phone}
      </div>
      <div>
        <GlobalOutlined /> {website}
      </div>
    </>
  )
}

export default Contact

import React from 'react'
import { Card, Col, Row } from 'antd'
import { EditOutlined, DeleteOutlined, HeartTwoTone } from '@ant-design/icons'

import Contact from '../Contact'
import Loader from '../Loader'

import { useGetUsers } from './hooks'

const { Meta } = Card

function Users(props) {
  const { loading, error, users } = useGetUsers()

  if (loading) return <Loader />
  if (error) return <p>error...</p>

  return (
    <Row gutter={[16, 16]}>
      {(users || []).map(user => (
        <Col key={user.id} xs={24} sm={12} md={8} lg={6}>
          <Card
            cover={
              <img
                alt={user.username}
                src={` https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`}
              />
            }
            actions={[
              <HeartTwoTone twoToneColor="#eb2f96" />,
              <EditOutlined />,
              <DeleteOutlined />,
            ]}
          >
            <Meta
              title={user.name}
              description={
                <Contact
                  email={user.email}
                  phone={user.phone}
                  website={user.website}
                />
              }
            />
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default Users

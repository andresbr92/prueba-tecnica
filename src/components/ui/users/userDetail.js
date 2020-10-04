import React from 'react';
import { useSelector} from 'react-redux'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'



const UserDetail = () => {

    const user = useSelector(state => state.users.getOneUser.data)

    return (
        <>
            {user ? (
                <Col md={4} >
                    <Card className="questions-card">
                        <Card.Img variant="top" src={user.avatar} />
                        <Card.Body>
                            <Card.Title>{user.first_name} {user.last_name}</Card.Title>
                            <p>{user.email}</p>
                        </Card.Body>
                    </Card>
                </Col >
            ) : null}
        </>
    );
}

export default UserDetail;
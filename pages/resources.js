import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import CustomToggle from '../components/CustomToggle'
import Accordion from 'react-bootstrap/Accordion'
import {Card, CardColumns } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import FadeInText from '../components/FadeInText'


const Resources = () => {
    return (
        <div className={styles.container} id={styles.resources}>
            <FadeInText>
                <div className={styles.title}>
                    Extra Coding Resources 
                </div>
            </FadeInText>

            <main className={styles.main}>
                <Navbar isDark={false}/>
            </main>

            <div className={styles.divpadding}>
                <Accordion defaulltActiveKey="0">
                    <Card className={styles.resourcesbutton}>
                        <Card.Header>
                            <CustomToggle eventKey="0"> Java Fundamentals</CustomToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                Below are various slideshow and resources for learning Java!

                                <CardColumns>
                                    <Card bg='light' border="dark" >
                                        <Card.Header> Methods</Card.Header>
                                        <Card.Body>
                                            <Card.Text> 
                                                <Button variant='secondary' href='https://docs.google.com/presentation/d/13nDWgEwVHant8PPtfCZ-iUx2UXr7dT-hlO6Kcn8qr9k/edit?usp=sharing' target={"_blank"}
                                                > Slideshow</Button>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>

                                    <Card bg='light' border="dark">
                                        <Card.Header> Arrays</Card.Header>
                                        <Card.Body>
                                            <Card.Text> 
                                                <Button variant='secondary' href='https://docs.google.com/presentation/d/1ZEwfcr6rPY6joGuOgCf2OXqZo4mm4zWsokno67CxbbY/edit?usp=sharing' target={"_blank"}
                                                > Slideshow</Button>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>

                                    <Card bg='light' border="dark" >
                                        <Card.Header> Loops</Card.Header>
                                        <Card.Body>
                                            <Card.Text> 
                                                <Button variant='secondary' href='https://docs.google.com/presentation/d/1B4SPGZ434N5jqtqBtCNqI7AGMjADBld3nec1IEMPhtY/edit?usp=sharing' target={"_blank"}
                                                > Slideshow</Button>
                                                <Button variant='warning' href='https://drive.google.com/file/d/1Xse_lf5xSU7tERYYmuGuMawdsPscTu9V/view?usp=sharing' target={"_blank"}>
                                                    Which Alien Challenge
                                                </Button>
                                                <Button variant='success' href='https://drive.google.com/file/d/1t_lWZwC20MNZAPXTYWZG8OceKhOI0tax/view?usp=sharing' target={"_blank"}>
                                                    Which Alien Solution
                                                </Button>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>

                                    <Card bg='light' border="dark">
                                        <Card.Header> Methods</Card.Header>
                                        <Card.Body>
                                            <Card.Text> Methods are grate!
                                                <Button variant='secondary' href='https://docs.google.com/presentation/d/13nDWgEwVHant8PPtfCZ-iUx2UXr7dT-hlO6Kcn8qr9k/edit?usp=sharing' target={"_blank"}
                                                > Slideshow</Button>
                                                
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </CardColumns>


                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    <Card className={styles.resourcesbutton}>
                        <Card.Header>
                            <CustomToggle eventKey="1">Challenges</CustomToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                insert challenges
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                </Accordion>
 
            </div>

        </div>
    )
}

export default Resources;
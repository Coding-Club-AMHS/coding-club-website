import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import CustomToggle from '../components/CustomToggle'
import Accordion from 'react-bootstrap/Accordion'
import { Card, CardColumns, Fade } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import FadeInText from '../components/FadeInText'
import NextButton from '../components/NextButton';
import Head from 'next/head'
import WhiteButton from '../components/WhiteButton'


const Resources = () => {
    return (
        <div className={styles.container} id={styles.resources}>
            <Head>
                <title>Extra Coding Resources</title>
            </Head>
            <main className={styles.main}>
                <Navbar isDark={false} />

                <FadeInText>
                    <div className={styles.title} style={{marginTop: "100px"}}>
                    Extra Coding Resources
                    </div>
                </FadeInText>

                <div className={styles.divpadding}>
                    <Accordion defaulltActiveKey="0">
                        
                        <Card className={styles.resourcesbutton}>
                            <Card.Header>
                                <CustomToggle eventKey="0"> Java Fundamentals</CustomToggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    Below are various slideshows and resources for learning Java!

                                    <CardColumns>
                                        <Card bg='light' border="dark" >
                                            <Card.Header> Methods</Card.Header>
                                            <Card.Body>
                                                <Card.Text>
                                                    <Button variant='outline-dark' href='https://docs.google.com/presentation/d/13nDWgEwVHant8PPtfCZ-iUx2UXr7dT-hlO6Kcn8qr9k/edit?usp=sharing' target={"_blank"}
                                                    > Slideshow</Button>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>

                                        <Card bg='light' border="dark">
                                            <Card.Header> Arrays</Card.Header>
                                            <Card.Body>
                                                <Card.Text>
                                                    <Button variant='outline-dark' href='https://docs.google.com/presentation/d/1ZEwfcr6rPY6joGuOgCf2OXqZo4mm4zWsokno67CxbbY/edit?usp=sharing' target={"_blank"}
                                                    > Slideshow</Button>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>

                                        <Card bg='light' border="dark" >
                                            <Card.Header> Loops</Card.Header>
                                            <Card.Body>
                                                <Card.Text>
                                                    <Button variant='outline-dark' href='https://docs.google.com/presentation/d/1B4SPGZ434N5jqtqBtCNqI7AGMjADBld3nec1IEMPhtY/edit?usp=sharing' target={"_blank"}
                                                    > Slideshow</Button>
                                                    <Button variant='outline-danger' href='https://drive.google.com/file/d/1Xse_lf5xSU7tERYYmuGuMawdsPscTu9V/view?usp=sharing' target={"_blank"}>
                                                        Which Alien Challenge
                                                    </Button>
                                                    <Button variant='outline-success' href='https://drive.google.com/file/d/1t_lWZwC20MNZAPXTYWZG8OceKhOI0tax/view?usp=sharing' target={"_blank"}>
                                                        Which Alien Solution
                                                    </Button>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>

                                        <Card bg='light' border="dark">
                                            <Card.Header> Variables</Card.Header>
                                            <Card.Body>
                                                <Card.Text>
                                                    <Button variant='outline-dark' href='https://docs.google.com/presentation/d/1nF8xtKBFemJNQlNRQgsLu3ZgVF8qZOOHR7yRsT5PmZ4/edit?usp=sharing' target={"_blank"}
                                                    > Slideshow</Button>
                                                    <Button variant='outline-danger' href='https://forms.gle/v98ntG8cBCQJwaAS7' target={"_blank"}
                                                    > Mini Quiz</Button>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </CardColumns>


                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className={styles.resourcesbutton}>
                            <Card.Header>
                                <CustomToggle eventKey="3">Web Development </CustomToggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="3">
                                <Card.Body>
                                    Resources on the basics of web dev!

                                    <CardColumns>
                                        <Card bg='light' border="dark">
                                            <Card.Header> HTML and CSS </Card.Header>
                                            <Card.Body>
                                                <Card.Text>
                                                    <Button variant='outline-dark' href='https://docs.google.com/document/d/1jHQGanjgQ4abz_cGtTS-ebOwjllvVku9Ym7NDOHHfgc/edit?usp=sharing' target={"_blank"}
                                                    > Notes</Button>
                                                    <Button variant='outline-primary' href='https://developer.mozilla.org/en-US/docs/Web/HTML ' target={"_blank"}
                                                    > HTML Docs</Button>
                                                    <Button variant='outline-primary' href='https://developer.mozilla.org/en-US/docs/Web/CSS ' target={"_blank"}
                                                    > CSS Docs</Button>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>

                                        <Card bg='light' border="dark">
                                            <Card.Header> ReactJS </Card.Header>
                                            <Card.Body>
                                                <Card.Text>
                                                    <Button variant='outline-dark' href='https://docs.google.com/document/d/1f95Lkvg-QYDTnfZd4JMg2wOYyV2GUTf6pNk6jqVq4qY/edit?usp=sharing' target={"_blank"}
                                                    > Notes</Button>
                                                    <Button variant='outline-primary' href='https://reactjs.org/docs/getting-started.html' target={"_blank"}
                                                    > ReactJS Docs</Button>
                                                    <Button variant='outline-primary' href='https://nextjs.org/docs ' target={"_blank"}
                                                    > Next.JS Docs </Button>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>

                                        <Card bg='light' border="dark">
                                            <Card.Header> Javascript </Card.Header>
                                            <Card.Body>
                                                <Card.Text>
                                                    <Button variant='outline-dark' href='https://www.notion.so/JavaScript-Notes-b69c6fe8e20d42689c8e7d49004675ca' target={"_blank"}
                                                    > Notes</Button>
                                                    <Button variant='outline-primary' href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference ' target={"_blank"}
                                                    > Javascript Docs</Button>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                        
                                    </CardColumns>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card className={styles.resourcesbutton}>
                            <Card.Header>
                                <CustomToggle eventKey="4">App Development</CustomToggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="4">
                                <Card.Body>
                                    Resources on the basics of app dev!

                                    <CardColumns>
                                        <Card bg='light' border="dark">
                                            <Card.Header> ReactNative </Card.Header>
                                            <Card.Body>
                                                <Card.Text>
                                                    <Button variant='outline-primary' href='https://reactnative.dev/docs/getting-started' target={"_blank"}
                                                    > ReactNative Docs</Button>
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
                                    Try out these challenges of different levels that we have curated for you!
                                    <CardColumns>

                                        <Card bg='light' border="dark">
                                            <Card.Header> Easy Challenges</Card.Header>
                                            <Card.Body>
                                                <Card.Text>
                                                    <Button variant='outline-dark' href='https://docs.google.com/document/d/1aXWVqrEfP0tjniNadOLqJdWWxMdG78RK0cCdIq_6sPs/edit?usp=sharing' target={"_blank"}
                                                    > Questions and Solutions</Button>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>

                                        <Card bg='light' border="dark">
                                            <Card.Header> Medium Challenges</Card.Header>
                                            <Card.Body>
                                                <Card.Text>
                                                    <Button variant='outline-dark' href='https://docs.google.com/document/d/16Miv7GR6FGEcDsX9uf5awlcrl_9t-6G8bnRNcLfHePI/edit?usp=sharing' target={"_blank"}
                                                    >Questions and Solutions</Button>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>

                                        <Card bg='light' border="dark">
                                            <Card.Header> Hard Challenges</Card.Header>
                                            <Card.Body>
                                                <Card.Text>
                                                    <Button variant='outline-dark' href='https://docs.google.com/document/d/15IFrwP-OsXPJynwTvDXsK5MSosxyeCoL5osTkH6weX4/edit?usp=sharing' target={"_blank"}
                                                    >Questions and Solutions</Button>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>

                                        <Card bg='light' border="dark">
                                            <Card.Header>Winter Break Challenges</Card.Header>
                                            <Card.Body>
                                                <Card.Text>
                                                    <Button variant='outline-dark' href='https://docs.google.com/document/d/1_quYFPN4voaHYhRRI1Ox-XPmcgpb5V5nvz-rbLcKUWM/edit?usp=sharing' target={"_blank"}
                                                    >Questions</Button>
                                                    <Button variant='outline-success' href='https://docs.google.com/document/d/1H1WAg_Ge758L_3pp8lVbu20tKYyem0taqxlj4TgfCkg/edit?usp=sharing' target={"_blank"}
                                                    >Solutions</Button>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>

                                    </CardColumns>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card className={styles.resourcesbutton}>
                            <Card.Header>
                                <CustomToggle eventKey="2"> Contests</CustomToggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                    Some resources to help you prepare for contests!

                                    <CardColumns>
                                        <Card bg='light' border="dark">
                                            <Card.Header> Canadian Computing Contest </Card.Header>
                                            <Card.Body>
                                                <Card.Text>
                                                    <Button variant='outline-dark' href='https://docs.google.com/document/d/1SE5mdmgkSMNZYiX9sANAXjg3tBF8Ntl7oFJjUdKbkfk/edit?usp=sharing' target={"_blank"}
                                                    > General Guidelines</Button>
                                                    <Button variant='outline-danger' href='https://drive.google.com/file/d/1VsYbXeshZ31RLkVz2K3_2l6LsMom1TOf/view?usp=sharing' target={"_blank"}
                                                    > Detailed Guidelines</Button>
                                                    <Button variant='outline-primary' href='https://cccgrader.com/' target={"_blank"}
                                                    > CCC Grader</Button>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </CardColumns>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card className={styles.resourcesbutton}>
                            <Card.Header>
                                <CustomToggle eventKey="5"> External Sites</CustomToggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="5">
                                <Card.Body>
                                    Some extra EXTRA resources!
                                    <CardColumns>
                                        <Card bg='light' border="dark">
                                            <Card.Header> Coding Learning Sites </Card.Header>
                                            <Card.Body>
                                                <Card.Text>
                                                    <Button variant='outline-dark' href='https://www.w3schools.com/' target={"_blank"}
                                                    > W3Schools</Button>
                                                    <Button variant='outline-dark' href='https://www.codecademy.com/' target={"_blank"}
                                                    > CodeAcademy</Button>
                                                    <Button variant='outline-dark' href='https://www.freecodecamp.org/' target={"_blank"}
                                                    > FreeCodeCamp</Button>
                                                    <Button variant='outline-dark' href='https://www.sololearn.com/' target={"_blank"}
                                                    > SoloLearn</Button>
                                                    <Button variant='outline-dark' href='https://www.coursera.org/' target={"_blank"}
                                                    > Coursera</Button>
                                                    <Button variant='outline-dark' href='https://www.udemy.com/' target={"_blank"}
                                                    > Udemy</Button>
                                                    <Button variant='outline-dark' href='https://www.edx.org/' target={"_blank"}
                                                    >EDX</Button>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                        <Card bg='light' border="dark">
                                            <Card.Header> Extra Practice </Card.Header>
                                            <Card.Body>
                                                <Card.Text>
                                                    <Button variant='outline-dark' href='https://dmoj.ca/' target={"_blank"}
                                                    > DMOJ</Button>
                                                    <Button variant='outline-dark' href='https://wcipeg.com/main' target={"_blank"}
                                                    > WCIPEG</Button>
                                                    <Button variant='outline-dark' href='https://cccgrader.com/' target={"_blank"}
                                                    > CCC Grader</Button>
                                                    <Button variant='outline-dark' href='https://www.codewars.com/' target={"_blank"}
                                                    > CodeWars</Button>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </CardColumns>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>


                    </Accordion>

                </div>


            <div className={styles.nextbutton}>
                <NextButton id={styles.left} before='/contact-us' isDark={true}/>
            </div>

        </main>

        </div>


    )
}

export default Resources;
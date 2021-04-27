import Head from 'next/head'
import Navbar from '../components/Navbar';
const icecream = () => {
    return (
        <div>
            <Head>
                <title>icecream</title>
                <h2>jus</h2>
            </Head>
            <div>
                <Navbar isDark={false} />
                <img src="https://www.thespruceeats.com/thmb/E69KpId_2UzDmLKqj_cqBTsyykw=/3135x3135/smart/filters:no_upscale()/GettyImages-90053856-588b7aff5f9b5874ee534b04.jpg" />
            </div>
        </div>
    )
}
export default icecream;
import Card from "../components/shared/Card";
import { Link } from 'react-router-dom';

function AboutPage() {
    return (
        <Card>
            <div className="about">
                About us
            </div>
            <Link to='/'>
                <b>Go back to home</b>
            </Link>
        </Card>
    )
}

export default AboutPage;
